<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue'
// import FloatLabel from 'primevue/floatlabel';


// const emits = defineEmits(['close-form'])
// const closeForm = () => {
//   emits('close-form')
// }
</script>
<template>
  <form id="login">
    <h3 class="form-title text-center">Авторизация</h3>
    
      <btn-close-layout/>
    
    
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label"
        >Адрес электронной почты</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        Мы никогда никому не передадим вашу электронную почту.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 d-flex">
      <input
        type="checkbox"
        class="form-check-input order-0"
        id="exampleCheck1"
      />
      <label class="form-check-label order-1 ms-1" for="exampleCheck1"
        >Проверить меня</label
      >
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
<style scoped></style>
