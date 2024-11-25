import { Container } from 'components/Container'
import { AppProvider } from 'context'

function App() {
  return (
    <AppProvider>
      <Container />
    </AppProvider>
  )
}

export default App
