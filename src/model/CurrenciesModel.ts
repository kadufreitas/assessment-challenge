import { Currency } from 'types'

export class CurrenciesModel {
  public currencies: Currency[] = [
    Currency.USD,
    Currency.EUR,
    Currency.BAT,
    Currency.BTC,
    Currency.BCH,
    Currency.CNY,
    Currency.ETH,
    Currency.GBP,
    Currency.CAD,
    Currency.CHF,
    Currency.XAU,
  ]

  calculateAmount(amount: number, toCurrency: string) {
    return (amount * parseFloat(toCurrency)).toFixed(6)
  }

  getCurrencies() {
    return this.currencies
  }
}
