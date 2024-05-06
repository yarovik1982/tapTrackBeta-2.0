<script setup>
import { ref } from "vue"

const isBlur = ref(false)
const handleBlur = () => {
   isBlur.value = !isBlur.value
}
defineEmits(['update:modelValue'])
// const update = (event) => {
//    emits('emit-input', event.target.modelValue)
// }
const props = defineProps({
   id:{type:String,required:true},
   title:{type:String,required:true},
   modelValue:{type:String,default:''}
})
</script>
<template>
    <div class="mb-3 position-relative">
       <input type="text" class="app-form-control" 
         :id="id" 
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value.trim())" 
      />
       <label :for="id" class="app-form-label position-absolute">{{title}}</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
</template>
<style scoped >
.app-form-label {
   top: 50%;
   left: 9px;
   transform: translateY(-50%);
   transition: top .3s ease;
}
.app-form-control {
   width: 100%;
   border:1px solid #ffc107;
   height: 40px;
   padding: 0 8px;
   border-radius: 8px;
}
.app-form-control:focus,
.app-form-control:active{
   outline: none;
}
.app-form-control:focus ~ .app-form-label{
   top: -20px;
}

.bi-person-fill{
   right: 10px;
   color:rgba(0,0,0,.6)
}
</style>