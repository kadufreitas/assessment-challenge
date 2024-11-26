import styled from 'styled-components'
import { ReactComponent as LogoSVG } from 'assets/logo.svg'
import { LoginButton } from 'components/LoginButton'

const TopBar = styled.div`
  margin: 2rem 1.2rem;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`
const Menu = styled.div`
  margin: 0 1.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  a {
    color: #8696a7;
    text-decoration: none;
  }
`
const LoginBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled(LogoSVG)`
  /* margin: 0 1.2rem; */
`

export const Header = () => {
  return (
    <TopBar>
      <Menu>
        <a href="/"> Personal</a>
        <a href="/"> Business</a>
        <a href="/"> Partners</a>
      </Menu>
      <LogoBox>
        <Logo />
      </LogoBox>
      <LoginBox>
        <LoginButton />
      </LoginBox>
    </TopBar>
  )
}
