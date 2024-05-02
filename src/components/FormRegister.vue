<script setup>
const emits = defineEmits(['close-form'])
const closeForm = () => {
   emits('close-form')
}
</script>
<template>
    <form id="register">
    <h3 class="form-title text-center">Регистрация</h3>
    <i
      class="bi bi-x fs-1 text-white position-absolute fw-bold"
      style="top: -25px;right: -40px; z-index: 110; cursor: pointer; font-weight: bold;"
      @click="closeForm"
    ></i>
    <div class="mb-3">
      <label for="inpName" class="form-label">Name</label>
      <input type="text" class="form-control form-control-sm" id="inpName" />
    </div>
    <div class="mb-3">
      <label for="inpLogin" class="form-label">Login</label>
      <input type="text" class="form-control form-control-sm" id="inpLogin" />
    </div>
    <div class="mb-3">
      <label for="inpEmail" class="form-label">Email</label>
      <input type="email" class="form-control form-control-sm" id="inpEmail" />
    </div>
    <div class="mb-3">
      <label for="inpPass" class="form-label">Password</label>
      <input
        type="password"
        class="form-control form-control-sm"
        id="inpPass"
      />
    </div>
    <div class="mb-3">
      <label for="inpPassConfirm" class="form-label">Password Confirm</label>
      <input
        type="password"
        class="form-control form-control-sm"
        id="inpPassConfirm"
      />
    </div>
    <div class="mb-3">
      <input type="checkbox" class="form-check-input" id="inpCheck" />
      <label class="form-check-label order-1 ms-1" for="inpCheck"
        >Запомнить меня</label
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
<style scoped >

</style>