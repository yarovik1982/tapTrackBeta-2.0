import { defineStore } from "pinia";
import { unScroll, scroll } from '@/functions/scroll'


export const useForms = defineStore("formsStore", {
  state: () => ({
    formType: '',
    formLoginActive:false,
    currId:null,
  }),
  getters:{
    getFormLoginActive:state => state.formLoginActive,
    getCurrId:state => state.currId
  },
  actions: {
    openLayout(type) {
      unScroll()
     
      if(type === 'success'){
        this.formLoginActive = true
      }
      return this.formType = type;
    },
    closeLayout(){
      scroll()
      if(this.formLoginActive){
        this.formLoginActive = false
      }
      return this.formType = ''
    },
    setCurrId(id){
      this.currId = id
      
    }
  },
});
