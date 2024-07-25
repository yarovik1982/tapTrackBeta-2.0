<template>
  <form id="addBrewery" class="w-75" @submit.prevent="handleSubmit">
  <h3 class="form-title text-center py-3">Добавить пивоварню</h3>
  <btn-close-layout></btn-close-layout>
  <div class="row g-3 align-items-center ">
    <div class="col py-3 ">
      <div class="d-flex flex-column align-items-center">
                        <vue-avatar
                            :width="250"
                            :height="250"
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
                                <input
                                    type="range"
                                    min="1"
                                    max="3"
                                    step="0.02"
                                    v-model="scale"
                                />
                            </label>

                            <label class="d-none">
                                Rotation : {{ rotation }}°

                                <input
                                    type="hidden"
                                    min="0"
                                    max="360"
                                    step="1"
                                    v-model="rotation"
                                />
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

                        <button
                            class="btn btn-info btn-sm rounded-5"
                            @click.prevent="saveClicked"
                        >
                            Предпросмотр
                        </button>
                        <br />
                        <div class="preview">
                            preview
                            <img ref="image" />
                        </div>
                    </div>
    </div>
    <div class="col py-3">
       <div class="mb-5 position-relative">
     <input type="text" class="app-form-control" 
       id="inpName" 
       v-model="name"
      placeholder="Имя"
    />
     <label for="inpName" class="app-form-label position-absolute">Наименование</label>
     <!-- <i class="bi bi-person-fill position-absolute"></i> -->
  </div>
  <div class="mb-5 position-relative">
    <select name="type" id="type" v-model="type" style="width: 100%;" placeholder="Выбери">
      <option value="" disabled selected></option>
      <option value="BREWERY">пивоварня</option>
      <option value="MEADERY">медоварня</option>
      <option value="CIDRE">сидродельня</option>
    </select>
    <label for="type" class="label-for-select" style="width: 100%;">Выберите тип пивоварни</label>
  </div> 
  <div class="mb-5 position-relative">
    <input type="text" class="app-form-control"   
       id="inpPhone" 
       v-model="city"
        placeholder="Город"
       
    />
     <label for="inpPhoneNumber"  class="app-form-label position-absolute">Город</label>
     <!-- <i class="bi bi-person-fill position-absolute"></i> -->
     <!-- <i class="bi bi-telephone-fill position-absolute"></i> -->
  </div>
  <div class="mb-5 position-relative">
    <label for="descript" style="width: 100%;">Введите краткое описание</label>
            <textarea
              type="text"
              id="descript"
              name="descript"
              v-model="description"
              style="width: 100%;"
            ></textarea>
  </div>
 
    </div>
  </div>
  <button type="submit" class="btn btn-warning text-white d-block m-auto rounded rounded-5" style="width: 270px;">Отправить</button>
</form>
</template>

<script setup>
import {onMounted, onUnmounted, ref } from 'vue';
import BtnCloseLayout from './UI/BtnCloseLayout.vue';
import { VueAvatar } from "vue-avatar-editor-improved";

const rotation = ref(0);
const scale = ref(1);
const borderRadius = ref(16);
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
const name = ref('')
const type = ref('')
const city = ref('')
const description = ref('')
// const image = ref(null)
const formData = ref({})

const handleSubmit = () => {
  formData.value = {
    name:name.value,
    type:type.value,
    city:city.value,
    description: description.value
  }
}
// const image = ref(null)
</script>

<style scoped >
.label-for-select{
  position: absolute;
  top: 50%;
  left: 9px;
  transform: translate(0, -50%);
  transition: transform .3s linear;
  z-index: -1;
}
select:focus ~ .label-for-select{
  transform: translate(0, -45px);
}
select:not(:placeholder-shown) ~ .label-for-select {
  transform: translate(0, -45px);
}
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
select{
  height: 40px;
  outline: none;
  border:#ffc107 1px solid;
  border-radius: 8px;
  padding: 0 10px;
  background: transparent;
}
textarea{
  min-height: 120px;
  resize: none;
  outline: none;
  border: #ffc107 1px solid;
  border-radius: 8px;
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