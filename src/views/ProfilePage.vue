<script setup>
import { RouterView } from 'vue-router'
import { getUser } from '@/functions/storage';
// import { useRouter } from 'vue-router'

const emits = defineEmits(['open-form'])
const openForm = () => {
    emits('open-form')
}
const user = getUser()
const userRole = user.role
// const router = useRouter()
// const currentRouter = router.currentRoute.value.path
</script>
<template>
    
    <nav class="navbar navbar-expand bg-body-tertiary mt-5">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around">
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-favorite"
              >Избранное</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile-reviews"
              >Мои Отзывы</RouterLink
            >
          </li>
          <li class="nav-item" v-if="userRole === 2 || userRole === 3">
            <RouterLink class="nav-link py-0" to="/profile-places"
              >Мои точки продаж</RouterLink
            >
          </li>

          <li class="nav-item" v-if="userRole === 3 || userRole === 1">
            <RouterLink class="nav-link py-0" to="/profile-brewery"
              >Мои пивоварни</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
        <div class="col-8">
            <RouterView
                @open-form="openForm"
            ></RouterView>
        </div>
        <div class="col-4">
            <h5 class="text-center">Profile</h5>
        </div>
    </div>
  </div>
</template>
<style scoped >
.nav-item {
  border-radius: 0.5rem;
}
.nav-item:has(.router-link-active) {
  background-color: #ffc107;
}
.nav-link {
  transition: all 0.3s linear;
}
.nav-link.router-link-active {
  color: #fff;
  text-shadow: 0 1px #000;
}
</style>