const PORT = 5000

const BASE_URL = `https://localhost:${PORT}`

export async function getToken(code: string) {
  try {
    const response = await fetch(`${BASE_URL}/token?code=${code}`)
    const result = await response.json()

    return result?.access_token ?? null
  } catch (error) {
    console.log(error)
  }
}
export async function getUserInfo(accessToken?: string) {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      method: 'GET',
      headers: {
        referrerPolicy: 'unsafe-url',
        Authorization: `Bearer ${accessToken}`,
        // 'Content-Type': 'application/json',
      },
    })

    return response
  } catch (error) {
    console.log(error)
  }
}

export const getAuthorizationUrl = () => {
  const state = Math.floor(Math.random() * 100) // Random number

  const authorizationUrl = `${process.env.REACT_APP_AUTH_URL}${process.env.REACT_APP_CLIENT_ID}?scope=user:read&state=${state}`
  return authorizationUrl
}
