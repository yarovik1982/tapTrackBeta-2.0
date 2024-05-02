<script setup>
import AppHeader from '@/components/AppHeader.vue'
import LayoutForModal from '@/components/LayoutForModal.vue'
import FormLogin from '@/components/FormLogin.vue';
import FormRegister from '@/components/FormRegister.vue';
import FormWriteUs from '@/components/FormWriteUs.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isActive = ref(false)
const currentTypeForm = ref(null)
const toggleLayout = (typeForm) => {
  isActive.value = !isActive.value
  currentTypeForm.value = typeForm
}
const closeForm = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <LayoutForModal 
    v-if="isActive" 
    @toggle-layout="toggleLayout"
    
  >
    <FormLogin 
      :class="['custom-form', {show: isActive}]"
      v-if="currentTypeForm === 'login'"
      @close-form="closeForm"
    ></FormLogin>
    <FormRegister 
      :class="['custom-form', {show: isActive}]"
      v-if="currentTypeForm === 'register'"
      @close-form="closeForm"
    ></FormRegister>
    <FormWriteUs
    :class="['custom-form', {show: isActive}]"
    v-if="currentTypeForm === 'writeUs'"
    @close-form="closeForm"
    ></FormWriteUs>
</LayoutForModal>
  <AppHeader @toggle-layout="toggleLayout"></AppHeader>
  
  <RouterView 
    @emit-layout="toggleLayout('writeUs')"
  />
</template>

<style scoped>

</style>
