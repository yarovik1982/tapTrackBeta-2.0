<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue';
import MyQrCode from '@/components/MyQrCode.vue'
import { ref } from 'vue';
import { useQrCodeStore } from '@/stores/qrCode';
import { formatName } from '@/functions/formatName';

const qrValue = ref('')
const qrCode = useQrCodeStore()
qrValue.value = qrCode.getContent
const size = ref(100);
const qrCodeCanvas = ref(null);



const downloadQrCode = () => {
  const canvas = qrCodeCanvas.value.$el;
  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = `${formatName(qrValue.value)}.png`;
  link.href = dataUrl;
  link.click();
};
</script>

<template>
  <div class="custom-form" id="qr">
    <h3 class="form-title text-center py-3 mb-3">QR Генератор</h3>
    <h4 class="text-center">Наименование: {{ qrValue }}</h4>
    <btn-close-layout/>
    
    <div class="container-qr mt-3 mb-3">
      <MyQrCode
        :size="size"
        ref="qrCodeCanvas"
        :value="'http://taptrack/степь_и_ветер/Mead_Cherry'"
      />
    </div>
    <div class="row-input mb-3 d-flex w-100 justify-content-center">
      <input 
        type="range" 
        name="range" 
        id="range" 
        min="100" 
        max="400" 
        step="50" 
        v-model="size"
        class=""
        style="width: 300px;"
      >
    </div>
    <button
      type="button"
      class="btn btn-info rounded rounded-5 text-white d-block m-auto"
      style="width: 270px"
      @click="downloadQrCode"
    >
      Сохранить
    </button>
  </div>
</template>

<style scoped >

.container-qr{
    display: grid;
    place-content: center;
    height: 400px;
}
</style>