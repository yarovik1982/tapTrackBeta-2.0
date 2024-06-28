<script setup>
import CardReview from '@/components/CardReview.vue';
import { useRoute } from 'vue-router';
import { useFeedbackStore } from '@/stores/feedback';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const feedbackSrore = useFeedbackStore()
const { currentId, feedbackListBeer } = storeToRefs(feedbackSrore)
// onMounted(() => {
   feedbackSrore._FEEDBACK_LIST_BEER()
// })
</script>
<template>
    <h3 class="text-center">Отзывы по пиву {{ feedbackSrore.currentId }}</h3>
    <div class="container">
      <CardReview
         :review="review"
         v-for="(review,ind) in feedbackSrore.feedbackListBeer"
         :key="ind"
      ></CardReview>
    </div>
</template>
<style scoped >

</style>