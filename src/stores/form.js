import { defineStore } from "pinia";
import { ref } from "vue";


export const useForm = defineStore('formStore', () => {
   const typeForm = ref('')
   const configs = {
      'login':[
         {'divClass':'mb-3','labelFor':'email','labelClass':'form-label','labelText':'Email','inpType':'email','inpClass':'form-control form-control-sm','inpId':'email','inpName':'email', 'model':'mail'},
         {'divClass':'mb-3','labelFor':'password','labelClass':'form-label','labelText':'Password','inpType':'password','inpClass':'form-control form-control-sm','inpId':'password','inpName':'password', 'model': 'password'},
         {'divClass':'mb-3 d-flex','labelFor':'inpCheck','labelClass':'form-check-label order-1 ms-1','labelText':'Запомнить меня','inpType':'checkbox','inpClass':'form-check-input order-0','inpId':'inpCheck','inpName':'check'},
      ],
      'register':[],
      'writeUs':[],
      'editProfile':[],
   }

   function setConfig(config){
      const currConfig = configs[config]
      return currConfig
   }
   return {
      typeForm,
      setConfig
   }
})