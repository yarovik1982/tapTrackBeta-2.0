import { defineStore, acceptHMRUpdate } from "pinia";
import { BASE_URL } from "@/constants/constants";
import { useForms } from "./forms";
import axios from "axios";

// export const useUserStoreStore = defineStore("userStore", {

// const id = JSON.parse(localStorage?.user).userId




export const useUserStore = defineStore("userStore", {
    state: () => ({
        token: '',
        refresh:'',
        userProfile: {},
        isAuth: false,
        userImage:"",
        userFavoritePlaceList:[],
    }),
    getters: {
      getToken: state => state.token,
      getRefresh: state => state.refresh,
      getProfile: state => state.userProfile,
      getUserImage: state => state.userImage,
      getUserFavoritePlaceList: state => state.userFavoritePlaceList,
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
                  this.token = response.data.token;
                  this.refresh = response.data.refresh;
                  localStorage.setItem('token', (this.token));
                  localStorage.setItem('refresh', (this.refresh));
            
                  
                  await this._USER_PROFILE(this.token);
                  
                } else {
                  console.error("Authentication failed:", response.status);
                }
              } catch (error) {
                console.error("Error during authentication:", error);
              }
        },
        async _USER_PROFILE() {
         try {
           const responseProfile = await axios.get(BASE_URL + '/user/profile', {
             headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer ${localStorage.token}`
             }
           });
       
           if (responseProfile.status === 200) {
            //  const profile = responseProfile.data;
            //  this.userImage = profile.image
            this.userProfile = responseProfile.data
            this.userImage = responseProfile.data.image
             localStorage.setItem('user', JSON.stringify(responseProfile.data));
             return responseProfile.data;
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
        // this.userImage = false
        try{
          const response = await axios.delete(`${BASE_URL}/user/photo/remove`,{
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.token}`
            },
            params:{
              id:id
            }
          })
          if(response.status === 200){
            await this._USER_PROFILE()
            // window.location.reload()
          }
        }catch(e){console.log(e);}
       },

       async _USER_PHOTO(image){
        try{
          const response = await axios.post(`${BASE_URL}/user/photo?userId=${id}`, image, {
            headers:{
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.token}`
            },
            // params:{
            //   userId: (this.userProfile).userId
            // }
          })
          if(response.status === 200){
            await this._USER_PROFILE(this.token)
            await useForms().closeLayout()
            // this.userImage = true
            // window.location.reload()
          }
        }catch(e){
          console.log(e);
        }
       },

       async _USER_FAVORITE_PLACE(){
        try{
          const response = await axios.get(`${BASE_URL}/user/favorite/place`, {
            headers:{
              "Content-Type": "applicaton/json",
              "Authorization": `Bearer ${this.token}`
            },
            params:{
              id: JSON.parse(this.userProfile).userId
            }
          })
          if(response.status === 200){
            this.userFavoritePlaceList = response.data
            return response.data
          }
        }catch(e){
          console.log(e);
          useForms().openLayout('login')
        }
       }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
