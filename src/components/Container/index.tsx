import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { TickersForCurrency } from 'components/TickersForCurrency'
import { User } from 'components/User'
import { useAppContext } from 'context'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
`

const StyledMain = styled.div`
  margin: 10rem auto;
`

export const Container = () => {
  const { isLogged } = useAppContext()

  return (
    <div>
      {isLogged && (
        <StyledContainer>
          <Header />
          <StyledMain>
            <User />
            <TickersForCurrency />
          </StyledMain>
          <Footer />
        </StyledContainer>
      )}
      {!isLogged && <p>Not logged</p>}
    </div>
  )
}
