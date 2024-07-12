<script setup>
import InputPassword from '@/components/UI/InputPassword.vue'
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue'
import { ref } from 'vue';
import { useForms } from '@/stores/forms';
import { useUserStoreStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const formsStore = useForms()
const userStore = useUserStoreStore()
const router = useRouter()
const login = ref('')
const password = ref('')

const handleSubmit = async() => {
  const data = {
    login:login.value,
    password: password.value
  }
  await userStore._USER_AUTH(data)
  await formsStore.closeLayout()
  router.push('/profile_favorite')
}
</script>
<template>
    <form id="login" @submit.prevent="handleSubmit">
        <h3 class="form-title text-center py-3 mb-3">Авторизация</h3>
        <btn-close-layout />

        <div class="mb-5 position-relative">
            <input
                type="text"
                class="app-form-control"
                id="inpName"
                v-model="login"
                placeholder="Логин"
            />
            <label for="inpName" class="app-form-label position-absolute"
                >Логин</label
            >
            <i class="bi bi-person-fill position-absolute"></i>
        </div>
        <input-password
            :label="'Пароль'"
            :for="'inpPassword'"
            :id="'inpPassword'"
            :placeholder="'Пароль'"
            v-model="password"
        ></input-password>
        <div class="mb-3">
            <p>
                Нет аккаунта?
                <strong style="cursor: pointer" @click="formsStore.openLayout('register')"
                    >Зарегистрироваться</strong
                >
            </p>
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
<style scoped>
.app-form-label {
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
.bi-envelope-fill {
    right: 10px;
    color: rgba(0, 0, 0, 0.6);
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

.app-form-control:not(:placeholder-shown) ~ .app-form-label {
    transform: translate(0, -45px) scale(1);
    cursor: pointer;
}
.app-form-control:focus ~ .app-form-label {
    transform: translate(0, -45px);
}
.app-form-control:-webkit-autofill {
    transition: all 5000s ease-in-out 0s;
}
</style>
