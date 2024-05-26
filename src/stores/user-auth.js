import { defineStore } from "pinia";
import { BASE_URL } from "@/constants/url";
import axios from "axios";

export const useUserAuth = defineStore('userAuthStore', {
   state: () => ({
      token: localStorage.getItem('token') || null,
      refresh: localStorage.getItem('refresh') || null,
      userProfile: localStorage.getItem('user') || null,
      auth:false
   }),
   getters: {
      Get_AccesJwt() {
         return this.token;
      },
      Get_RefreshJwt() {
         return this.refresh;
      },
      Get_Profile(){
         return this.userProfile
      }
   },
   actions: {
      async auth(data) {
         try {
            const response = await axios.post(BASE_URL + '/user/auth', data, {
               headers: {
                  "Content-Type": "application/json"
               }
            });
            if (response.status === 200) {
               const token = await response.data.token;
               const refresh = await response.data.refresh;
               localStorage.setItem('token', JSON.stringify(token));
               localStorage.setItem('refresh', JSON.stringify(refresh));
      
               const responseProfile = await axios.get(BASE_URL + '/user/profile', {
                  headers: {
                     "Content-Type": "application/json",
                     "Authorization": `Bearer ${token}`
                  }
               });
               if (responseProfile.status === 200) {
                  const profile = await responseProfile.data;
                  localStorage.setItem('user', JSON.stringify(profile));
                  this.auth = true
                  // Нет явного return, но код продолжит выполнение
               } else {
                  console.log("Error during data acquisition:", responseProfile.status);
               }
            } else {
               console.error("Authentication failed:", response.status);
            }
         } catch (error) {
            console.error("Error during authentication:", error);
         }
      }
   }
});
