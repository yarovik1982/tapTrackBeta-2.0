<script setup>
import {onMounted, onUnmounted, ref } from 'vue';
// import { AvatarEditor } from "avatar-editor";
// import "avatar-editor/dist/style.css";

// const scaleVal = ref(1);
// const scaleStep = 0.02;
// const scaleMin = 1;
// const scaleMax = 3;

// const avatarEditorRef = ref(null);

// const onImageReady = (scale) => {
//   scaleVal.value = scale;
// };

// const handleWheelEvent = (e) => {
//   if (e.deltaY > 0 && scaleVal.value - scaleStep >= scaleMin) {
//     // Down
//     scaleVal.value -= scaleStep;
//   } else {
//     // Up
//     if (scaleVal.value + scaleStep <= scaleMax) {
//       scaleVal.value += scaleStep;
//     }
//   }
// };

// const save = () => {
//   if (avatarEditorRef.value) {
//     const canvasData = avatarEditorRef.value.getImageScaled();
//     const img = canvasData.toDataURL("image/png");
//     console.log(img);
//   }
// };
// const save = () => {
//   if (avatarEditorRef.value) {
//     const canvasData = avatarEditorRef.value.getImageScaled();
//     const blob = canvasData.toBlob((blob) => {
//       // Создаем объект URL для загрузки изображения
//       const url = URL.createObjectURL(blob);

//       // Создаем ссылку для загрузки изображения
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = 'image.png'; // Имя файла для загрузки

//       // Добавляем ссылку на страницу и симулируем клик по ней
//       document.body.appendChild(link);
//       link.click();

//       // Удаляем ссылку после загрузки
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//     }, 'image/png', 0.8); // Формат и качество изображения
//   }
// };


// onMounted(() => {
//   document.addEventListener("wheel", handleWheelEvent);
// });

// onUnmounted(() => {
//   document.removeEventListener("wheel", handleWheelEvent);
// });

const emits = defineEmits(['close-form'])
const closeForm = () => {
  emits('close-form')
}
const placeName = ref('')
</script>
<template>
    <form id="addPlace" class="w-75">
    <h3 class="form-title text-center py-3">Добавить точку продаж</h3>
    <i
      class="bi bi-x fs-1 text-white position-absolute fw-bold"
      style="top: -25px;right: -40px; cursor: pointer; font-weight: bold;"
      @click="closeForm"
    ></i>
    <div class="row g-3 ">
      <div class="col py-3 d-flex flex-column align-items-center justify-content-between">
         <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-gap: 50px;
    "
  >
    <!-- <avatar-editor
      :width="250"
      :height="250"
      ref="avatarEditorRef"
      @image-ready="onImageReady"
      v-model:scale="scaleVal"
    />
    <input
      type="range"
      :min="scaleMin"
      :max="scaleMax"
      :step="scaleStep"
      v-model="scaleVal"
    />
    <button @click.prevent="save">Save</button> -->
  </div>
      </div>
      <div class="col py-3">
         <div class="mb-5 position-relative">
       <input type="text" class="app-form-control" 
         id="inpName" 
         v-model="placeName"
        placeholder="Имя"
      />
       <label for="inpName" class="app-form-label position-absolute">Имя</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="email" class="app-form-control"   
         id="inpEmail" 
         v-model="placeName"
          placeholder="Почта"
         
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Почта</label>
       <!-- <i class="bi bi-person-fill position-absolute"></i> -->
       <i class="bi bi-envelope-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpPhone" 
         v-model="placeName"
          placeholder="Телефон"
         
      />
       <label for="inpPhoneNumber"  class="app-form-label position-absolute">Телефон</label>
       <!-- <i class="bi bi-person-fill position-absolute"></i> -->
       <i class="bi bi-telephone-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpBirthday" 
         v-model="placeName"
          placeholder="Дата рождения дд-мм-гггг"
        
      />
       <label for="inpBirthday" class="app-form-label position-absolute">Дата рождения</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class="mb-5 position-relative">
      <input type="text" class="app-form-control"   
         id="inpCountry" 
         v-model="placeName"
          placeholder="Страна"
        
      />
       <label for="inpCountry" class="app-form-label position-absolute">Страна</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
    <div class=" position-relative">
      <input type="text" class="app-form-control"  
         id="inpCity" 
         v-model="placeName"
          placeholder="Город"
         
      />
       <label for="inpCity" class="app-form-label position-absolute">Город</label>
       <i class="bi bi-person-fill position-absolute"></i>
    </div>
      </div>
    </div>
    <button type="submit" class="btn btn-warning text-white d-block m-auto rounded rounded-5" style="width: 270px;">Отправить</button>
  </form>
</template>
<style scoped >
.inpFile {
   width: 0;
   height: 0;
   opacity: 0;
}
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
.bi-person-fill,
.bi-envelope-fill,
.bi-telephone-fill{
   right: 10px;
   color:rgba(0,0,0,.6)
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
  transform: translate(0, -45px) scale(1);
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
</style>