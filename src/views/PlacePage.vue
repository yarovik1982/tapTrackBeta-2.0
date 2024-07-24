<script setup>
import Card from "@/components/Card.vue";
import AdvContent from "@/components/AdvContent.vue";
import { computed, onMounted, ref } from "vue";
import { useBeerStore } from "@/stores/beerStore";
import { useBreweryStore } from "@/stores/breweryStore";
import { usePlaceStore } from "@/stores/placeStore";

const isLoading = ref(true);
const placeStore = usePlaceStore();
const breweryStore = useBreweryStore();
const beerStore = useBeerStore();

onMounted(() => {
    if (!beerStore.isLoaded) {
        placeStore._PLACE_LIST().then(() => {
            isLoading.value = false;
        });
    } else {
        isLoading.value = false;
    }
    beerStore._BEER_ADBLOCK();
    breweryStore._BREWERY_ADBLOCK();
    placeStore._PLACE_ADBLOCK();
});

const showMore = () => {
    placeStore.loadMorePlace()
}

const placeList = computed(() => placeStore.getPlaceList)
const beerAdBlock = computed(() => beerStore.getBeerAdBlock);
const breweryAdBlock = computed(() => breweryStore.getBreweryAdBlock);
const placeAdBlock = computed(() => placeStore.getPlaceAdBlock);
</script>
<template>
    <div>
      <div class="loader" v-if="isLoading">
        <div
            class="spinner-border text-primary position-absolute top-50 start-50"
            role="status"
        >
            <span class="visually-hidden">Загрузка...</span>
        </div>
    </div>
        <h3 class="text-center text-capitalize">Place Page</h3>
        <div class="container-fluid">
            <div class="row">
                <div class="col-8 px-1">
                    <Card
                        :typeCard="'place'"
                        :item="item"
                        v-for="item in placeList"
                        :key="item.id"
                        :name="item.name"
                        :address="item.address"
                        :description="item.description"
                        :type="item.type"
                        :image="item.image"
                        :city="item.city"
                    ></Card>
                    <div class="mt-5 text-center d-block">
                      <button class="btn-big"
                        v-if="placeStore.hasMorePlace"
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
