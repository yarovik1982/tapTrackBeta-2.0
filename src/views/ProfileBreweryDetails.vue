<script setup>
import CardBrewery from '@/components/CardBrewery.vue'
import { useBreweries } from '@/stores/breweries';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const breweryId = route.params.id

const breweriesStore = useBreweries()
breweriesStore._BREWERY_PROFILE_BREWERYID(breweryId)
</script>
<template>
    <div class="contaner-fluid px-1">
      <CardBrewery
         :item="breweriesStore.getBreweryItem"
      ></CardBrewery>
    </div>
</template>
<style scoped >

</style>