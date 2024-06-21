<template>
   <swiper
     :loop="true"
     :effect="'coverflow'"
     :grabCursor="true"
     :centeredSlides="true"
     :slidesPerView="4"
     :spaceBetween="-150"
     :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
     :coverflowEffect="{
       rotate: 0,
       stretch: 0,
       depth: 0,
       modifier: 0,
       slideShadows: false,
     }"
     :modules="modules"
     class="customSwiper "
   >
     <swiper-slide v-for="slide in feedback.feedbackListMain" :key="slide.id">
       <div class="slide-img" v-if="slide.imageFeedback">
         <img :src="slide.imageFeedback" :alt="slide.beerName"/>
       </div> 
       <div class="slide-img rounded-circle" v-else style="background: #ccc; display:grid; place-content: center;">
         <span style="color:#fff;font-size: 1rem;">No Photo</span>
       </div> 
       <p class="slide-text">{{ slide.feedbackText }} </p>

     </swiper-slide>
   </swiper>
 </template>
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, EffectCoverflow } from 'swiper/modules';
  import { useFeedbackStore } from '@/stores/feedback.js';
  import 'swiper/css';
  import "swiper/css/effect-coverflow";
  
  defineProps();
  defineEmits();
  defineExpose();
  
  const modules = [Autoplay, EffectCoverflow];
 
  const feedback = useFeedbackStore()
  feedback._FEEDBACK_LIST_MAIN()
  </script>
 
 <style scoped>
 .customSwiper {
   display: flex;
 }
 .swiper-slide{
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 
 .slide-img {
   width: fit-content;
   aspect-ratio: 1;
   position: relative;
   z-index: 5;
   overflow: hidden;
   transition: transform .3s ease;
 }
 .slide-img::after{
   position: absolute;
   content:'';
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-color: rgba(255, 255, 255, 0.7);
   backdrop-filter: blur(7px);
   border-radius: 50%;
 }
 .slide-img img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 50%;
   /* opacity: 0.5; */
 }
 .swiper-slide.swiper-slide-active .slide-img::after{
   background: rgba(255, 255, 255, 0);
   backdrop-filter: initial;
  }
  
  .swiper-slide.swiper-slide.swiper-slide-prev .slide-img::after{
   background: rgba(255, 255, 255, .5);
   backdrop-filter: blur(5px);
  }
  .swiper-slide.swiper-slide.swiper-slide-next .slide-img::after{
  background: rgba(255, 255, 255, .5);
   backdrop-filter: blur(5px);

 }
 .slide-text{
   width: 400px;
   min-height:300px;
   padding-top: 24px;
   text-align: center;
   display: none;
 }
 .swiper-slide-active .slide-text{
   display: block;
 }
 .swiper-slide.swiper-slide-next .slide-img{

   transform: scale(0.7);
 }
 .swiper-slide.swiper-slide-prev .slide-img{
  transform: scale(0.7);
 }
 .swiper-slide .slide-img{
  transform: scale(0.5);
 }
 .swiper-slide.swiper-slide-active .slide-img{
  transform: scale(1);
 }

 </style>
