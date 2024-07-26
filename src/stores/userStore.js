import { defineStore, acceptHMRUpdate } from "pinia";
import { BASE_URL } from "@/constants/constants";
import axios from "axios";

// export const useUserStoreStore = defineStore("userStore", {
export const useUserStore = defineStore("userStore", {
    state: () => ({
        token: localStorage.getItem("token") || null,
        refresh: localStorage.getItem("refresh") || null,
        userProfile: localStorage.getItem("user") || null,
        isAuth: false,
        userImage:''
    }),
    getters: {
      getToken: state => state.token,
      getRefresh: state => state.refresh,
      getProfile: state => state.userProfile,
      getUserImage: state => state.userImage
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
             this.userImage = profile.image
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
       async _USER_PHOTO_REMOVE(){
        try{
          const response = await axios.delete(`${BASE_URL}/user/photo/remove`,{
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.token}`
            },
            params:{
              id:JSON.parse(this.userProfile).userId
            }
          })
          if(response.status === 200){
            await this._USER_PROFILE(this.token)
            window.location.reload()
          }
        }catch(e){console.log(e);}
       },

       async _USER_PHOTO(image){
        try{
          const response = await axios.post(`${BASE_URL}/user/photo`, image, {
            headers:{
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${this.token}`
            },
            params:{
              userId: JSON.parse(this.userProfile).userId
            }
          })
        }catch(e){
          console.log(e);
        }
       },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
