<script setup>
import BtnCloseLayout from '@/components/UI/BtnCloseLayout.vue'
import StarRatingEditable from '@/components/StarRatingEditable.vue';
import { AvatarEditor } from "avatar-editor";
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useFeedbackStore } from '@/stores/feedback';
import { useForms } from '@/stores/forms';
import { replaceQuotes } from '@/functions/replaceQuotes';
import { useRouter } from 'vue-router';
import { getIdAtLink } from '@/functions/decompositionLink';

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

// const image = ref(null);

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
const feedback = useFeedbackStore()
const router = useRouter()
const currRouter = router.currentRoute.value.fullPath
const beerId = ref(getIdAtLink(currRouter))
const userId = JSON.parse(localStorage.getItem('user')).userId
const rating = ref(0)
console.log(forms.getCurrId);
const feedbackText = ref('')

const createFeedback = async () => {  
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
      beerId: forms.getCurrId,
      feedbackText: replaceQuotes(feedbackText.value),
      rating:rating.value,
      userId:userId
    };
  await feedback._FEEDBACK_CREATE(formData, params)
  await forms.closeLayout()
  await feedback._FEEDBACK_LIST_BEER(beerId.value)
  window.location.reload()
};
</script>
<template>
  <form id="createFeedback" class="w-75" @submit.prevent="createFeedback">
    <h3 class="form-title text-center py-3 mb-3">Оставить отзыв</h3>
    <btn-close-layout/>
   <div class="row g-3">
    <div class="col  d-flex flex-column align-items-center justify-content-between">
      <div
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            grid-gap: 50px;
          "
        >
          <avatar-editor
            :width="300"
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
          <button class="btn btn-info btn-sm" @click.prevent="save">
            Сохранить на компьютере
          </button>
        </div>
    </div>
    <div class="col">
      <div class="mb-3 d-flex justify-content-center">
      <StarRatingEditable 
        :max="6" 
        :current="6" 
        :size="60" 
        :sizeValue="24" 
        :editable="true" 
        v-model:rating="rating"
      ></StarRatingEditable>

    </div>
    
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Текст отзыва</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="feedbackText"
      ></textarea>
    </div>
    </div>
   </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-warning rounded-5">Отправить отзыв</button>
    </div>
  </form>
</template>
<style scoped></style>
