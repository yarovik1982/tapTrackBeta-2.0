<script setup>
import { RouterView } from 'vue-router';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const currRouter = ref(router.currentRoute.value.path)
watchEffect(router.currentRoute,(to, from) => {
  currRouter.value = to
})
const emits = defineEmits(['toggle-layout'])
const toggleLayout = (typeForm) => {
   emits('toggle-layout', typeForm)
  //  console.log(typeForm);
}
</script>
<template>
     <nav class="navbar navbar-expand position-fixed w-100" style="top:90px; left:0;" >
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100">
          <li class="nav-item ">
            <RouterLink class="nnav-link py-0 position-relative" to="/">Главная</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink class="nnav-link py-0 position-relative" to="/place">Места</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink class="nnav-link py-0 position-relative" to="/beer">Пиво</RouterLink>
          </li>
          <li class="nav-item ms-3">
            <RouterLink class="nnav-link py-0 position-relative" to="/brewery">Пивоварни</RouterLink>
          </li>
         
          <li class="nav-item ms-3">
            <a role="button" class="nnav-link py-0" @click="toggleLayout('writeUs')">Написать нам</a>
          </li>        
        </ul>
        
      </div>
    </div>
  </nav>
</template>
<style scoped >
.router-link-active::before{
   position: absolute;
   content:"";
   top: 100%;
   left: 0;
   width: 50%;
   height: 3px;
   background-color: yellow;
}
</style>