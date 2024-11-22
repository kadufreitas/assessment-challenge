import { sdk } from 'api'

sdk
  .authorize('code')
  .then(() => sdk.getMe())
  .then((user) => {
    console.log(user)
  })
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      APP
    </div>
  )
}

export default App
