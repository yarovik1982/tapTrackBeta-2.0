<script setup>
import { computed } from 'vue';
const props = defineProps({
   max:{type:Number,required:true},
   current:{type:Number, required:false}
})

const getRating = computed(() => {
  return (props.current / props.max) * 100
})
</script>
<template>
  <div class="star-rating">
    <div class="star-item">
      <span v-for="n in props.max" :key="n">&star;</span>
      <div class="star-item-current" :style="{width: getRating + '%'}">
        <span v-for="n in props.max" :key="n">&starf;</span>
      </div>
    </div>
    <span class="rating-value">{{ props.current }}</span>
  </div>
</template>
<style scoped>
.star-rating{
  display: flex;
  align-items:center;
}
.star-item{
  display: inline-block;
  color: #ffc107;
  font-size: 2rem;
  position: relative;
}
.star-item .star-item-current{
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
}
.rating-value{
  display: block;
  margin: 10px 0px 0px 10px;
}
</style>
