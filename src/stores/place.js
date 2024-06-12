import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
// const formsStore = useForms()

export const usePlace = defineStore('placeStore', {
   state: () => ({
     dataList :[],
     loading :false,
     itemPlase:{},
     isShow:null

   }),
   
actions:{
   async PLACE_LIST_USER( id){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/place/list/user?userId=${id}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         this.dataList = await response.data
         // this.loading = false
      } catch (error){
         if(error.response && error.response.status === 401){
            await localStorage.clear()
            formsStore.openLayout('login')
         } else {
            console.error('Error fetching data:', error)
         }
      }
   },
   async PLACE_PROFILE_PLACEID(placeId){
      try{
         // this.loading = true
         const response = await axios.get(`${BASE_URL}/place/profile/${placeId}`, {
            headers:{
               Authorization: `Bearer ${token}`
            }
         })
         
         this.itemPlase = await response.data
         this.isShow = response.status
      } catch (error){
         if(error.response && error.response.status === 401){
            formsStore.openLayout('login')
         }
         if(error.response && error.response.status === 404) {
            this.isShow = 404
         }
         else {
            console.error('Error fetching data:', error)
         }
      }
   },
   async _PLACE_CREATE(data, params) {
      try {
        const headers = data instanceof FormData
          ? { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
          : { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
    
        const response = await axios.post(`${BASE_URL}/place/create`, data, {
          headers,
          params
        });
    
        return response.data; // Возвращаем данные из ответа
      } catch (error) {
        console.error("Error making request:", error.status, error.response?.data);
        throw error; // Перебрасываем ошибку наверх
      }
    }
    
    

}
   
})

