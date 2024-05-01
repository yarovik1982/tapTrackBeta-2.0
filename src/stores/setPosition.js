import { defineStore } from "pinia";
import { ref, onMounted } from 'vue'

export const useSetPosition = defineStore('setPos', () => {
   const pos = ref(0)
  onMounted(() => {
   const setPosition = () => {
      const header = document.getElementById('topPanel')
      const heightHeader = header.getBoundingClientRect().height
      pos.value = heightHeader + px
   }
  })

   return{pos}
})