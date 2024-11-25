import { getTickersForCurrency } from 'api'
import { useFetchData } from 'hooks/useFetchData'
import { CurrenciesModel } from 'model/CurrenciesModel'
import React, { useEffect, useRef, useState } from 'react'
import { Currency, CurrencyPairs } from 'types'
import { getFilteredCurrencies } from 'utils'

const currenciesModel = new CurrenciesModel()

export const TickersForCurrency = () => {
  const [amount, setAmount] = useState<number>(0)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const {
    data: tickers,
    loading,
    error,
    fetchData,
    setData,
  } = useFetchData<CurrencyPairs[]>({
    promise: () => getTickersForCurrency(currency),
    useCache: true,
    cacheKey: currency,
  })
  const tickersCached = tickers ? getFilteredCurrencies(tickers, currency) : []
  const previousCurrency = useRef<Currency>(currency)

  // Fetch new data when currency changes
  useEffect(() => {
    // Skip if currency hasn't changed.
    //This also prevent to fetch data twice on the first render
    if (currency === previousCurrency.current) return
    fetchData({
      promise: () => getTickersForCurrency(currency),
      cacheKey: currency,
    })
    previousCurrency.current = currency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency])

  if (error) return null

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '0'

    setAmount(parseInt(value))
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency)
    setData(null)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChangeAmount}
          value={amount}
          data-testid="amount-input"
        />
        <select onChange={handleChange} value={currency} data-testid="currency-select">
          {currenciesModel.getCurrencies().map((currency) => (
            <option key={currency} value={currency} data-testid="currency-option">
              {currency}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : // Show values only if amount is greater than 0
      amount > 0 ? (
        tickersCached.map((ticker) => {
          const value = currenciesModel.calculateAmount(amount, ticker.ask)

          return (
            <div key={ticker.pair} data-testid="ticker">
              {value} - {ticker.currency}
            </div>
          )
        })
      ) : null}
    </div>
  )
}
