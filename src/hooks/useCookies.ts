import Cookies from 'js-cookie'

export const useCookie = () => {
  return {
    getItem: (key: string) => {
      return Cookies.get(key)
    },
    setItem: (key: string, value: string) => {
      return Cookies.set(key, value)
    },
    removeItem: (key: string) => {
      return Cookies.remove(key)
    },
  }
}
