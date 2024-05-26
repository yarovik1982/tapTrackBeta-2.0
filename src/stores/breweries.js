import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
import { useForms } from "./forms";
import axios from "axios";

const token = JSON.parse(localStorage.getItem('token'))
const formsStore = useForms()

export const useBreweries = defineStore('breweriesStore', {
   state: () => ({
      loading:false,
      dataList:[]
   }),
   getters:{},
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
               formsStore.openLayout('login')
            } else {
               console.error('Error fetching data:', error)
            }
         }
      }
   }

})