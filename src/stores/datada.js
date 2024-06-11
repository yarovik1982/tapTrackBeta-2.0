import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios';

export const useDatadaStore = defineStore('datada', {
   state: () => ({
      city: "",
      address: "",
      geoLon: 0,
      geoLat: 0,
    }),
    actions: {
      async setAddress(query, token) {
        try {
          const url =
            "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          };
          const response = await axios.post(url, { query }, { headers });
          const responseAddress = response.data.suggestions[0]
          this.city = responseAddress.data.city
          this.address = responseAddress.value
          this.geoLon = responseAddress.data.geo_lon;
          this.geoLat = responseAddress.data.geo_lat;
        } catch (error) {
          console.error("Error:", error);
        }
      },
    },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useDatadaStore, import.meta.hot))
}
