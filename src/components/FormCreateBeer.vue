<script setup>
import BtnCloseLayout from "./UI/BtnCloseLayout.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { AvatarEditor } from "avatar-editor";
import "avatar-editor/dist/style.css";
import { useRoute } from "vue-router";
import { useBeerStore } from "@/stores/beer";
import { replaceQuotes } from "@/functions/replaceQuotes";
import { useForms } from "@/stores/forms";

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

const image = ref(null);

const save = () => {
  if (avatarEditorRef.value) {
    const canvasData = avatarEditorRef.value.getImageScaled();
    const blob = canvasData.toBlob(
      (blob) => {
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      },
      "image/png",
      0.8
    ); 
  }
};

onMounted(() => {
  document.addEventListener("wheel", handleWheelEvent);
});

onUnmounted(() => {
  document.removeEventListener("wheel", handleWheelEvent);
});

const forms = useForms()

const beer = useBeerStore()
const route = useRoute()
const breweryId = route.params.id
console.log(breweryId);
const name = ref('')
const style = ref('')
const description = ref('')
const abv = ref('')
const ibu = ref('')

const formattedAbv = (event) => {
  let value = event.target.value
  value = value.replace(',', '.');
  value = value.replace(/[^0-9.]/g, '');
  abv.value = value;
}

const formattedIbu = (event) => {
  let value = event.target.value
  value = value.replace(/[^0-9.]/g, '');
  ibu.value = value
}

const createBeer = async () => {  
  let formData = null;
  if (avatarEditorRef.value) {
    const canvasData = avatarEditorRef.value.getImageScaled();
    const blob = await new Promise((resolve) => {
      canvasData.toBlob(resolve, 'image/png');
    });

    formData = new FormData();
    formData.append('image', blob, 'avatar.png');
  }

    const params = {
      name: name.value,
      style: style.value,
      description: replaceQuotes(description.value),
      abv: abv.value,
      ibu: ibu.value,
      breweryId: breweryId
    };
  await beer._BEER_CREATE(formData, params)
  await forms.closeLayout()
  await beer._BEER_LIST_BREWERY(breweryId)
};

</script>
<template>
  <form id="createBeer" class="w-75" @submit.prevent="createBeer">
    <h3 class="form-title text-center py-3">Добавить пиво</h3>
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
          <button class="btn btn-info btn-sm" @click.prevent="save">
            Сохранить на компьютере
          </button>
        </div>
      </div>
      <div class="col py-3">
        <div class="mb-5 position-relative">
          <input
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
          <input
            type="text"
            class="app-form-control"
            id="inpStyle"
            v-model="style"
            placeholder="Стиль"
          />
          <label for="inpStyle" class="app-form-label position-absolute"
            >Стиль</label
          >
        </div>
        <div class="mb-5 position-relative">
          <input
            type="text"
            class="app-form-control"
            id="inpAbv"
            v-model="abv"
            placeholder="Abv"
            @input="formattedAbv(event)"
          />
          <label for="inpAbv" class="app-form-label position-absolute"
            >Abv</label
          >
        </div>
        <div class="mb-5 position-relative">
          <input
            type="text"
            class="app-form-control"
            id="inpIbu"
            v-model="ibu"
            placeholder="Ibu"
            @input="formattedIbu(event)"
          />
          <label for="inpIbu" class="app-form-label position-absolute"
            >Ibu(целое число)</label
          >
        </div>
        
        
        <div class="mb-5 position-relative">
          <label for="descript" style="width: 100%"
            >Введите краткое описание</label
          >
          <textarea
            type="text"
            id="descript"
            name="descript"
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
  </form>
</template>
<style scoped>
.label-for-select {
  position: absolute;
  top: 50%;
  left: 9px;
  transform: translate(0, -50%);
  transition: transform 0.3s linear;
  z-index: -1;
}
select:focus ~ .label-for-select {
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
  transition: top 0.3s ease;
}
.app-form-control.inValid {
  border: 1px solid rgb(255, 40, 40);
}
.app-form-control {
  width: 100%;
  border: 1px solid #ffc107;
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  appearance: none;
  -webkit-appearance: none;
  cursor: text;
}
.app-form-control:focus,
.app-form-control:active {
  outline: none;
}
.bi-person-fill,
.bi-envelope-fill,
.bi-telephone-fill {
  right: 10px;
  color: rgba(0, 0, 0, 0.6);
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

.app-form-control:not(:placeholder-shown) ~ .app-form-label {
  transform: translate(0, -45px) scale(1);
  cursor: pointer;
}
.app-form-control:focus ~ .app-form-label {
  transform: translate(0, -45px) scale(1);
}
.app-form-control:-webkit-autofill {
  transition: all 5000s ease-in-out 0s;
}
select {
  height: 40px;
  outline: none;
  border: #ffc107 1px solid;
  border-radius: 8px;
  padding: 0 10px;
  background: transparent;
}
textarea {
  min-height: 120px;
  resize: none;
  outline: none;
  border: #ffc107 1px solid;
  border-radius: 8px;
}
</style>
