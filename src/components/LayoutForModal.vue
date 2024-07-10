<script setup>
import FormLogin from '@/components/FormLogin.vue';
import FormRegister from '@/components/FormRegister.vue';
import FormWriteUs from '@/components/FormWriteUs.vue';
import FormEditProfile from '@/components/FormEditProfile.vue';
import FormAddPlace from '@/components/FormAddPlace.vue';
import FormAddBrewery from '@/components/FormAddBrewery.vue';
import { computed, ref } from 'vue';

const emits = defineEmits(['close-form'])
const closeForm = () => {
  emits('close-form')
}
const props = defineProps({
  type:{
    type:String,
    required:true
  }
})

const currentForm = computed(() => {
  switch(props.type){
    case 'login':
      return FormLogin;
    case 'register':
      return FormRegister;
    case 'writeUs':
      return FormWriteUs;
    case 'editProfile':
      return FormEditProfile;
    case 'addPlace':
      return FormAddPlace;
    case 'addBrewery':
      return FormAddBrewery;
  }
})

</script>
<template>
    
    <div class="layout position-fixed top-0 start-0 w-100 h-100 "  @click.self="closeForm">
      <component :is="currentForm" class="custom-form" @close-form="closeForm"></component>
    </div>
</template>
<style scoped >

</style>
<!-- <div class="layout position-fixed top-0 start-0 w-100 h-100 " :isActive="isActive" @click.self="toggleLayout">
      <slot></slot>>
    </div> -->
    // {
      // const props = defineProps({
      //    isActive: false,
      // })
      // const emits = defineEmits(['toggle-layout'])
      // const toggleLayout = () => {
      //    emits('toggle-layout')
      // }
      // }