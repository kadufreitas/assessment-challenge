import { TickersForCurrency } from 'components/TickersForCurrency'
import { User } from 'components/User'
import { useAppContext } from 'context'

export const Container = () => {
  const { isLogged } = useAppContext()

  return (
    <div>
      {isLogged && (
        <>
          <User />
          <TickersForCurrency />
        </>
      )}
      {!isLogged && <p>Not logged</p>}
    </div>
  )
}
