<script setup>
import AppHeader from '@/components/AppHeader.vue'
import LayoutForModal from '@/components/LayoutForModal.vue'
import AppToTop from '@/components/UI/AppToTop.vue'
import AppFooter from '@/components/AppFooter.vue'
import LayoutForAge from '@/components/LayoutForAge.vue'
import { unScroll, scroll, scrollUp } from '@/functions/scroll'
import { useConfirmAge } from '@/stores/confirmAge'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const confirmAge = useConfirmAge()
const {isConfirm} = storeToRefs(confirmAge)
const shouldPreventScroll = ref(false)
const setConfirm = () => {
  
  confirmAge.setConfirmAge()
}

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
  <Teleport to="body" v-if="!isConfirm" >
    <LayoutForAge @set-confirm="setConfirm">
    </LayoutForAge>
  </Teleport>
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
