import { authorize, getMe, getOauthClient } from 'api'
import { useEffect } from 'react'
import { useSearchParams } from './useSearchParams'
import { useCookie } from './useCookies'

export const useUser = () => {
  const user = getMe()
}
