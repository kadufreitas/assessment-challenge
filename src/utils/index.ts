import { Currency, CurrencyPairs } from 'types'

export const getMostViewedCurrencies = (tickers: CurrencyPairs[], currentCurrency: Currency) => {
  if (!tickers) return []

  const mostViewedCurrencies = [
    Currency.EUR,
    Currency.USD,
    Currency.GBP,
    Currency.RUB,
    Currency.JPY,
    Currency.CHF,
    Currency.BRL,
    Currency.CNY,
    Currency.HKD,
    Currency.ILS,
  ]
  const mostViewedCurrenciesWithoutCurrent = mostViewedCurrencies.filter(
    (currency) => currency !== currentCurrency,
  )

  const filtered = tickers.filter((ticker) =>
    mostViewedCurrenciesWithoutCurrent.includes(ticker.currency as Currency),
  )

  return filtered
}
