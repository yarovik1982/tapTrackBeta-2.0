<script setup>
import { computed, ref, watch } from 'vue';
import InputRating from "@/components/UI/InputRating.vue"

const props = defineProps({
  max: { type: Number, required: true },
  current: { type: Number, required: false },
  size: { type: Number, default: 32 },
  disabledColor: { type: String, default: '#e7e7e7' },
  activeColor: { type: String, default: '#ffc107' },
  sizeValue: { type: Number, default: 20 },
  editable: { type: Boolean, default: false },
});

const valueRating = ref(0)
const getRating = computed(() => {
  return (valueRating.value / props.max) * 100;
});
const emit = defineEmits(['update:rating']);
const updateRating = (newRating) => {
  valueRating.value = newRating;
  emit('update:rating', newRating);
};
</script>

<template>
  <div class="star-rating">
    <div class="star-item" :style="{ fontSize: props.size + 'px' }">
      <span v-for="n in props.max" :key="n" :style="{ color: props.disabledColor }">&starf;</span>
      <div
        class="star-item-current"
        :style="{
          width: getRating + '%',
          color: props.activeColor,
        }"
      >
        <span v-for="n in props.max" :key="n">&starf;</span>
      </div>
    </div>
    <InputRating :max="props.max" v-model="valueRating" @update:modelValue="updateRating" />
  </div>
</template>




<style scoped>
.star-rating{
  display: flex;
  align-items:center;
}
.star-item{
  display: inline-block;
  /* color: #b4b4b4;
  font-size: 2rem; */
  position: relative;
  cursor: pointer;
  
}
.star-item .star-item-current{
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.rating-value{
  display: block;
  margin: 10px 0px 0px 10px;
}
</style>