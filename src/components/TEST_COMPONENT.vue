<script setup>
const props = ({
   action:() => {}
})
</script>
<template>
    <i class="bi bi-heart-fill" @click="action" v-if="item.setAvailabilityOfSpaceForTheUser || typeCard === 'placeFavorite'"></i>
</template>
<style scoped >

</style>