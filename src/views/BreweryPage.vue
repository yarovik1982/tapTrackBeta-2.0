<script setup>
import Card from "@/components/Card.vue";
import AdvContent from "@/components/AdvContent.vue";
import { computed, onMounted, ref } from "vue";
import { useBreweryStore } from "@/stores/breweryStore";
import { useBeerStore } from "@/stores/beerStore";
import { usePlaceStore } from "@/stores/placeStore";

const breweryStore = useBreweryStore()
const beerStore = useBeerStore()
const placeStore = usePlaceStore()
const isLoading = ref(true)
onMounted(() => {
  if (!breweryStore.isLoaded) { 
        breweryStore._BREWERY_LIST().then(() => {
            isLoading.value = false;
        });
    } else {
        isLoading.value = false;
    }
    beerStore._BEER_ADBLOCK()
    breweryStore._BREWERY_ADBLOCK()
    placeStore._PLACE_ADBLOCK()
})

const showMore = () => {
    breweryStore.loadMoreBrewery()
}

const breweryList = computed(() => breweryStore.getBreweryList)
const breweryAdBlock = computed(() => breweryStore.getBreweryAdBlock)
const beerAdBlock = computed(() => beerStore.getBeerAdBlock)
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
    <div class="px-2">
        <h3 class="text-center text-capitalize">Bewery Page</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col-8 px-1">
                    <Card
                        :typeCard="'brewery'"
                        :item="item"
                        v-for="item in breweryList"
                        :key="item.id"
                        :name="item.name"
                        :description="item.description"
                        :sity="item.sity"
                        :image="item.image"
                        :type="item.type"
                    ></Card>
                    <div class="mt-5 text-center d-block">
                      <button class="btn-big"
                        v-if="breweryStore.hasMoreBrewery"
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
