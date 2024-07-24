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
  <form id="addPlace" class="w-75" @submit.prevent="handleSubmit">
  <h3 class="form-title text-center py-3">Добавить точку продаж</h3>
  <btn-close-layout />
  <div class="row g-3">
    <div
      class="col py-3 d-flex flex-column align-items-center justify-content-between"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-gap: 50px;
        "
      >
        <avatar-editor
          :width="250"
          :height="300"
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
        <button class="btn btn-info btn-sm" @click.prevent="save">Сохранить на компьютере</button>
      </div>
    </div>
    <div class="col py-3">
      <div class="mb-5 position-relative">
        <input
          name="name"
          type="text"
          class="app-form-control"
          id="inpName"
          v-model="name"
          placeholder="Имя"
        />
        <label for="inpName" class="app-form-label position-absolute"
          >Наименование</label
        >
      </div>
      <div class="mb-5 position-relative">
        <label for="type" class=" label-for-select" style="width: 100%"
          >Выберите тип</label
        >
        <select
          class="app-form-control"
          name="type"
          id="type"
          v-model="type"
          style="width: 100%"
          
        >
          <!-- <option value="" selected>Выберите тип</option> -->
          <option value="SHOP">магазин</option>
          <option value="BAR" selected>бар</option>
          
        </select>
      </div>
      <div class="mb-5 position-relative">
        <span>Адрес</span>
        <vue-dadata
          v-model="query" 
          :token="token" 
          :count="5" 
          placeholder="начните ввод"
        ></vue-dadata>
      </div>
      <div class="mb-5 position-relative">
        <label for="descript" style="width: 100%"
          >Введите краткое описание</label
        >
        <textarea
          type="text"
          id="descript"
          name="description"
          v-model="description"
          style="width: 100%"
        ></textarea>
      </div>
    </div>
  </div>
  <button
    type="submit"
    class="btn btn-warning text-white d-block m-auto rounded rounded-5"
    style="width: 270px"
  >
    Отправить
  </button>
  <p>Address: {{ datada.address }}</p>
  <p>City: {{ datada.city }}</p>
  <p>Coords: ({{ datada.geoLat }}, {{ datada.geoLon }})</p>
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