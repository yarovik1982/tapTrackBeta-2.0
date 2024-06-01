import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/url'
import axios from 'axios'

export const useGetDataStore = defineStore('getData', {
   state:() => ({
      limit:45,
      offset:0,
      placeList:[],
      beerList:[],
      breweryList:[],
      // рекламные блоки
      placeAdvList:[],
      beerAdvList:[],
      breweryAdvList:[]
   }),
   actions:{
      async PLACE_LIST(){
         const response = await axios.get(`${BASE_URL}/place/list?limit=${this.limit}&offset=${this.offset}`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.placeList = response.data
      },
      async BEER_LIST(){
         const response = await axios.get(`${BASE_URL}/beer/list?limit=${this.limit}&offset=${this.offset}`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.beerList = response.data
      },
      async BREWERY_LIST(){
         const response = await axios.get(`${BASE_URL}/brewery/list?limit=${this.limit}&offset=${this.offset}`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.breweryList = response.data
      },
      async PLACE_ADBLOCK(){
         const response = await axios.get(`${BASE_URL}/place/adblock`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.placeAdvList = response.data
      },
      async BEER_ADBLOCK(){
         const response = await axios.get(`${BASE_URL}/beer/adblock`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.beerAdvList = response.data
      },
      async BREWERY_ADBLOCK(){
         const response = await axios.get(`${BASE_URL}/brewery/adblock`,{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.breweryAdvList = response.data
      },
   }
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useGetDataStore, import.meta.hot))
}
