import { BASE_URL } from '@/constants/url';
import axios from 'axios';
import { defineStore, acceptHMRUpdate } from 'pinia'

const token = JSON.parse(localStorage.getItem('token'))
const headers = {
   "Content-Type": "application/json",
   "Authorization": `Bearer ${token}`
}
export const useAvatarStore = defineStore('avatar', {
 state: () => ({
   
 }),
 getters: {},
 actions: {
   async _USER_PHOTO_REMOVE(id){
      try{
         const response = await axios.delete(`${BASE_URL}/user/photo/remove`,{
            params:{id},
            headers:headers
         })
      }catch(error){
         console.error('USER_PHOTO_REMOVE: ', error.status);
      }
   },

   async _USER_PHOTO(data, userId){
      try{
         const response = await axios.post(`${BASE_URL}/user/photo`,data, {
            params:{userId},
            headers:headers
         })
      }catch (error) {
         console.error('USER_PHOTO: ', error.status);
      }
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useAvatarStore, import.meta.hot))
}
