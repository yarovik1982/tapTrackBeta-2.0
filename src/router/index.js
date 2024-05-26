import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PlacePage from '@/views/PlacePage.vue'
import BeerPage from '@/views/BeerPage.vue'
import BreweryPage from '@/views/BreweryPage.vue'
// import { useUserAuth } from '@/stores/user-auth'
// import { storeToRefs } from 'pinia'
// import TestPage from '@/views/TestPage.vue'


  const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children:[
      ],
    },
    {
      path:'/place',
      name:'place',
      // component:() => import('@/views/PlacePage.vue')
      component:PlacePage
    },
    // {
    //   path:'/test',
    //   name:'test',
    //   // component:() => import('@/views/TestPage.vue')
    //   component:TestPage
    // },
    {
      path:'/beer',
      name:'beer',
      // component:() => import('@/views/BeerPage.vue')
      component:BeerPage
    },
    {
      path:'/brewery',
      name:'brewery',
      // component:() => import('@/views/BreweryPage.vue')
      component:BreweryPage
    },
    {
      path:'/profile',
      name:'profile',
      component:() => import('@/views/ProfilePage.vue'),
      children:[
        {
          path:'/profile-favorite',
          name:'profile-favorite',
          component:() => import('@/views/ProfileFavoritePage.vue')
        },
        {
          path:'/profile-reviews',
          name:'profile-reviews',
          component:() => import('@/views/ProfileReviewsPage.vue')
        },
        {
          path:'/profile-places',
          name:'profile-places',
          component:() => import('@/views/ProfilePlacesPage.vue')
        },
        {
          path:'/profile-brewery',
          name:'profile-brewery',
          component:() => import('@/views/ProfileBreweryPage.vue')
        },
      ]
    },
    {
      path:'/profile-place-:id',
      name:'one-place',
      component:() => import('@/views/ProfileOnePlase.vue')
    }
    
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  // const userAuthStore = useUserAuth()
  // const {userProfile, token} = storeToRefs(userAuthStore)

  router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const access = JSON.parse(localStorage.getItem("token"));
    if (to.path.startsWith("/profile")) {
      if (access && user) {
        next();
      } else {
        next("/");
      }
    } else {
      next();
    }
  });
export default router
