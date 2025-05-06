import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', () => {
  const isShowModal = ref(false)

  const setValueModalWindow = (value: boolean) => {
    isShowModal.value = value
  }
  
  return {
    isShowModal,
    setValueModalWindow,
  }
})
