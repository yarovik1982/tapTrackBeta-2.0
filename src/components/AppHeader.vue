<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import { useRouter } from "vue-router";
import { handleScroll } from "@/functions/scroll";

const isScrolled = ref(false)
const updateScroll = () => {
  isScrolled.value = handleScroll()
}
onMounted(()=>{
  window.addEventListener('scroll', updateScroll)
})
onBeforeUnmount(()=>{
  window.addEventListener('scroll',updateScroll)
})
const router = useRouter()
const emits = defineEmits(['show-form'])
const showForm = (type) => {
  emits('show-form', type)
}
const handleLogout = (type) => {
  localStorage.removeItem('user')
  router.push('/')
  emits('show-form', type)
}
const auth = ref(false)
</script>
<template>
  <nav id="topPanel" class="navbar navbar-expand navbar-dark bg-dark ">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="../assets/images/Layer1.svg" alt="BEER" />
        <strong style="margin-left: 20px">Tap</strong><span>Treck</span>
      </RouterLink>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="navbarUnCollapsed"
      >
        <ul class="navbar-nav flex-grow-1">
          <form action="#" class="form px-3 w-100" role="search">
            <div class="input-group input-group-sm">
              <input
                style="
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                "
                type="search"
                class="form-control form-search-input border border-3 border-warning"
                placeholder=""
                aria-label="Имя пользователя"
                aria-describedby="basic-addon1"
              />
              <button
                class="btn btn-warning text-white"
                type="button"
                id="button-addon1"
                style="
                  border-top-right-radius: 20px;
                  border-bottom-right-radius: 20px;
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </button>
            </div>
          </form>
        </ul>
        <div class="buttons ms-3">
          <button class="btn btn-warning text-white btn-sm text-capitalise"
            @click="showForm('login')"
          >
            Авторизация
          </button>
          <button
            class="btn btn-warning text-white btn-sm text-capitalize ms-1"
            @click="showForm('register')"
          >
            Регистрация
          </button>
        </div>
        <div class="buttons ms-3">
          <button class="btn btn-warning btn-sm text-white text-capitalize"
            @click="handleLogout('login')"
          >
            выход
          </button>
        </div>
      </div>
    </div>
  </nav>
  <nav :class="['navbar', 'navbar-expand', { 'bg-dark': isScrolled, 'bg-body-tertiary bg-opacity-50': !isScrolled }]">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100">
          <li class="nav-item ">
            <RouterLink :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]" to="/">Главная</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]" to="/place" >Места</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]" to="/beer">Пиво</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]" to="/brewery">Пивоварни</RouterLink>
          </li>
         
         
          <li class="nav-item ms-3">
            <a role="button" :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]" @click="showForm('writeUs')">Написать нам</a>
          </li>        
          <li class="nav-item ms-auto" >
            <RouterLink to="/profile" :class="['nnav-link', 'py-0', 'position-relative', {'text-white': isScrolled, '': !isScrolled}]">Профиль</RouterLink>
          </li>        
        </ul>
        
      </div>
    </div>
  </nav>
</template>
<style scoped>

.nnav-link.router-link-active::before{
   position: absolute;
   content:"";
   top: 100%;
   left: 0;
   width: 50%;
   height: 3px;
   background-color: yellow;
}
</style>
