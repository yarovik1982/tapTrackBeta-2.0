<template>
   <div class="container">
      <swiper
     :slidesPerView="4"
     :spaceBetween="40"
     :centeredSlides="true"
     :loop="true"
     :autoplay="{
      delay:2000,
     }"
     :navigation="{
       clickable: true,
     }"
     :modules="modules"
     class="mySwiper "
   >
     <swiper-slide 
      class="slide border border-2 border-warning rounded rounded-4 p-1"
      v-for="slide in getData.placeAdvList"
      
      :key="slide.placeId"
    >
      <div class="text-center text-capitalize mb-4">{{ slide.name }}</div>
      <!-- <img src="../assets/images/news1.jpg" class="rounded rounded-4" alt=""> -->
      <div class="slide-img">
        <img :src="slide.image" class="rounded rounded-4" :alt="slide.name" height="290">
      </div>
    </swiper-slide>
     
     
   </swiper>
   </div>
 </template>
 <script setup>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Autoplay } from 'swiper/modules';
 import { useGetDataStore } from '@/stores/getData';
 import 'swiper/css';
 
 defineProps();
 defineEmits();
 defineExpose();
 
 const modules = [Autoplay];

 const getData = useGetDataStore()
 getData.PLACE_ADBLOCK()
 </script>
 <style>
 .swiper{
  padding: 1rem 0;
 }
 .slide{
  /* box-shadow: 0rem 0.125rem 9px 3px rgba(251, 204, 4, 1); */
  box-shadow: 0rem 0.125rem 16px 1px rgba(25, 20, 0, .5);
  background: rgba(255, 255, 255, .7);
  /* width: 250px; */
 }
 
 .slide-img {
  width: 100%;
  height: 290px;
  border-radius: 2rem;
  background: transparent;
}
.slide-img img{
  width: 100%;
  object-fit: cover;
}
 </style>
 