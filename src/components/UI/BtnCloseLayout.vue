<script setup>
import { useForms } from '@/stores/forms';

const formsStore = useForms()
const closeForm = () => {
   formsStore.closeLayout()
}
</script>
<template>
    <i
      class="bi bi-x fs-1 text-white position-absolute fw-bold"
      style="top: -25px;right: -40px; cursor: pointer; font-weight: bold;"
      @click="closeForm"
    ></i>
</template>
<style scoped >

</style>