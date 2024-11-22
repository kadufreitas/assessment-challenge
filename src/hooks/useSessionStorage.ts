export const useSessionStorage = () => {
  return {
    getItem: (key: string) => {
      return window.sessionStorage.getItem(key)
    },
    setItem: (key: string, value: string) => {
      window.sessionStorage.setItem(key, value)
    },
    removeItem: (key: string) => {
      window.sessionStorage.removeItem(key)
    },
  }
}
