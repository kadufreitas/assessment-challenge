import { Currency } from 'types'

type CurrencyObject = {
  [key: string]: {
    label: string
    img: string
  }
}

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
  public currenciesWithImage: { currency: Currency; img: string }[] = []

  calculateAmount(amount: number, toCurrency: string) {
    return (amount * parseFloat(toCurrency)).toFixed(6)
  }

  getCurrencies() {
    return this.currencies
  }

  getCurrenciesWithImage() {
    this.currenciesWithImage = this.currencies.map((currency) => {
      const img = require(`assets/${currency}.png`)
      return { currency, img }
    })

    return this.currenciesWithImage
  }

  mapCurrenciesWithImageToObject() {
    return this.currenciesWithImage.reduce((acc: CurrencyObject, currency) => {
      acc[currency.currency] = {
        label: currency.currency,
        img: currency.img,
      }
      return acc
    }, {})
  }
}
