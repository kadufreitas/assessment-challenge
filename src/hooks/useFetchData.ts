import { useEffect, useRef, useState } from 'react'

export const useFetchData = <T>(promise: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)
  const hasRun = useRef<boolean>(false)

  const fetchData = async (promise: () => Promise<T>) => {
    setLoading(true)
    try {
      const response = await promise()
      setData(response)
    } catch (error: Error | unknown) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true
    // const fetchData = async () => {
    //   setLoading(true)
    //   try {
    //     const response = await promise()
    //     setData(response)
    //   } catch (error: Error | unknown) {
    //     setError(error)
    //   } finally {
    //     setLoading(false)
    //   }
    // }

    if (!loading) fetchData(promise)
  }, [])

  return { data, loading, error, fetchData, setData }
}
