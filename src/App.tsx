import { getAuthorizationUrl, getUserInfo } from 'api'
import { User } from 'components/User'
import { useAuthUser } from 'hooks/useAuthUser'

function App() {
  const { token } = useAuthUser()
  const authorizationUrl = getAuthorizationUrl()

  const handleClick = async () => {
    await getUserInfo()
  }

  return (
    <div className="App">
      <button onClick={handleClick}>GET ME</button>
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
