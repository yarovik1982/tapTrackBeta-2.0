<template>
    <section id="sliader" class="mb-5" v-if="placeAdvList.length > 0">
        <h3 class="text-center mx-auto mb-5">
            <span class="section-title text-capitalize position-relative"
                >Популярные места</span
            >
        </h3>
        <div class="container">
            <swiper
                :slidesPerView="4"
                :spaceBetween="40"
                :centeredSlides="true"
                :loop="true"
                :autoplay="{
                    delay: 2000,
                }"
                :navigation="{
                    clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide
                    class="slide border border-2 border-warning rounded rounded-4 p-1"
                    v-for="(slide, ind) in placeAdvList"
                    :key="ind"
                >
                    <div class="text-center text-capitalize mb-4">
                        {{
                            slide.name
                                ? slide.name
                                : "Здесь может быть ваша точка."
                        }}
                    </div>

                    <div class="slide-img" v-if="slide.image">
                        <img
                            :src="slide.image"
                            class="rounded rounded-4"
                            :alt="slide.name"
                            height="290"
                        />
                    </div>
                    <div class="slide-img" v-else>
                        <div class="slide-placeholder">
                            <span style="color: #fff; font-size: 1rem"
                                >No photo</span
                            >
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { usePlaceStoreStore } from "@/stores/placeStore";
import { computed } from "vue";

const modules = [Autoplay];

const placeStore = usePlaceStoreStore();
placeStore._PLACE_ADVBLOCK();
const placeAdvList = computed(() => placeStore.getPlaceAdvList);
</script>
<style>
.swiper {
    padding: 1rem 0;
}
.slide {
    box-shadow: 0rem 0.125rem 16px 1px rgba(25, 20, 0, 0.5);
    background: rgba(255, 255, 255, 0.7);
}

.slide-img {
    width: 100%;
    height: 290px;
    border-radius: 2rem;
    background: transparent;
}
.slide-img img {
    width: 100%;
    object-fit: cover;
}
.slide-placeholder {
    width: 100%;
    height: 290px;
    border-radius: 1rem;
    background-color: #ccc;
    display: grid;
    place-content: center;
}
</style>
