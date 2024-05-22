<script setup>
import {onMounted, onUnmounted, ref } from 'vue';
import { AvatarEditor } from "avatar-editor";
import "avatar-editor/dist/style.css";
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue';

const scaleVal = ref(1);
const scaleStep = 0.02;
const scaleMin = 1;
const scaleMax = 3;

const avatarEditorRef = ref(null);

const onImageReady = (scale) => {
  scaleVal.value = scale;
};

const handleWheelEvent = (e) => {
  if (e.deltaY > 0 && scaleVal.value - scaleStep >= scaleMin) {
    // Down
    scaleVal.value -= scaleStep;
  } else {
    // Up
    if (scaleVal.value + scaleStep <= scaleMax) {
      scaleVal.value += scaleStep;
    }
  }
};

const image = ref(null)

const save = () => {
  if (avatarEditorRef.value) {
    const canvasData = avatarEditorRef.value.getImageScaled();
    const blob = canvasData.toBlob((blob) => {
      // Создаем объект URL для загрузки изображения
      const url = URL.createObjectURL(blob);

      // Создаем ссылку для загрузки изображения
      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.png'; // Имя файла для загрузки

      // Добавляем ссылку на страницу и симулируем клик по ней
      document.body.appendChild(link);
      link.click();

      // Удаляем ссылку после загрузки
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 'image/png', 0.8); // Формат и качество изображения
  }
};


onMounted(() => {
  document.addEventListener("wheel", handleWheelEvent);
});

onUnmounted(() => {
  document.removeEventListener("wheel", handleWheelEvent);
});


</script>
<template>
    <form id="addAvatar" class="w-50">
  <h3 class="form-title text-center py-3">Добавить аватар</h3>
  <btn-close-layout/>
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
  <avatar-editor
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
  <button @click.prevent="save">Save</button>
</div>
    </div>
    
  </div>
  <button type="submit" class="btn btn-warning text-white d-block m-auto rounded rounded-5" style="width: 270px;">Отправить</button>
</form>
</template>
<style scoped >
canvas{
   border: 4px solid rgb(127,127,127);
}
</style>