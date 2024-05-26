<script setup>
import { RouterView } from 'vue-router'
import { getUser } from '@/functions/storage';
import { ref } from 'vue';
import { useForms } from '@/stores/forms';
import { useUserAuth } from '@/stores/user-auth'
import { storeToRefs } from 'pinia';


const userAuthStore = useUserAuth()
const { userProfile, token } = storeToRefs(userAuthStore)
const acces = token.value


const formsStore = useForms()
const openForm = (type) => {
   formsStore.openLayout(type)
}
const user = JSON.parse(userProfile.value)
const userRole = user?.userRole
const userName = ref(user?.userName)
const login = ref(user?.login)
const mail = ref(user?.mail)
const image = ref(user?.image)
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
            <RouterView/>
        </div>
        <div class="col-4">
            <h5 class="text-center">Profile</h5>
            <div class="flex-body">
        <div class="flex-dir-col">
          <div class="flex-avatar-settings">
            <div class="flex-avatar-icon">
              <i
                class="bi bi-pencil fs-2 text-warning"
                style="cursor: pointer"
                @click="openForm('editProfile')"
              ></i>
            </div>
            <div class="flex-avatar-icon">
              <i
                class="bi bi-trash fs-2 text-warning"
                style="cursor: pointer"
              ></i>
            </div>
          </div>
          <div class="flex-avatar">
            <img :src="image" alt="AVATAR" />
            <div
              class="flex-avatar-upload bg-opacity-50 bg-warning d-flex justify-content-center position-absolute bottom-0 w-100"
            >
              <div class="flex-avatar-icon">
                <i
                  class="bi bi-camera fs-2 text-white"
                  style="cursor: pointer"
                  @click="openForm('addAvatar')"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <form  class="p-2">
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Имя</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="userName" readonly>
          </div>
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Login</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="login" readonly>
          </div>
          <div class="mb-3 border-bottom border-2 border-warning">
            <label class="form-label">Email</label>
            <input type="text" class="w-100 border-0 px-2 fw-bold" :value="mail" readonly>
          </div>
        </form>
      </div>
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
.flex-body {
  padding: 1rem;
  border:rgb(255, 193, 7) 1px solid;
}
.flex-dir-col {
  position: relative;
}
.flex-avatar {
  margin: 0 auto;
  width: 250px;
  height: 250px;
  background: #ccc;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.flex-avatar-settings {
  width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
}
.flex-avatar-settings > .flex-avatar-icon{
  opacity: 0;
  transition: opacity .5s linear;
  -webkit-transition: opacity .5s linear;
  -moz-transition: opacity .5s linear;
  -ms-transition: opacity .5s linear;
  -o-transition: opacity .5s linear;
}

.flex-avatar-upload{
  opacity: 0;
  transition: opacity .5s linear;
  -webkit-transition: opacity .5s linear;
  -moz-transition: opacity .5s linear;
  -ms-transition: opacity .5s linear;
  -o-transition: opacity .5s linear;
}
.flex-avatar:hover .flex-avatar-upload{
  opacity: 1;
}
.flex-dir-col:hover .flex-avatar-settings > .flex-avatar-icon{
  opacity: 1;
}
</style>