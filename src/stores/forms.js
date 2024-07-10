import { defineStore } from "pinia";

export const useForms = defineStore('forms',{
   state:() => ({
      formType:null,
      isActive:false,
   }),
   // getters:{
   //    getFormType(){
   //       return this.formType
   //    },
   //    getIsActive(){
   //       return this.isActive
   //    },
   // },
   actions:{
      setFormType(value){
         this.formType = value
      },
      toggleIsActive(){
         this.isActive = !this.isActive
      },
      clearFormType(){
         this.formType = null
         this.isActive = false
      }
   },
})