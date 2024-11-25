export type UserType = {
  address: {
    city: string
    line1: string
    line2?: string
    zipCode: string
  }
  birthdate: string
  country: string
  email: string
  firstName: string
  fullName: string
  id: string
  identityCountry: string
  lastName: string
  name: string
  settings: {
    currency: string
    hasMarketingConsent: boolean
    hasNewsSubscription: boolean
    intl: {
      dateTimeFormat: { locale: string }
      language: { locale: string }
      numberFormat: { locale: string }
    }
    notifications: {
      type: string
      topic: string
      source: string
      enabled: boolean
    }[]
    otp: {
      email?: { update?: { enabled: boolean } }
      login?: { enabled: boolean }
      transactions?: {
        transfer?: { enabled: boolean }
        send?: { enabled: boolean }
        withdraw?: { crypto?: { enabled: boolean } }
      }
    }
  }
  memberAt: string | null
  state: string
  status: string
  type: string
  verifications: {
    termsEquities?: { status: string }
    termsFpsSepaDeposits?: { status: string }
  }
  balances: {
    available: string
    currencies: Record<string, unknown>
    pending: string
    total: string
  }
  currencies: string[]
  phones: {
    e164Masked: string
    id: string
    internationalMasked: string
    nationalMasked: string
    primary: boolean
    verified: boolean
  }[]
}

export type CurrencyPairs = {
  ask: string
  bid: string
  currency: string
  pair: string
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  BAT = 'BAT',
  BTC = 'BTC',
  BCH = 'BCH',
  ETH = 'ETH',
  GBP = 'GBP',
  CNY = 'CNY',
  CAD = 'CAD',
  CHF = 'CHF',
  XAU = 'XAU',
}
