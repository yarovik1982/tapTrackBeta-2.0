import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
// import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
// const formsStore = useForms()

export const useBreweries = defineStore('breweriesStore', {
   state: () => ({
      loading:false,
      dataList:[],
      breweryItem:{}
   }),
   getters:{
      getBreweryItem:(state) => state.breweryItem
   },
   actions:{
      async BREWERY_LIST_USER(id){
         try{
            // this.loading = true
            const response = await axios.get(`${BASE_URL}/brewery/list/user?userId=${id}`, {
               headers:{
                  Authorization: `Bearer ${token}`
               }
            })
            this.dataList = await response.data
            // this.loading = false
         } catch (error){
            if(error.response && error.response.status === 401){
               await localStorage.clear()
               // formsStore.openLayout('login')
            } else {
               console.error('Error fetching data:', error)
            }
         }
      },

      async _BREWERY_CREATE(data, params) {
         try {
           const headers = data instanceof FormData
             ? { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
             : { "Content-Type": "application/json", "Authorization": `Bearer ${token}` };
       
           const response = await axios.post(`${BASE_URL}/brewery/create`, data, {
             headers,
             params
           });
       
           return response.data; // Возвращаем данные из ответа
         } catch (error) {
           console.error("Error making request:", error.status, error.response?.data);
           throw error; // Перебрасываем ошибку наверх
         }
       },

       async _BREWERY_PROFILE_BREWERYID( breweryId){
         
            const response = await axios.get(`${BASE_URL}/brewery/profile/${breweryId}`,{
               headers:{
                  "Content-Type": "application/json",
                  // "Authorization": `Bearer ${token}`
               },
               
            })
            this.breweryItem = response.data
            return response.data
         
       }
   }

})