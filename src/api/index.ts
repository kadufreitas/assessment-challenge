import SDK from '@uphold/uphold-sdk-javascript'

// "proxy": "http://api-sandbox.uphold.com",
const sdk = new SDK({
  baseUrl: 'https://api-sandbox.uphold.com',
  clientId: '9648007ecbc76bb58237b48790610331094c0763',
  clientSecret: '3f82ec4e6aecf8b83390456291a12ca4eefdc976',
})

export const authorize = (code: string) => sdk.authorize(code)

export const getMe = (options?: Record<string, unknown>) => sdk.getMe(options)
export async function getUserInfo(accessToken?: string) {
  try {
    sdk.getMe({
      headers: {
        origin: 'https://wallet-sandbox.uphold.com',
      },
    })
  } catch (error) {
    console.log(error)
  }
  //   'Access-Control-Allow-Headers': 'Content-Type',
  //           'Access-Control-Allow-Origin': '*',
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PATCH',
  //   try {
  //     // const response = await axios.request({
  //     //   method: 'GET',
  //     //   url: `${process.env.BASE_URL}/v0/me`,
  //     //   headers: {
  //     //     Authorization: `Bearer ${accessToken}`,
  //     //   },
  //     // })

  //     const response = await fetch(`${process.env.REACT_APP_API_SANDBOX_UPHOLD}/api/v0/me`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     })

  //     return response
  //   } catch (error) {
  //     console.log(error)
  //   }
}

export const getOauthClient = () => {
  debugger
  return !!sdk.oauthClient
}

export const getAuthorizationUrl = () => {
  const state = Math.floor(Math.random() * 100) // Random number

  const authorizationUrl = `${process.env.REACT_APP_AUTH_URL}${process.env.REACT_APP_CLIENT_ID}?scope=user:read&state=${state}`
  return authorizationUrl
}
