<script setup>
import AppHeader from '@/components/AppHeader.vue'
import LayoutForModal from '@/components/LayoutForModal.vue'
import AppToTop from '@/components/UI/AppToTop.vue'
import AppFooter from '@/components/AppFooter.vue'
import { unScroll, scroll, scrollUp } from '@/functions/scroll'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const currentFormType = ref('')
const showForm = (type) => {
  currentFormType.value = type
  unScroll()
}
const closeForm = () => {
  currentFormType.value = ''
  scroll()
}
const scrollTo = () => {
  scrollUp()
}
</script>

<template>
  <LayoutForModal 
    v-if="currentFormType" 
    :type="currentFormType" 
    @close-form="closeForm"
  ></LayoutForModal>
 
 <div class="position-sticky top-0" style="z-index: 5;">
  <AppHeader @show-form="showForm"></AppHeader>
 </div>
  <AppToTop @click="scrollTo"></AppToTop>
  <RouterView 
    @open-form="showForm"
  />
  <AppFooter @open-form="showForm"></AppFooter>
</template>

<style scoped>

</style>
