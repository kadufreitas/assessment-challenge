import { getToken } from 'api'
import { useEffect, useRef } from 'react'
import { useSearchParams } from './useSearchParams'
import { tokenManager } from 'api/token'

export const useAuthUser = () => {
  const token = tokenManager.getToken()
  const params = useSearchParams()
  const code = params.get('code')
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    const fetchAuthorize = async (code: string) => {
      try {
        const token = await getToken(code)

        if (token) {
          tokenManager.setToken(token)
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (code && !token && isMounted.current) {
      fetchAuthorize(code)
    }

    isMounted.current = true
  }, [code, token])

  return { token }
}
