import { getTickersForCurrency } from 'api'
import { useFetchData } from 'hooks/useFetchData'
import React, { useEffect, useRef, useState } from 'react'
import { Currency, CurrencyPairs } from 'types'
import { getMostViewedCurrencies } from 'utils'

export const TickersForCurrency = () => {
  const [amount, setAmount] = useState<number>(0)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)
  const {
    data: tickers,
    loading,
    error,
    fetchData,
    setData,
  } = useFetchData<CurrencyPairs[]>(() => getTickersForCurrency(currency))
  const previousCurrency = useRef<Currency>(currency)
  const tickersCached = tickers ? getMostViewedCurrencies(tickers, currency) : []

  // Fetch new data when currency changes
  useEffect(() => {
    // Skip if currency hasn't changed.
    //This also prevent to fetch data twice for USD on the first render
    if (currency === previousCurrency.current) return
    fetchData(() => getTickersForCurrency(currency))
    previousCurrency.current = currency
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
        <input type="text" onChange={handleChangeAmount} value={amount} />
        <select onChange={handleChange} value={currency}>
          <option value={Currency.USD}>{Currency.USD}</option>
          <option value={Currency.EUR}>{Currency.EUR}</option>
          <option value={Currency.GBP}>{Currency.GBP}</option>
        </select>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        tickersCached.map((ticker) => {
          const value = (amount * parseFloat(ticker.ask)).toFixed(2)

          return (
            <div key={ticker.pair}>
              {ticker.pair} - {value}
            </div>
          )
        })
      )}
    </div>
  )
}
