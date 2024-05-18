<script setup>
import { nextTick } from "vue";
import { onMounted, ref } from "vue"

const emits = defineEmits(['emit-blur:modelValue','emit-input:modelValue'])
const props = defineProps({
   id:{type:String,required:true},
   title:{type:String,required:true},
   modelValue:{type:String,default:''},
   labelClass:{type:[String, Array], default:''},
   inputType:{type:String, default:'text'},
   isBlur:{type:Boolean, default:false}
})

</script>
<template>
    <div class="mb-4 position-relative">
       <input :type="inputType" class="app-form-control" 
         :id="id" 
         :value="modelValue"
         @input="emits('emit-input:modelValue', $event.target.value)" 
         @blur="emits('emit-blur:modelValue', $event.target.value)"
      />
       <label :for="id" :class="labelClass">{{title}}</label>
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
   top: -16px;
}

.app-form-label.isTop{
  top: -16px;
}
.bi-person-fill{
   right: 10px;
   color:rgba(0,0,0,.6)
}
</style>