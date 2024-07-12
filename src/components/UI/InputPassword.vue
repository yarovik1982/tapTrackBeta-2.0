<script setup>
import { ref } from "vue";

const isVisible = ref(false)
const handleClick = () => {
   isVisible.value = !isVisible.value
}
const props = defineProps({
   modelValue:{
      type:String,
      required:false
   },
   id:{type:String, required:true},
   placeholder:{type:String, required:true},
   label:{type:String, required:true}
})

const emits = defineEmits(['update:modelValue'])
const updateInput = (evt) => {
   emits('update:modelValue', evt.target.value)
}
</script>
<template>
    <div class="mb-5 position-relative">
      <input 
         class="app-form-control"   
         :type="!isVisible ? 'password' : 'text'" 
         :id="id" 
         :value="modelValue"
         :placeholder="placeholder"
         @input="updateInput"
      />
       <label :for="id" class="app-form-label position-absolute">{{props.label}}</label>
       
       <i 
         class="bi position-absolute" 
         :class="isVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'"
         @click="handleClick"
      ></i>
    </div>
</template>
<style scoped >
.app-form-label {
   top: 50%;
   left: 9px;
   transform: translateY(-50%);
   transition: top .3s ease;
}
.app-form-control.inValid {
   border: 1px solid rgb(255, 40, 40);

}
.app-form-control {
   width: 100%;
   border:1px solid #ffc107;
   height: 40px;
   padding: 0 8px;
   border-radius: 8px;
   appearance: none;
  -webkit-appearance: none;
  cursor: text;
}
.app-form-control:focus,
.app-form-control:active{
   outline: none;
}

.bi-eye-slash-fill,
.bi-eye-fill{
   right: 10px;
   color:rgba(0,0,0,.6);
   top: 50%;
   transform: translate(0, -50%);
   cursor: pointer;
}
.app-form-label, 
.app-form-control {
  transition: all 0.2s;
  touch-action: manipulation;
  letter-spacing: 0.05em;
}


input:focus {
  outline: 0;
  /* border-bottom: 1px solid #666; */
}

/* label {
   text-transform: uppercase; 
} */

.app-form-control:placeholder-shown ~ .app-form-label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, -15px);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

.app-form-control:focus::-webkit-input-placeholder {
  opacity: 0;
}

.app-form-control:not(:placeholder-shown) ~ .app-form-label
 {
  transform: translate(0, -45px) scale(1);
  cursor: pointer;
}
.app-form-control:focus ~ .app-form-label{
  transform: translate(0, -45px);
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
</style>