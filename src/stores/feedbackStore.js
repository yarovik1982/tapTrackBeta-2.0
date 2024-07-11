import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/constants'
import axios from 'axios'


export const useFeedbackStoreStore = defineStore('feedbackStore', {
 state: () => ({
   feedbackListMain:[]
 }),
 getters: {
   getFeedbackListMain: state => state.feedbackListMain
 },
 actions: {
   async _FEEDBACK_LIST_MAIN(){
      const min = 16
      const response = await axios.get(`${BASE_URL}/feedback/list/main`,{
         headers:{
            'Content-Type': "application/json"
         }
      })
      if(response.data.length >= min){
         this.feedbackListMain = response.data
         
      }else{
         const addedSlides = []
         const totalAdded = min - response.data.length
         for(let i = 0; i < totalAdded; i++){
            addedSlides.push({feedbackText:'Default',imageFeedback:''})
         }
         this.feedbackListMain = [...addedSlides, ...response.data]
      }
   },
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useFeedbackStoreStore, import.meta.hot))
}
