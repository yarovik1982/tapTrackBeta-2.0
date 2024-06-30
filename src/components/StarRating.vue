<script setup>
import { computed , ref} from 'vue';
const props = defineProps({
   max:{type:Number,required:true},
   current:{type:Number, required:false},
   size:{type:Number,default:32},
   disabledColor:{type:String, default: '#e7e7e7'},
   activeColor:{type:String, default:'#ffc107'},
   sizeValue:{type:Number, default:20},
   editable:{type:Boolean, default:false}
})

const getRating = computed(() => {
  return (props.current / props.max) * 100
})

const hoverColor = ref(props.disabledColor);

const handleMouseover = () => {
  if (props.editable) {
    hoverColor.value = props.activeColor;
  }
};

const handleMouseout = () => {
  hoverColor.value = props.disabledColor;
};
</script>
<template>
  <div class="star-rating" :editable="props.editable">
    <div class="star-item" :style="{fontSize: props.size + 'px'}"
      @mouseover="handleMouseover"
      @mouseout="handleMouseout"
    >
      <span v-for="n in props.max" :key="n" :style="{color:  props.disabledColor}">&starf;</span>
      <div class="star-item-current" 
        :style="{width: getRating + '%',color:hoverColor}" 
        >
        <span v-for="n in props.max" :key="n" :style="{color: props.activeColor}">&starf;</span>
      </div>
    </div>
    <span class="rating-value" :style="{fontSize: sizeValue + 'px'}">{{ props.current }}</span>
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
