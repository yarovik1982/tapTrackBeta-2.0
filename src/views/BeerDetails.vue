<script setup>
import { getIdAtLink } from '@/functions/decompositionLink';
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';
import { useBeerStore } from '@/stores/beer';
import { useFeedbackStore } from '@/stores/feedback';
import Card from '@/components/Card.vue';
import CardReview from '@/components/CardReview.vue';
import { storeToRefs } from 'pinia';

const router = useRouter();
const currRouter = router.currentRoute.value.fullPath;

const beerId = ref(getIdAtLink(currRouter));
const beerStore = useBeerStore();
const feedbackStore = useFeedbackStore();
const { feedbackListBeer } = storeToRefs(feedbackStore);

const beerItem = computed(() => beerStore.getBeerItem);
const feedbackList = computed(() => feedbackListBeer.value);

onMounted(async () => {
  await beerStore._BEER_PROFILE(beerId.value);
  await feedbackStore._FEEDBACK_LIST_BEER(beerId.value);
});
</script>

<template>
  <div class="container-fluid px-5">
    <h3 class="text-center">Детализация пива: {{ beerId }}</h3>
    <Card :item="beerItem" :showStarRating="true"></Card>
    <h3 class="text-center" v-if="feedbackList" >Отзывы {{ beerItem.name }}</h3>
    <CardReview :review="review" v-for="(review, ind) in feedbackList" :key="ind"></CardReview>
  </div>
</template>

<style scoped></style>
