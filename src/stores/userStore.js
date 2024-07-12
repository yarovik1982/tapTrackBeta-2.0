import { defineStore, acceptHMRUpdate } from "pinia";
import { BASE_URL } from "@/constants/constants";
import axios from "axios";

export const useUserStoreStore = defineStore("userStore", {
    state: () => ({
        token: localStorage.getItem("token") || null,
        refresh: localStorage.getItem("refresh") || null,
        userProfile: localStorage.getItem("user") || null,
        isAuth: false,
    }),
    getters: {
      getToken: state => state.token,
      getRefresh: state => state.refresh,
      getProfile: state => state.userProfile
    },
    actions: {
        async _USER_AUTH(data) {
            try {
                const response = await axios.post(
                    `${BASE_URL}/user/auth`,
                    data,
                    {
                     headers:{"Content-Type": "application/json"}
                    }
                );

                if (response.status === 200) {
                  const token = response.data.token;
                  const refresh = response.data.refresh;
                  localStorage.setItem('token', (token));
                  localStorage.setItem('refresh', (refresh));
            
                  
                  const profile = await this._USER_PROFILE(token);
                  if (profile) {
                    this.isAuth = true;
                    
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
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStoreStore, import.meta.hot));
}
