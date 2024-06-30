<script setup>
const props = defineProps({
   max:{type:Number, required:true}
})
const model = defineModel()
</script>
<template>
    <input type="number" min="0" step="0.1" :max="max" v-model.number="model" class="inpRating">
</template>
<style scoped >
.inpRating {
   border: 1px solid #ffc107;
   width: 70px;
   border-radius: 4px;
   padding: 0 8px;
   outline: none;
   transform: translate(10px, 5px);
}

</style>