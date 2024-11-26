import { getAuthorizationUrl } from 'api'
import { User } from 'components/User'
import { useAppContext } from 'context'
import styled from 'styled-components'

const Button = styled.div`
  background-color: #49cc68;
  color: white;
  padding: 0.4rem 1.2rem;
  border-radius: 2rem;
  font-size: 14px;
  cursor: pointer;
`

export const LoginButton = () => {
  const { isLogged } = useAppContext()
  return isLogged ? (
    <User />
  ) : (
    <Button onClick={() => (window.location.href = getAuthorizationUrl())}>Log in</Button>
  )
}
