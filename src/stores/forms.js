import { defineStore } from "pinia";
import { unScroll, scroll } from '@/functions/scroll'


export const useForms = defineStore("formsStore", {
  state: () => ({
    formType: '',
  }),
  
  actions: {
    openLayout(type) {
      unScroll()
      return this.formType = type;
    },
    closeLayout(){
      scroll()
      return this.formType = ''
    }
  },
});
