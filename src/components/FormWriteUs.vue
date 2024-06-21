<script setup>
import BtnCloseLayout from "@/components/UI/BtnCloseLayout.vue";
import { ref } from "vue";
import { useConatctsStore } from "@/stores/conatcts";
import { useForms } from "@/stores/forms";

const userName = ref('')
const phone = ref('')
const email = ref('')
const theme = ref('')

const forms = useForms()

const contacts = useConatctsStore()
const handleSubmit = async() => {
  const feedbackData = {
    userName:userName.value,
    phone:phone.value,
    email:email.value,
    theme:theme.value,
  }
  console.log(feedbackData);
  contacts._CREATE_CONTACT(feedbackData)
}
</script>
<template>
  <form id="writeUas" class="w-75" @submit.prevent="handleSubmit">
    <h3 class="form-title text-center">Написать нам</h3>
    <btn-close-layout />
    <div class="row g-3 mb-3 mt-3">
      <div class="col">
        <div class="mb-3 position-relative">
          <input type="text" class="app-form-control" 
         id="inpLogin" 
         v-model="userName"
        placeholder="Имя"
        required
      />
       <label for="inpLogin" class="app-form-label position-absolute">Имя</label>
       <i class="bi bi-person-fill position-absolute"></i>
        </div>
      </div>
      <div class="col">
        <div class="mb-3 position-relative">
          <input type="text" class="app-form-control" 
         id="inpPhone" 
         v-model="phone"
        placeholder="телефон"
        required
      />
       <label for="inpphone" class="app-form-label position-absolute">Телефон</label>
       <i class="bi bi-telephone-fill position-absolute"></i>
        </div>
      </div>
    </div>
    <div class="row g-3 mb-3">
      <div class="col">
        <div class="mb-3 position-relative">
          <input type="email" class="app-form-control" 
         id="inpEmail" 
         v-model="email"
        placeholder="Почта"
        required
      />
       <label for="inpEmail" class="app-form-label position-absolute">Почта</label>
       <i class="bi bi-envelope-fill position-absolute"></i>
        </div>
      </div>
      <div class="col">
        <div class="mb-3 position-relative">
          <textarea class="app-form-control" 
            placeholder="Тема" 
            id="inpTheme"
            v-model="theme"
            required
          ></textarea>
       <label for="inpTheme" class="app-form-label-area position-absolute">Тема</label>
       <i class="bi bi-chat-left-fill position-absolute"></i>
        </div>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-warning text-white d-block m-auto rounded rounded-5"
      style="width: 270px"
    >
      Отправить
    </button>
  </form>
</template>
<style scoped>
.app-form-label,.app-form-label-area {
  top: 50%;
  left: 9px;
  transform: translateY(-50%);
  transition: top 0.3s ease;
}

.app-form-control.inValid {
  border: 1px solid rgb(255, 40, 40);
}
.app-form-control {
  width: 100%;
  border: 1px solid #ffc107;
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  cursor: text;
}
.app-form-control:focus,
.app-form-control:active {
  outline: none;
}
.bi-person-fill,
.bi-eye-slash-fill,
.bi-envelope-fill,
.bi-telephone-fill,
.bi-chat-left-fill {
  right: 10px;
  color: rgba(0, 0, 0, 0.6);
  top: 50%;
  transform: translate(0, -50%);
}
.app-form-label,
.app-form-control,
.app-form-label-area {
  transition: all 0.2s;
  touch-action: manipulation;
  letter-spacing: 0.05em;
  resize: none;
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
.app-form-control:placeholder-shown ~ .app-form-label-area{
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, -20px);
}
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

.app-form-control:focus::-webkit-input-placeholder {
  opacity: 0;
}

.app-form-control:not(:placeholder-shown) ~ .app-form-label {
  transform: translate(0, -45px) scale(1);
  cursor: pointer;
}
.app-form-control:not(:placeholder-shown) ~ .app-form-label-area{
  transform: translate(0, -50px) scale(1);
  cursor: pointer;
}
.app-form-control:focus ~ .app-form-label {
  transform: translate(0, -45px);
}
.app-form-control:focus ~ .app-form-label-area {
  transform: translate(0, -50px);
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
</style>
