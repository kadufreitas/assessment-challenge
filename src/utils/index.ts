import { CurrenciesModel } from 'model/CurrenciesModel'
import { Currency, CurrencyPairs } from 'types'

const currenciesModel = new CurrenciesModel()
export const getFilteredCurrencies = (tickers: CurrencyPairs[], currentCurrency: Currency) => {
  if (!tickers) return []

  const currencies = currenciesModel.getCurrencies()

  const currenciesWithoutCurrent = currencies.filter((currency) => currency !== currentCurrency)

  const filtered = tickers.filter((ticker) =>
    currenciesWithoutCurrent.includes(ticker.currency as Currency),
  )

  return filtered
}
