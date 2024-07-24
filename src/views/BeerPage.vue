<script setup>
import Card from "@/components/Card.vue";
import AdvContent from "@/components/AdvContent.vue";
import { useBeerStore } from "@/stores/beerStore";
import { computed, onMounted, ref } from "vue";
import { scroll, unScroll } from "@/functions/scroll";
import { useBreweryStore } from "@/stores/breweryStore";
import { usePlaceStore } from "@/stores/placeStore";

const beerStore = useBeerStore();
const breweryStore = useBreweryStore()
const placeStore = usePlaceStore()
const isLoading = ref(true);

onMounted(() => {
    if (!beerStore.isLoaded) { 
        beerStore._BEER_LIST().then(() => {
            isLoading.value = false;
        });
    } else {
        isLoading.value = false;
    }
    beerStore._BEER_ADBLOCK()
    breweryStore._BREWERY_ADBLOCK()
    placeStore._PLACE_ADBLOCK()
});

const showMore = () => {
    beerStore.loadMoreBeer()
}

const beerList = computed(() => beerStore.getBeerList);
const beerAdBlock = computed(() => beerStore.getBeerAdBlock)
const breweryAdBlock = computed(() => breweryStore.getBreweryAdBlock)
const placeAdBlock = computed(() => placeStore.getPlaceAdBlock)
</script>
<template>
    <div class="loader" v-if="isLoading">
        <div
            class="spinner-border text-primary position-absolute top-50 start-50"
            role="status"
        >
            <span class="visually-hidden">Загрузка...</span>
        </div>
    </div>
    <div>
        <h3 class="text-center text-capitalize">Beer Page</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col-8 px-1">
                    <Card
                        :typeCard="'beer'"
                        :item="item"
                        v-for="item in beerList"
                        :key="item.id"
                        :name="item.name"
                        :description="item.description"
                        :averageRating="item.averageRating"
                        :styleBeer="item.style"
                        :image="item.image"
                        :abv="item.abv"
                        :ibu="item.ibu"
                        :totalReviews="item.totalReviews"
                        :breweryName="item.breweryName"
                    ></Card>
                    <div class="mt-5 text-center d-block">
                      <button class="btn-big"
                        v-if="beerStore.hasMoreBeer"
                        @click="showMore"
                      >Показать еще</button>
                    </div>
                </div>
                <div class="col-4 px-1">
                    <AdvContent
                        :titleText="'Рекомендованные места'"
                        :class="'border-warning border border-2 rounded-3 rounded-bottom-0 mb-1 overflow-hidden bg-white bg-opacity-50'"
                        :data="placeAdBlock"
                    />
                    <AdvContent
                        :titleText="'Рекомендованные пивоварни'"
                        :class="'border-warning border border-2 mb-1 overflow-hidden bg-white bg-opacity-50'"
                        :data="breweryAdBlock"
                    />
                    <AdvContent
                        :titleText="'Может быть интересно'"
                        :class="'border-warning border border-2 rounded-3 rounded-top-0 overflow-hidden bg-white bg-opacity-50'"
                        :data="beerAdBlock"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.loader {
    position: relative;
    top: -140px;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    z-index: 100;
}
</style>
