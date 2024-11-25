import { fireEvent, queryByTestId, render, screen } from '@testing-library/react'
import { useFetchData } from 'hooks/useFetchData'
import { Currency } from 'types'
import { mockCurrencyPairs } from '../mocks'
import { TickersForCurrency } from '../TickersForCurrency'

jest.mock('hooks/useFetchData')
const mockUseFetchData = jest.mocked(useFetchData)

beforeEach(() => {
  mockUseFetchData.mockReturnValue({
    data: mockCurrencyPairs,
    loading: false,
    error: null,
    fetchData: jest.fn(),
    setData: jest.fn(),
  })
  jest.clearAllMocks()
})

describe('TickersForCurrency', () => {
  it('renders initial state with default currency (USD)', () => {
    const { getByText } = render(<TickersForCurrency />)
    expect(getByText('USD')).toBeInTheDocument()
  })

  it('handles change currency select', () => {
    const { getByText, getByTestId, getAllByTestId } = render(<TickersForCurrency />)
    const select = getByTestId('currency-select')
    fireEvent.change(select, { target: { value: Currency.EUR } })
    const options = getAllByTestId('currency-option')
    const eurOption = options.filter(
      (option) => option.textContent === 'EUR',
    ) as HTMLOptionElement[]
    expect(eurOption[0].selected).toBe(true)
    expect(getByText('EUR')).toBeInTheDocument()
  })

  it('renders loading state', () => {
    mockUseFetchData.mockReturnValue({
      data: [],
      loading: true,
      error: null,
      fetchData: jest.fn(),
      setData: jest.fn(),
    })
    const { getByText, getByTestId } = render(<TickersForCurrency />)
    const input = getByTestId('amount-input')

    fireEvent.change(input, { target: { value: '100' } })

    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders tickers when amount is greater than 0', async () => {
    const { container, getByTestId } = render(<TickersForCurrency />)
    const input = getByTestId('amount-input')

    expect(queryByTestId(container, 'data-testid="ticker"')).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: '100' } })

    const dataElement = await screen.findByText('95.201098 - EUR')

    expect(dataElement).toBeInTheDocument()
  })

  it('renders no tickers when amount is 0 or less', () => {
    const { container } = render(<TickersForCurrency />)

    expect(queryByTestId(container, 'data-testid="ticker"')).not.toBeInTheDocument()
  })
})
