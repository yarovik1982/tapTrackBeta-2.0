import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
import axios from "axios";

export const usePlaces = defineStore('placeStore',{
   state:() => ({
      placeList:[],
   }),
   actions:{
      async getPlace(){
         const response = await axios.get(BASE_URL + "/place/list?limit=45&offset=0",{
            headers:{
               'Content-Type': 'application/json' 
            }
         }) 
         this.placeList = response.data
      }
   }
}) 