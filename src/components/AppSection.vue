<script setup>
const props = defineProps({
   id:{type:String, required:true},
   sectionTitle:{type:String, default:''}
})
</script>
<template>
  <section :id="id" class="mb-5 mt-5 py-5">
    <slot name="slotTitle">
      <h5 class="text-center mx-auto mb-5" v-if="sectionTitle">
        <span class="section-title bg-blur text-uppercase position-relative px-2 d-inline-block rounded rounded-5 fw-semibold">
        {{ sectionTitle }}
      </span>
      </h5>
   </slot>
    <slot name="slotBody">

    </slot>
    
      
    
  </section>
</template>
<style scoped></style>
