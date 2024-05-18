import { defineStore } from "pinia";
import { generateCooki } from "@/functions/generateСookies"; 

export const useConfirmAge = defineStore('confirmAge',{
   state:() => ({
      isConfirm: JSON.parse(localStorage.getItem('confirmed')) || null,
   }),

   actions:{
      setConfirmAge(){
         this.isConfirm = generateCooki;
         localStorage.setItem('confirmed', JSON.stringify(generateCooki))
      }
   }
})