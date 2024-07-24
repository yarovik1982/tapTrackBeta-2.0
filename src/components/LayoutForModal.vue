<script setup>
import FormLogin from '@/components/FormLogin.vue';
import FormRegister from '@/components/FormRegister.vue';
import FormWriteUs from '@/components/FormWriteUs.vue';
// import FormEditProfile from '@/components/FormEditProfile.vue';
import FormAddPlace from '@/components/FormAddPlace.vue';
// import FormAddBrewery from '@/components/FormAddBrewery.vue';
// import FormAddAvatar from '@/components/FormAddAvatar.vue';
// import FormCreateFeedback from '@/components/FormCreateFeedback.vue'
// import FormSuccess from '@/components/FormSuccess.vue'
// import FormAddReview from '@/components/FormAddReview.vue'
// import FormCreateBeer from '@/components/FormCreateBeer.vue';
// import FormQr from '@/components/FormQr.vue';
// import Map from '@/components/Map.vue'
import { computed, ref } from 'vue';
import { useForms } from '@/stores/forms';
// import FormSuccessVue from './FormSuccess.vue';


// const emits = defineEmits(['close-form'])
// const closeForm = () => {
//   emits('close-form')
// }
const formsStore = useForms()
const typeForm = computed(() => formsStore.formType)
// const props = defineProps({
//   type:{
//     type:String,
//     required:true
//   }
// })

const currentForm = computed(() => {
  switch(typeForm.value){
    case 'login':
      return FormLogin;
    case 'register':
      return FormRegister;
    case 'writeUs':
      return FormWriteUs;
    // case 'editProfile':
    //   return FormEditProfile;
    case 'addPlace':
      return FormAddPlace;
    // case 'addBrewery':
    //   return FormAddBrewery;
    // case 'addAvatar':
    //   return FormAddAvatar;
    // case 'createFeedback':
    //   return FormCreateFeedback;
    // case 'success':
    //   return FormSuccess;
    // case 'createBeer':
    //   return FormCreateBeer;
    // case 'map':
    //   return Map;
    // case 'qr':
    //   return FormQr;
    // case 'addReview':
    //   return FormAddReview;
  }
})
const closeForm = () => {
  formsStore.closeLayout()
}
</script>
<template>
    
    <div class="layout position-fixed top-0 start-0 w-100 h-100 "  @click.self="closeForm" v-if="typeForm">
      <component :is="currentForm" class="custom-form" ></component>
    </div>
</template>
<style scoped >

</style>