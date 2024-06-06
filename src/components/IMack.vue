<template>
   <imask-input
     v-model:typed="numberModel"
     radix="."
   />
 </template>
 
 <script>
   import { IMaskComponent } from 'vue-imask';
 
   export default {
     data () {
       return {
         numberModel: '',
         
       }
     },
     components: {
       'imask-input': IMaskComponent
     }
   }
 </script>