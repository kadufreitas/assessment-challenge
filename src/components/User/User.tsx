import { getUserInfo } from 'api'
import { useCookie } from 'hooks/useCookies'
import { useEffect } from 'react'

export const User = () => {
  const { getItem } = useCookie()
  const token = getItem('token')
  useEffect(() => {
    const user = getUserInfo(token)
    console.log(user)
  }, [token])

  return <div>user</div>
}
