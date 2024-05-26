<script setup>
const props = defineProps({
   src:{
      type:String,
      required:true
   },
   alt:{
      type:String,
      default:'IMAGE'
   },
   imageClass:{
      type:Array,
      default:[]
   },
   divClass:{
      type:Array,
      default:[]
   }
})

</script>
<template>
    <div :class="props.divClass">
      <img :src="props.src" :class="props.imageClass" :alt="props.alt">
    </div>
</template>
<style scoped >

</style>