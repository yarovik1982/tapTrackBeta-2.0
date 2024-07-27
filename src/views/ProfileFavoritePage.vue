<script setup>
import Card from '@/components/Card.vue';
import { useUserStore } from '@/stores/userStore';
import { computed } from 'vue';

const userStore = useUserStore()
userStore._USER_FAVORITE_PLACE()
const placeList = computed(() => userStore.getUserFavoritePlaceList)


</script>
<template>
    <h4 class="text-center text-capitalize" v-if="placeList.length === 0">Список пуст</h4>
    <div class="container-fluid">
        <div class="col py-3">
            <Card
                :typeCard="'placeFavorite'"
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
        </div>
    </div>
</template>
<style scoped >

</style>