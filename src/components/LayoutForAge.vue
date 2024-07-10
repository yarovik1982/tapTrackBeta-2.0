<script setup>
import FormAgreeAge from '@/components/FormAgreeAge.vue';

const emits = defineEmits(['set-confirm'])
const setConfirm = () => {
   emits('set-confirm')
}
</script>
<template>
    <div class="layout position-fixed top-0 start-0 w-100 h-100 "
      
    >
      <form-agree-age @set-confirm="setConfirm"></form-agree-age>
    </div>
</template>
<style scoped >

</style>