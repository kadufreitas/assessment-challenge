import { sdk } from 'api'

// 0efa34c76b35e48b9bf5bd0f0c09252b9a4b37ed
sdk
  .authorize('code')
  .then(() => sdk.getMe())
  .then((user) => {
    console.log(user)
  })

console.log('sdk', sdk)
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      APP
    </div>
  )
}

export default App
