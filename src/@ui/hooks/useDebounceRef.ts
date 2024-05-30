import { customRef } from 'vue'

export const useDebounceRef = <T>(value: T, delay = 200, callback?: (value: T) => {}) => {
  return customRef((track, trigger) => {
    let timeout: ReturnType<typeof setTimeout>
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
          callback && callback(newValue)
        }, delay)
      }
    }
  })
}
