import { ReactNode } from 'react'
import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.div`
  font-weight: 600;
  color: #3c4a5b;
  font-size: 1rem;
`

interface ListItemProps {
  label: string
  append?: string | ReactNode
}

export const ListItem = ({ label, append }: ListItemProps) => {
  return (
    <Item>
      <Label>{label}</Label>
      {append}
    </Item>
  )
}
