<script setup>
import CardBrewery from '@/components/CardBrewery.vue';
import { useRoute } from 'vue-router'
import { useBreweries } from '@/stores/breweries';


const route = useRoute()
const breweryId = route.params.id

const breweriesStore = useBreweries()
breweriesStore._BREWERY_PROFILE_BREWERYID( breweryId)

</script>
<template>
    
    <div class="container-fluid ">
        <CardBrewery 
            :item="breweriesStore.getBreweryItem"
        >
        </CardBrewery>
    </div>
</template>
<style scoped >

</style>