import styled from 'styled-components'
import { Dropdown } from 'ui/Dropdown'
import { OptionType } from 'ui/Dropdown/Dropdown'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f9fc;
  padding: 1rem;
  border-radius: 1rem;
`

const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  /* font-family: 'Poppins'; */
  color: #3c4a5b;
  &:focus-visible {
    outline: none;
    outline-offset: none;
  }
`
type InputSelectProps = {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeSelect: (e: OptionType) => void
  value: number
  options: OptionType[]
}
export const InputSelect = ({
  handleChangeInput,
  handleChangeSelect,
  value,
  options,
}: InputSelectProps) => {
  return (
    <Wrapper>
      <Input type="text" onChange={handleChangeInput} value={value} data-testid="amount-input" />
      <Dropdown callback={handleChangeSelect} options={options} />
    </Wrapper>
  )
}
