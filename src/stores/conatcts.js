import { defineStore, acceptHMRUpdate } from "pinia";
import { BASE_URL } from "@/constants/url";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

export const useConatctsStore = defineStore("conatcts", {
  state: () => ({
   
  }),
  getters: {},
  actions: {
    async _CREATE_CONTACT( data) {
      
      try {
        const response = await axios.post(`${BASE_URL}/contact/create`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          return response.status
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConatctsStore, import.meta.hot));
}
