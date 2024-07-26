<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { VueAvatar } from "vue-avatar-editor-improved";
import BtnCloseLayout from "@/components/UI/BtnCloseLayout.vue";
import { useUserStore } from '@/stores/userStore.js'

const userStore = useUserStore()
const rotation = ref(0);
const scale = ref(1);
const borderRadius = ref(200);
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

const handleSubmit = async () => {
    if(vueavatar.value){
        const canvasData = vueavatar.value.getImageScaled()
        const blob = await new Promise(resolve => {
            canvasData.toBlob(resolve, 'image/png')
        })
        const formData = new FormData()
        formData.append('image', blob, 'avatar.png')
        console.log(formData);
        await userStore._USER_PHOTO(formData)
    }
}
</script>
<template>
    <form id="addAvatar" class="w-50">
        <h3 class="form-title text-center py-3">Добавить аватар</h3>
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
                        <div class="preview-radius">
                            preview
                            <img ref="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button
            type="submit"
            class="btn btn-warning text-white d-block m-auto rounded rounded-5"
            style="width: 270px"
            @click.prevent="handleSubmit"
        >
            Отправить
        </button>
    </form>
</template>
<style scoped>
canvas {
    border: 4px solid rgb(127, 127, 127);
}
.preview-radius {
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
img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
}
</style>
