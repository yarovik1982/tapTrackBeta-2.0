<script setup>
const props = defineProps({
   divClass:{
      type:String,
      default:'adv'
   },
   titleText:{
      type:String,
      default:''
   },
   data:{
      type:Array,
      required:true
   },
   
})
</script>
<template>
    <div :class="divClass">
      <h5 class="adv-title text-center">{{titleText}}</h5>
      <div class="adv-row d-flex bg-info p-2 align-items-center"
         v-for="item in data"
         :key="item.name"
         :data="data"
      >
         <img :src="item.image" class="border border-1" :alt="item.name" style="width: 50px;
         height: 50px;">
         <div class="item-title ms-3">{{ item.name }}</div>
      </div>
    </div>
</template>
<style scoped >

</style>