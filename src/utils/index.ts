import { Currency, CurrencyPairs } from 'types'

export const getFilteredCurrencies = (
  tickers: CurrencyPairs[],
  currentCurrency: Currency,
  currencies: Currency[],
) => {
  if (!tickers) return []

  const currenciesWithoutCurrent = currencies.filter((currency) => currency !== currentCurrency)

  const filtered = tickers.filter((ticker) =>
    currenciesWithoutCurrent.includes(ticker.currency as Currency),
  )

  return filtered
}
