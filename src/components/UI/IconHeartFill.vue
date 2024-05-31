<script setup>

const props = defineProps({
   state: { type: Boolean, required: false }
})
</script>
<template>
    <i class="bi bi-heart-fill text-warning" :state="state"></i>
</template>
<style scoped >
i{
   color: #ffc107;
   cursor: pointer;
}
</style>