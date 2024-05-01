<script setup>
import Card from "@/components/Card.vue";
const props = defineProps({
  title: String,
});
</script>
<template>
  <main id="mainContent">
    <h3 class="text-center text-capitalize">{{ title }}</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 px-1">
         <Card></Card>
         <Card></Card>
         <Card></Card>
         <Card></Card>
        </div>
        <div class="col-4 px-1">
          <div class="border border-2 border-warning py-5"></div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
