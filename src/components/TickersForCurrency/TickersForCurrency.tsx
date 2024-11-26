import { getTickersForCurrency } from 'api'
import { useFetchData } from 'hooks/useFetchData'
import { CurrenciesModel } from 'model/CurrenciesModel'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Currency, CurrencyPairs } from 'types'
import { Chip } from 'ui/Chip'
import { OptionType } from 'ui/Dropdown/Dropdown'
import { InputSelect } from 'ui/InputSelect'
import { List, ListItem } from 'ui/List'
import { getFilteredCurrencies } from 'utils'

const Box = styled.div`
  margin-bottom: 1.5rem;
`

const BoxList = styled.div`
  margin: 0 1.2rem;
`

const Wrapper = styled.div`
  width: 400px;
`

const currenciesModel = new CurrenciesModel()

export const TickersForCurrency = () => {
  const [amount, setAmount] = useState<number>(0)
  const [currency, setCurrency] = useState<Currency>(Currency.USD)

  // Fetch data from the API and cache the result
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

  // Get the list of currencies from the model
  const currencies = currenciesModel.getCurrencies()
  // Get the list of currencies with images from the model
  const currenciesWithImage = currenciesModel.getCurrenciesWithImage()
  // Get the object with the currencies as keys
  const currenciesObject = currenciesModel.mapCurrenciesWithImageToObject()
  // Filter the tickers based on the current currency
  const tickersFiltered = tickers ? getFilteredCurrencies(tickers, currency, currencies) : []
  // Keep track of the previous currency
  const previousCurrency = useRef<Currency>(currency)
  // Fetch new data when the currency changes
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

  /**
   * Handle the change of amount
   */
  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || '0'

    setAmount(parseInt(value))
  }

  /**
   * Handle the change of currency
   */
  const handleChange = (option: OptionType) => {
    setCurrency(option.value)
    setData(null)
  }

  return (
    <Wrapper>
      <Box>
        <InputSelect
          handleChangeInput={handleChangeAmount}
          handleChangeSelect={handleChange}
          value={amount}
          options={currenciesWithImage.map((option) => ({
            id: option.currency,
            label: option.currency,
            img: option.img,
            value: option.currency,
          }))}
        />
      </Box>
      {loading ? (
        <div>Loading...</div>
      ) : // Show values only if amount is greater than 0
      amount > 0 ? (
        <BoxList>
          <List>
            {tickersFiltered.map((ticker) => {
              const value = currenciesModel.calculateAmount(amount, ticker.ask)
              const item = currenciesObject[ticker.currency]

              return <ListItem key={ticker.pair} label={value} append={<Chip item={item} />} />
            })}
          </List>
        </BoxList>
      ) : null}
    </Wrapper>
  )
}
