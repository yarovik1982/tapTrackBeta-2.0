<script setup>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import IMask from '@/components/IMack.vue'
import { nextTick, onMounted, ref } from 'vue';
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue';
import { useUserAuth } from '@/stores/user-auth'
import { useForms } from '@/stores/forms';
import { formatDate } from '@/functions/formattedDate';


const onAccept = (value) => {
  return value
}

const userId = JSON.parse(localStorage.getItem('user'))?.userId
const formsStore = useForms()
const userAuthStore = useUserAuth()

const user = JSON.parse(userAuthStore.Get_Profile)

const userName = ref(user?.userName)
const mail = ref(user?.mail)
const telephoneNumber = ref(user?.telephoneNumber)
const birthday = ref(user?.birthday)
const city = ref(user?.city)
const country = ref(user?.country)
const sendData = () => {
   const data = {
      userName:userName.value,
      mail: mail.value,
      telephoneNumber:telephoneNumber.value,
      birthday:formatDate(birthday.value),
      country:country.value,
      city:city.value
   }
   userAuthStore._USER_EDIT(data, userId)
  console.log(data);
  formsStore.closeLayout()
  setTimeout(()=> {
    formsStore.openLayout('success')
    setTimeout(() => formsStore.closeLayout(),2000)
  },500)

  setTimeout(() => {location.reload()},2500)
}
</script>
<template>
    <form id="editProfile" @submit.prevent="sendData">
    <h3 class="form-title text-center py-3 mb-3">Редакторовать профиль</h3>
    <btn-close-layout/>
    
    <div class="mb-5 position-relative">
       <input type="text" class="app-form-control fw-bold" 
         id="inpName" 
         v-model="userName"
        placeholder="Имя"
      />
       <label for="inpName" class="app-form-label position-absolute">Имя</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="email" class="app-form-control fw-bold"   
         id="inpEmail" 
         v-model="mail"
          placeholder="Почта"
         
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Почта</label>
       <i class="bi bi-envelope-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">

      <input class="app-form-control fw-bold"   
         id="inpPhone" 
         v-model="telephoneNumber"
          placeholder="Телефон"
          
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Телефон</label>
       <i class="bi bi-telephone-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <!-- <date-pick v-model="birthday" :hasInputElement="false"></date-pick> -->
      <input type="text" v-model="birthday"  id="inpBirthday" class="app-form-control" v-if="birthday">
      <input type="date" v-model="birthday"  id="inpBirthday" class="app-form-control" v-else>

<!-- ___ IMask___ -->
      <!-- <IMask class="app-form-control fw-bold" 
        type="date"
        id="inpBirthday" 
        v-model="birthday" 
        :value="birthday"
        placeholder="dd-mm-yyyy"
        @accept="onAccept"
        :mask="'00-00-0000'"
      /> -->

       <label for="inpBirthday" class="app-form-label position-absolute">Дата рождения</label>
       <!-- <i class="bi bi-person-fill position-absolute"></i> -->
    </div>
    <div class="mb-5 position-relative">
      
      <input type="text" class="app-form-control fw-bold"   
         id="inpCountry" 
         v-model="country"
          placeholder="Страна"
        
      />
       <label for="inpCountry" class="app-form-label position-absolute">Страна</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control fw-bold"  
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
.bi-person-fill,
.bi-eye-slash-fill,
.bi-envelope-fill,
.bi-telephone-fill{
   right: 10px;
   color:rgba(0,0,0,.6);
   top: 50%;
   transform: translate(0, -50%);
}
.app-form-label, 
.app-form-control {
  transition: all 0.2s;
  touch-action: manipulation;
  letter-spacing: 0.05em;
}


input:focus {
  outline: 0;
}

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
.app-form-control:focus ~ .app-form-label{
  transform: translate(0, -45px);
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
</style>                                              