import { defineStore } from 'pinia'

interface CountState {
  count: number
}

const useCountStore = defineStore('count', {
  state: (): CountState => ({
    count: 0
  })
})

export default useCountStore
