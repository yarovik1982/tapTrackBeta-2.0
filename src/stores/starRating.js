import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStarRatingStore = defineStore('starRating', {
 state: () => ({
   currentId:null
 }),
 getters: {},
 actions: {},
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useStarRatingStore, import.meta.hot))
}
