import { BASE_URL, breweryList } from '@/constants/constants'
import axios from 'axios'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useForms } from './forms';

const token = localStorage.getItem('token')
const userId = JSON.parse(localStorage.getItem('user'))?.userId

export const useBreweryStore = defineStore('breweryStore', {
 state: () => ({
   limit:5,
   offset:0,
   hasMoreBrewery:true,
   isLoaded:false,
   breweryProfile:[], breweryList:[], breweryListUser:[], breweryAdBlock:[]
 }),
 getters: {
   getBreweryProfile: state => state.breweryProfile,
   getBreweryList: state => state.breweryList,
   getBreweryListUser: state => state.breweryListUser,
   getBreweryAdBlock: state => state.breweryAdBlock
 },
 actions: {
   async _BREWERY_CREATE(){},
   async _BREWERY_PROFILE(){},
   async _BREWERY_LIST(){
      const config = {
         headers: { "Content-Type": "application/json" },
         params: { limit: this.limit, offset: this.offset },
      }
      try{
         const response = await axios.get(`${BASE_URL}/brewery/list`, config)
         if(response.status === 200){
            this.breweryList = [...this.breweryList, ...response.data]
            this.offset += this.limit
            this.hasMoreBrewery = response.data.length === this.limit
            this.isLoaded = true
         }
      }catch(error){
         console.log(error);
      }
   },
   async loadMoreBrewery(){
      if(this.hasMoreBrewery){
         await this._BREWERY_LIST()
      }
   },
   async _BREWERY_LIST_USER(){
      try{
         const response = await axios.get(`${BASE_URL}/brewery/list/user`, {
            headers:{
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`
            },
            params:{userId}
         })
         if(response.status === 200){
            this.breweryListUser = response.data
         }
      }catch(e){
         useForms().openLayout('login')
         console.log(e);
      }
   },
   async _BREWERY_ADBLOCK(){
      try{
         const response = await axios.get(`${BASE_URL}/brewery/adblock`, {
             headers:{"Content-Type": "application/json"}
         })
         if(response.status === 200){
             this.breweryAdBlock = response.data
             return response.data
         }
     }catch(error){
         console.log(error);
     }
   },






 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useBreweryStore, import.meta.hot))
}
