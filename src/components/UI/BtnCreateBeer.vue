<script setup>
import { useForms } from '@/stores/forms.js'
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const formsStore = useForms()
const router = useRouter()
const url = '/profile-brewery/breweryId-'
// const route = useRoute()
// const breweryId = route.params.id
const currentRoute = computed(() => router.currentRoute.value.path)

const handleClick = (type) => {
   formsStore.openLayout(type)
}
</script>
<template>
    <button class="btn btn-info btn-sm rounded-5"
      v-if="currentRoute.includes(url)"
      @click="handleClick('createBeer')"
    >Добавить пиво</button>
</template>
<style scoped >

</style>