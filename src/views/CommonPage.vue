<script setup>
import NavbarCommon from '@/components/NavbarCommon.vue';

const emits = defineEmits(['emit-layout','close-layout'])
const toggleLayout = (typeForm) => {
  emits('emit-layout', typeForm)
}
</script>

<template>
  <NavbarCommon @toggle-layout="toggleLayout('writeUs')"></NavbarCommon>
  <RouterView class="custom-padding-top"
    @toggle-layout="toggleLayout('writeUs')"
  ></RouterView>
</template>
