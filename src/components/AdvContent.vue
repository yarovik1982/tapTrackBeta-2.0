<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

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

const router = useRouter()
const appStore = useAppStore()
const handleClick = (item) => {
   if(props.titleText.includes('места')){
      appStore.setCurrentPlace(item.placeId)
      router.push(`/element-${item.placeId}`)
   }else if(props.titleText.includes('пивоварни')){
      appStore.setCurrentBrewery(item.id)
      router.push(`/element-${item.id}`)
   } else {
      appStore.setCurrentBeer(item.id)
      router.push(`/element-${item.id}`)
   }

}
</script>
<template>
    <div :class="divClass">
      <h5 class="adv-title text-center">{{titleText}}</h5>
      <div class="adv-row d-flex bg-info p-2 align-items-center"
         v-for="item in data"
         :key="item.id"
         :data="data"
         @click="handleClick(item)"
      >
         <img :src="item.image" class="border border-1" :alt="item.name" style="width: 50px;
         height: 50px;">
         <div class="item-title ms-3">{{ item.name }}</div>
      </div>
    </div>
</template>
<style scoped >

</style>