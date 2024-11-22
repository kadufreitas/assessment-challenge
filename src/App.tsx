import { getAuthorizationUrl } from 'api'
import { User } from 'components/User'
import { useAuthUser } from 'hooks/useAuthUser'

function App() {
  const { token } = useAuthUser()
  const authorizationUrl = getAuthorizationUrl()

  return (
    <div className="App">
      {token ? (
        <>
          <p>Logged</p>
          <User />
        </>
      ) : (
        <p>
          Please <a href={authorizationUrl}>authorize this app</a> on Uphold's Sandbox.
        </p>
      )}
    </div>
  )
}

export default App
