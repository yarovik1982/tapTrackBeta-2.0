<script setup>
import { ref } from "vue";
import { VueAvatar } from "vue-avatar-editor-improved";

const props = defineProps({
   width:Number,
   height:Number,
   scale:Number,
   divClass:String,
   borderRadius:Number,
   image:Object
})

const rotation = ref(0);
const scale = ref(1);
const borderRadius = ref(props.borderRadius);
const vueavatar = ref(null);
const image = ref(null);

const saveClicked = () => {
    const img = vueavatar.value.getImageScaled();
    image.value.src = img.toDataURL();
};

const onImageReady = () => {
    scale.value = 1;
    rotation.value = 0;
};
</script>
<template>
    <div class="d-flex flex-column align-items-center">
      
        <vue-avatar
            :width="width"
            :height="height"
            :rotation="rotation"
            :borderRadius="borderRadius"
            :scale="Number(scale)"
            ref="vueavatar"
            @vue-avatar-editor:image-ready="onImageReady"
        >
        </vue-avatar>
        <div>
           <label>
               Zoom : {{ scale }}x
               <br />
               <input type="range" min="1" max="3" step="0.02" v-model="scale" />
           </label>
           
           <label class="d-none">
               Rotation : {{ rotation }}°
               
               <input type="hidden" min="0" max="360" step="1" v-model="rotation" />
           </label>
           
           <label class="d-none">
               Radius : {{ borderRadius }}px
              
               <input
                   type="range"
                   min="0"
                   max="200"
                   step="1"
                   v-model="borderRadius"
               />
           </label>
        </div>
        
        <button class="btn btn-info btn-sm rounded-5" @click.prevent="saveClicked">Get image</button>
        <br />
        <div :class="divClass">
            preview
           <img  ref="image" />
        </div>
    </div>
</template>
<style scoped>
.preview-radius{
   width: 250px;
   height: 250px;
   border-radius: 50%;
   border: 1px solid yellow;
   overflow: hidden;
   display: grid;
   place-content: center;
   background-color: #ccc;
   font-weight: bold;
   font-style: italic;
   position: relative;
}
.preview{
   width: 250px;
   height: 350px;
   border-radius: 16px;
   border: 1px solid yellow;
   overflow: hidden;
   display: grid;
   place-content: center;
   background-color: #ccc;
   font-weight: bold;
   font-style: italic;
   position: relative;
}
img{
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
}
</style>
