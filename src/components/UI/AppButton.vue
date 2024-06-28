<script setup>

const emits = defineEmits(['on-click'])

const props = defineProps({
   item:{type:Object,required:false},
   btnClass:{type:String,default:'btn'},
})

const onClick = () => {
   emits('on-click')
}
</script>
<template>
    <button :class="btnClass" @click="onClick">
      <slot></slot>
    </button>
</template>
<style scoped >

</style>