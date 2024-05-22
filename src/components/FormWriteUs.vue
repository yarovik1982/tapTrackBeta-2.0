<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue';
</script>
<template>
    <form id="writeUas" >
    <h3 class="form-title text-center">Написать нам</h3>
    <btn-close-layout/>
    <div class="row g-3 mb-3">
      <div class="col">
        <label for="inpName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Имя"
          aria-label="Имя"
        />
      </div>
      <div class="col">
        <label for="inpPhone" class="form-label">Phone</label>
        <input
          type="text"
          class="form-control form-control-sm"
          
        />
      </div>
    </div>
    <div class="row g-3 mb-3">
      <div class="col">
        <label for="inpName" class="form-label">Name</label>
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Имя"
          aria-label="Имя"
        />
      </div>
      <div class="col">
        <label for="inpPhone" class="form-label">Phone</label>
        <input
          type="text"
          class="form-control form-control-sm"
          
        />
      </div>
    </div>
    <button type="submit" class="btn btn-warning text-white d-block m-auto rounded rounded-5" style="width: 270px;">Отправить</button>
  </form>
</template>
<style scoped >

</style>