<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue';
import { useForms } from '@/stores/forms';

const forms = useForms()
const openLayout = (type) => {
  forms.openLayout(type)
}
</script>
<template>
    <form id="success" >
    <h3 class="form-title text-center text-bg-info py-3 mb-3 rounded-3">
      Отзывы могут оставлять только авторизованные пользователи.
    <br>
      Хотите 
      <strong 
        style="cursor: pointer;"
        @click="openLayout('login')"
      >авторизоваться ?</strong>
    </h3>

    <btn-close-layout/>
  </form>
</template>
<style scoped >

</style>