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
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news1.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news2.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news3.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news4.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news1.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news2.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news3.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news4.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     <swiper-slide class="slide border border-2 border-warning rounded rounded-4 p-1">
      <div class="text-center text-capitalize mb-4">slide title</div>
      <img src="../assets/images/news4.jpg" class="rounded rounded-4" alt="">
    </swiper-slide>
     
   </swiper>
   </div>
 </template>
 <script>
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from 'swiper/vue';
 
   // Import Swiper styles
   import 'swiper/css';
 
  //  import 'swiper/css/navigation';
 
  //  import '../main.css';
 
   // import required modules
   import { Autoplay } from 'swiper/modules';
 
   export default {
     components: {
       Swiper,
       SwiperSlide,
     },
     setup() {
       return {
         modules: [Autoplay],
       };
     },
   };
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
 .slide img {
  width: 100%;
  object-fit: cover;
 }
 </style>
 