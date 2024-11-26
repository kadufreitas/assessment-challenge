import { useState } from 'react'
import styled from 'styled-components'
import { Currency } from 'types'
import DropdownIcon from 'assets/dropdown-icon.svg'

const DropdownContainer = styled.div`
  position: relative;
  cursor: pointer;
`

const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  padding: 8px;
  background-color: #fff;
`

type DropdownOptionsProps = {
  $isOpen: boolean
}

const DropdownOptions = styled.div<DropdownOptionsProps>`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  z-index: 10;
  margin-top: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`

const OptionImage = styled.img`
  margin-right: 10px;
  width: 20px;
`

const OptionLabel = styled.span`
  font-size: 14px;
`

type ArrowIndicatorProps = {
  $isOpen: boolean
}

const ArrowIndicator = styled.div<ArrowIndicatorProps>`
  background-image: url(${DropdownIcon});
  width: 10px;
  background-size: contain;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 8px;

  rotate: ${(props) => (props.$isOpen ? '180deg' : '0deg')};
`

export type OptionType = { id: string; label: string; img: string; value: Currency }
interface DropdownProps {
  options: OptionType[]
  callback: (option: OptionType) => void
}

export const Dropdown = ({ options, callback, ...rest }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]) // Default selected option
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option)
    setIsOpen(false)
    callback(option)
  }

  return (
    <DropdownContainer onClick={() => setIsOpen(!isOpen)} {...rest}>
      <Selected data-testid="dropdown-select">
        <OptionImage src={selectedOption.img} alt={selectedOption.label} />
        <OptionLabel>{selectedOption.label}</OptionLabel>
        <ArrowIndicator $isOpen={isOpen} />
      </Selected>
      <DropdownOptions $isOpen={isOpen}>
        {options.map((option) => (
          <Option
            key={option.id}
            onClick={() => handleOptionClick(option)}
            data-testid="dropdown-option"
          >
            <OptionImage src={option.img} alt={option.label} />
            <OptionLabel>{option.label}</OptionLabel>
          </Option>
        ))}
      </DropdownOptions>
    </DropdownContainer>
  )
}
