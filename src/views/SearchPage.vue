<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { storeToRefs } from 'pinia';

const search = useSearchStore()
const { searchBeerResult, searchBreweryResult, searchPlaceResult } = storeToRefs(search)
</script>
<template>
      <nav class="navbar navbar-expand bg-body-tertiary mt-5">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 justify-content-around">
          <li class="nav-item position-relative" :data-value="searchPlaceResult.length">
            <RouterLink class="nav-link py-0" to="/search/place"
              >Места</RouterLink
            >
          </li>
          <li class="nav-item position-relative" :data-value="searchBeerResult.length">
            <RouterLink class="nav-link py-0" to="/search/beer"
              >Пиво</RouterLink
            >
          </li>
          <li class="nav-item position-relative" :data-value="searchBreweryResult.length">
            <RouterLink class="nav-link py-0" to="/search/brewery"
              >Пивоварни</RouterLink
            >
          </li>          
        </ul>
      </div>
    </div>
  </nav>
  <RouterView/>
</template>
<style scoped >
.nav-item:not(:has(.router-link-active)){
   border-radius: 20px;
   background: rgb(13,202,240);
}
.nav-item:has(.router-link-active){
   border-radius: 20px;
   background-color: #ffc107;
}
.nav-link.router-link-active{
   color: #fff;
}
.nav-item::after{
   position: absolute;
   content:"";
   width: 20px;
   height: 3px;
   background-color: rgb(13,202,240);
   top: 50%;
   left: 100%;
   transform: translateY(-50%);
}
.nav-item::before{
   position: absolute;
   content: attr(data-value);
   height: 100%;
   aspect-ratio: 1;
   border-radius: 50%;
   background-color: rgb(13,202,240);
   top: 50%;
   right: -50px;
   transform: translateY(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 0.8rem;
}
.nav-item:has(.router-link-active)::after{
   background-color: #ffc107;
}
.nav-item:has(.router-link-active)::before{
   background-color: #ffc107;
   color: #fff;
}
</style>