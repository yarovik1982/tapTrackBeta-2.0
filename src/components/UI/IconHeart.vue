<script setup>
import { ref } from "vue";
import axios from "axios";
import { BASE_URL } from "@/constants/url";

const props = defineProps({
  state: { type: Boolean, required: false }
 
});







</script>
<template>
  
    <i class="bi bi-heart text-warning" :state="props.state"></i>
    
  
</template>
<style scoped>
i {
  cursor: pointer;
  color: #ffc107;
}
</style>
