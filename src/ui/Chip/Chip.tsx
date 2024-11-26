import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 60px;
  /* justify-content: space-between; */
  font-weight: 600;
  color: #3c4a5b;
  font-size: 0.7rem;
  align-items: center;
`

const Image = styled.img`
  width: 20px;
`

interface ChipProps {
  item: {
    label: string
    img: string
  }
}

export const Chip = ({ item }: ChipProps) => {
  return (
    <Wrapper>
      <Image src={item.img} alt={item.label} />
      {item.label}
    </Wrapper>
  )
}
