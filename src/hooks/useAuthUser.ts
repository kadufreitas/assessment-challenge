import { getToken } from 'api'
import { useEffect, useRef, useState } from 'react'
import { useCookie } from './useCookies'
import { useSearchParams } from './useSearchParams'

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
        const token = await getToken(code)

        if (token) {
          setToken(token)
          setItem('token', token)
        }
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
