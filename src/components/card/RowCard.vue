<script setup>
const props = defineProps({
   divClass:{type:Array, default:[]}
})
</script>
<template>
    <div :class="divClass"><slot></slot></div>
</template>
<style scoped >

</style>