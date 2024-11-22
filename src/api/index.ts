import SDK from '@uphold/uphold-sdk-javascript'

export const sdk = new SDK({
  baseUrl: 'http://api-sandbox.uphold.com',
  clientId: 'foo',
  clientSecret: 'bar',
})
