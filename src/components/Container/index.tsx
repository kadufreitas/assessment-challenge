import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { TickersForCurrency } from 'components/TickersForCurrency'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
`

const StyledMain = styled.div`
  margin: 5rem auto;
  width: 400px;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    color: #3c4a5b;
  }
  p {
    color: #8696a7;
  }
`

export const Container = () => {
  return (
    <div>
      <StyledContainer>
        <Header />
        <StyledMain>
          {/* <User /> */}
          <Hero>
            <h1>Currency Converter</h1>
            <p>
              Receive competitive and transparent pricing with no hidden spreads. See how we
              compare.
            </p>
          </Hero>
          <TickersForCurrency />
        </StyledMain>
        <Footer />
      </StyledContainer>
    </div>
  )
}
