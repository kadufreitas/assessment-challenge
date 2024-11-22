import { authorize } from 'api'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from './useSearchParams'
import { useCookie } from './useCookies'

export const useAuthUser = () => {
  const { getItem, setItem } = useCookie()
  const currentToken = getItem('token')
  const [token, setToken] = useState<string | null>(currentToken || null)
  const params = useSearchParams()
  const code = params.get('code')
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    const fetchAuthorize = async (code: string) => {
      try {
        debugger
        const token = await authorize(code)

        setToken(token.access_token)
        setItem('token', token.access_token)
      } catch (error) {
        setItem('token', '')
        console.error(error)
      }
    }
    if (code && !token && isMounted.current) {
      fetchAuthorize(code)
    }

    isMounted.current = true
  }, [code, setItem, token])

  return { token }
}
