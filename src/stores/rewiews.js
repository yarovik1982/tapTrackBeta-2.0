import { defineStore, acceptHMRUpdate } from 'pinia'

export const useRewiewsStore = defineStore('rewiews', {
 state: () => ({
   
 }),
 getters: {},
 actions: {},
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useRewiewsStore, import.meta.hot))
}
