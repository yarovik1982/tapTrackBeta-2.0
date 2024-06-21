import { defineStore, acceptHMRUpdate } from 'pinia'

export const useQrCodeStore = defineStore('qrCode', {
 state: () => ({
   content:''
 }),
 getters: {
   getContent:(state) => state.content
 },
 actions: {
   setContent(value){
      this.content = value
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useQrCodeStore, import.meta.hot))
}
