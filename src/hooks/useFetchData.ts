import { useEffect, useRef, useState } from 'react'

const cache = new Map<string, unknown>()

type UseFetchDataProps<T> = {
  promise: () => Promise<T>
  useCache?: boolean
  cacheKey?: string
}
export const useFetchData = <T>({ promise, useCache = false, cacheKey }: UseFetchDataProps<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | unknown | null>(null)
  const hasRun = useRef<boolean>(false)

  const fetchData = async ({ promise, cacheKey }: UseFetchDataProps<T>) => {
    if (useCache && cacheKey && cache.has(cacheKey)) {
      setData(cache.get(cacheKey) as T)
    } else {
      setLoading(true)
      try {
        const response = await promise()
        setData(response)
        if (cacheKey) cache.set(cacheKey, response)
      } catch (error: Error | unknown) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    if (!loading) fetchData({ promise, cacheKey })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error, fetchData, setData }
}
