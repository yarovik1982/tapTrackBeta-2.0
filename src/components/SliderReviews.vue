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
     <swiper-slide v-for="slide in data" :key="slide.id">
       <div class="slide-img">
         <img :src="slide.image" />
       </div> 
       <p class="slide-text">{{ slide.text }} {{ slide.id }}</p>

     </swiper-slide>
   </swiper>
 </template>
 <script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from "swiper/vue";
 import { ref } from 'vue'
 
 // Import Swiper styles
 import "swiper/css";
 
 import "swiper/css/effect-coverflow";
//  import "swiper/css/pagination";
 
//  import "./style.css";
 
 // import required modules
 import { Autoplay, EffectCoverflow } from "swiper/modules";
 
 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   setup() {
      const data = ref([
         {id:1, 'image':"src/assets/images/news1.jpg",'text': 'Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв Отзыв '},
         {id:2, 'image':"src/assets/images/news2.jpg",'text': 'Отзыв'},
         {id:3, 'image':"src/assets/images/news3.jpg",'text': 'Отзыв'},
         {id:4, 'image':"src/assets/images/news4.jpg",'text': 'Отзыв'},
         {id:5, 'image':"src/assets/images/news1.jpg",'text': 'Отзыв'},
         {id:6, 'image':"src/assets/images/news2.jpg",'text': 'Отзыв'},
         {id:7, 'image':"src/assets/images/news3.jpg",'text': 'Отзыв'},
         {id:8, 'image':"src/assets/images/news4.jpg",'text': 'Отзыв'},
         {id:9, 'image':"src/assets/images/news1.jpg",'text': 'Отзыв'},
         {id:10, 'image':"src/assets/images/news2.jpg",'text': 'Отзыв'},
         {id:11, 'image':"src/assets/images/news3.jpg",'text': 'Отзыв'},
         {id:12, 'image':"src/assets/images/news4.jpg",'text': 'Отзыв'},
      ])
     return {
       modules: [Autoplay, EffectCoverflow],
       data
     };
   },
 };
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
 /* .custonSwiper div {
   align-self: center;
   overflow: hidden;
   position: relative;
 } */
 .slide-img {
   width: fit-content;
   aspect-ratio: 1;
   /* background: red; */
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
