<script setup>
import NavbarCommon from '@/components/NavbarCommon.vue';
import MainContent from '@/components/MainContent.vue';

const emits = defineEmits(['emit-layout'])
const toggleLayout = () => {
  emits('emit-layout')
}
</script>
<template>
  
  <NavbarCommon @toggle-layout="toggleLayout"></NavbarCommon>
    <MainContent :title="'place page'"></MainContent>
</template>
<style scoped >

</style>