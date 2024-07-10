<script setup>
import InputText from '@/components/UI/InputText.vue';

// import InputOtp from 'primevue/inputotp';


import { nextTick, onMounted, ref } from 'vue';
const emits = defineEmits(['close-form'])
const closeForm = () => {
   emits('close-form')
}
const userName = ref('')
const mail = ref('')
const telephoneNumber = ref('')
const birthday = ref('')
const city = ref('')
const country = ref('')


const sendData = () => {
   const data = {
      userName:userName.value,
      mail: mail.value,
      telephoneNumber:telephoneNumber.value,
      birthday:birthday.value,
      country:country.value,
      city:city.value
   }
  console.log(data);
}
</script>
<template>
    <form id="editProfile" @submit.prevent="sendData">
    <h3 class="form-title text-center py-3 mb-3">Редакторовать профиль</h3>
    <i
      class="bi bi-x fs-1 text-white position-absolute fw-bold"
      style="top: -25px;right: -40px; cursor: pointer; font-weight: bold;"
      @click="closeForm"
    ></i>
    
    <div class="mb-5 position-relative">
       <input type="text" class="app-form-control" 
         id="inpName" 
         v-model="userName"
        placeholder="Имя"
      />
       <label for="inpName" class="app-form-label position-absolute">Имя</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="email" class="app-form-control"   
         id="inpEmail" 
         v-model="mail"
          placeholder="Почта"
         
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Почта</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpPhone" 
         v-model="telephoneNumber"
          placeholder="Телефон"
         
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Телефон</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpBirthday" 
         v-model="birthday"
          placeholder="Дата рождения дд-мм-гггг"
        
      />
       <label for="inpBirthday" class="app-form-label position-absolute">Дата рождения</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpCountry" 
         v-model="country"
          placeholder="Страна"
        
      />
       <label for="inpCountry" class="app-form-label position-absolute">Страна</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"  
         id="inpCity" 
         v-model="city"
          placeholder="Город"
         
      />
       <label for="inpCity" class="app-form-label position-absolute">Город</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    
    
    <button
      type="submit"
      class="btn btn-warning rounded rounded-5 text-white d-block m-auto"
      style="width: 270px"
    >
      Отправить
    </button>
  </form>
</template>
<style scoped >
.app-form-label {
   top: 50%;
   left: 9px;
   transform: translateY(-50%);
   transition: top .3s ease;
}
.app-form-control.inValid {
   border: 1px solid rgb(255, 40, 40);

}
.app-form-control {
   width: 100%;
   border:1px solid #ffc107;
   height: 40px;
   padding: 0 8px;
   border-radius: 8px;
   appearance: none;
  -webkit-appearance: none;
  cursor: text;
}
.app-form-control:focus,
.app-form-control:active{
   outline: none;
}
.bi-person-fill{
   right: 10px;
   color:rgba(0,0,0,.6)
}
.app-form-label, 
.app-form-control {
  transition: all 0.2s;
  touch-action: manipulation;
  letter-spacing: 0.05em;
}


input:focus {
  outline: 0;
  /* border-bottom: 1px solid #666; */
}
.app-form-control:focus ~ .app-form-label{
  transform: translate(0, -45px);
}
/* label {
   text-transform: uppercase; 
} */

.app-form-control:placeholder-shown ~ .app-form-label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, -15px);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

.app-form-control:focus::-webkit-input-placeholder {
  opacity: 0;
}

.app-form-control:not(:placeholder-shown) ~ .app-form-label
 {
  transform: translate(0, -45px) scale(1);
  cursor: pointer;
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
</style>                                              