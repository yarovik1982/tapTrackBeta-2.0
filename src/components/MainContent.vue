<script setup>
import { ref } from "vue"

const props = defineProps({
   title:String
})

</script>
<template>
    <main id="mainContent">
      <h3 class="text-center text-capitalize">{{ title }}</h3>
      <div class="container-fluid">
         <div class="row">
            <div class="col-8 py-5 border border-1 border-warning"></div>
            <div class="col-4 py-5 border border-1 border-warning"></div>
         </div>
      </div>
    </main>
</template>
<style scoped >

</style>