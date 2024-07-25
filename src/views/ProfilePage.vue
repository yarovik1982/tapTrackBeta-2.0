<script setup>
import { RouterView } from 'vue-router'
import {  computed, ref } from 'vue';
import { useForms } from '@/stores/forms';
// import { useUserStore } from '@/stores/userStore';
// import { storeToRefs } from 'pinia';


// const userStore = useUserStore()

// // const profile = JSON.parse(userStore.getProfile)

// const { userProfile } = storeToRefs(useUserStore)


const user = JSON.parse(localStorage.getItem('user'))

const userRole = ref(user?.userRole)

const userName = ref(user?.userName)
const login = ref(user?.login)
const mail = ref(user?.mail)
const image = ref(user?.image)

const formsStore = useForms()

const openForm = (type) => {
  formsStore.openLayout(type)
}
</script>
<template>
    
    <nav class="navbar navbar-expand bg-body-tertiary mt-5">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around">
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile_favorite"
              >Избранное</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link py-0" to="/profile_reviews"
              >Мои Отзывы</RouterLink
            >
          </li>
          <li class="nav-item" v-if="userRole === 2 || userRole === 3">
            <RouterLink class="nav-link py-0" to="/profile_places"
              >Мои точки продаж</RouterLink
            >
          </li>

          <li class="nav-item" v-if="userRole === 3 || userRole === 1">
            <RouterLink class="nav-link py-0" to="/profile_brewery"
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
            <RouterView></RouterView>
        </div>
        <div class="col-4">
        
        <div class="flex-body">
          <div class="flex-dir-col">
            
            <div class="flex-avatar">
              <img :src="image" alt="AVATAR" />
              <div
                class="flex-avatar-upload bg-opacity-50 bg-warning d-flex justify-content-center position-absolute bottom-0 w-100"
              >
                <div class="flex-avatar-icon" v-if="image">
                  <i
                    class="bi bi-trash fs-2 text-white"
                    style="cursor: pointer"
                    @click="handleClick"
                    title="Удалить аватар"
                  ></i>
                </div>
                <div class="flex-avatar-icon" v-else>
                  <i
                    class="bi bi-camera fs-2 text-white"
                    style="cursor: pointer"
                    title="Установить аватар"
                    @click="openForm('addAvatar')"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <form class="form-profile p-2 mt-5 position-relative">
            <div class="flex-avatar-settings">
              <div class="flex-avatar-icon">
                <i
                  class="bi bi-pencil fs-4 text-warning"
                  style="cursor: pointer"
                  title="Редактировать профиль"
                  @click="openForm('editProfile')"
                ></i>
              </div>
            </div>
            <h5 class="text-center">Profile</h5>
            <div class="mb-3 border-bottom border-2 border-warning">
              <label class="form-label">Имя</label>
              <input
                type="text"
                class="w-100 border-0 px-2 fw-bold"
                :value="userName"
                readonly
              />
            </div>
            <div class="mb-3 border-bottom border-2 border-warning">
              <label class="form-label">Login</label>
              <input
                type="text"
                class="w-100 border-0 px-2 fw-bold"
                :value="login"
                readonly
              />
            </div>
            <div class="mb-3 border-bottom border-2 border-warning">
              <label class="form-label">Email</label>
              <input
                type="text"
                class="w-100 border-0 px-2 fw-bold"
                :value="mail"
                readonly
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  border: rgb(255, 193, 7) 1px solid;
  border-radius: 16px;
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
  right:  0;
}
.flex-avatar-settings > .flex-avatar-icon {
  opacity: 0;
  transition: opacity 0.5s linear;
  -webkit-transition: opacity 0.5s linear;
  -moz-transition: opacity 0.5s linear;
  -ms-transition: opacity 0.5s linear;
  -o-transition: opacity 0.5s linear;
}

.flex-avatar-upload {
  opacity: 0;
  transition: opacity 0.5s linear;
  -webkit-transition: opacity 0.5s linear;
  -moz-transition: opacity 0.5s linear;
  -ms-transition: opacity 0.5s linear;
  -o-transition: opacity 0.5s linear;
}
.flex-avatar:hover .flex-avatar-upload {
  opacity: 1;
}
.form-profile:hover .flex-avatar-settings > .flex-avatar-icon {
  opacity: 1;
}
</style>