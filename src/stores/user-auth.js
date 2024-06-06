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
             const token = response.data.token;
             const refresh = response.data.refresh;
             localStorage.setItem('token', JSON.stringify(token));
             localStorage.setItem('refresh', JSON.stringify(refresh));
       
             // Call the _USER_PROFILE() function and wait for the result
             const profile = await this._USER_PROFILE(token);
             if (profile) {
               this.auth = true;
             }
           } else {
             console.error("Authentication failed:", response.status);
           }
         } catch (error) {
           console.error("Error during authentication:", error);
         }
       },
       
       async _USER_PROFILE(token) {
         try {
           const responseProfile = await axios.get(BASE_URL + '/user/profile', {
             headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
             }
           });
       
           if (responseProfile.status === 200) {
             const profile = responseProfile.data;
             localStorage.setItem('user', JSON.stringify(profile));
             return profile;
           } else {
             console.log("Error during data acquisition:", responseProfile.status);
             return null;
           }
         } catch (error) {
           console.error("Error during profile fetch:", error);
           return null;
         }
       },
       
       async _USER_EDIT(data, id){
          try{
             const response = await axios.post(`${BASE_URL}/user/edit`, data, {
                headers:{
                   "Content-Type": "application/json",
                   "Authorization": `Bearer ${JSON.parse(this.token)}`
                },
                params:{ id }
             })
             if(response.status === 200){
                const responseProfile = await axios.get(`${BASE_URL}/user/profile`, {
                   headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${JSON.parse(this.token)}`
                   }
                })
                if(responseProfile.status === 200){
                   const profile = await responseProfile.data
                   localStorage.setItem('user', JSON.stringify(profile))
                   
                } else{
                   console.log("Error during data acquisition:", responseProfile.status);
                }
             } else {
                console.error("USER_EDIT: ", response.status);
             }
          }catch(error){
             console.log("USER_EDIT: ", error);
          }
       },
   }
});
