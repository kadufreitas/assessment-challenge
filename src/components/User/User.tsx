import { getUserInfo } from 'api'
import { useFetchData } from 'hooks/useFetchData'
import { type UserType } from 'types'

export const User = () => {
  const { data: user, loading, error } = useFetchData<UserType>(getUserInfo)

  if (loading) {
    return <div>Loading...</div>
  }
  if (!user || error) return null

  return (
    <div>
      <div>{user.name}</div>
      {/* {user.currencies.map((currency) => (
        <div key={currency}>{currency}</div>
      ))} */}
    </div>
  )
}
