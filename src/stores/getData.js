import { defineStore, acceptHMRUpdate } from "pinia";
import { BASE_URL } from "@/constants/url";
import axios from "axios";

export const useGetDataStore = defineStore("getData", {
  state: () => ({
    limitPlace: 5,
    offsetPlace: 0,
    limitBerr: 5,
    offsetBerr: 0,
    limitBrewery: 5,
    offsetBrewery: 0,
    hasMorePlace: true,
    hasMoreBeer: true,
    hasMoreBrewery: true,
    placeList: [],
    beerList: [],
    breweryList: [],
    // рекламные блоки
    placeAdvList: [],
    beerAdvList: [],
    breweryAdvList: [],
  }),
  actions: {
    async PLACE_LIST() {
      try {
        const response = await axios.get(`${BASE_URL}/place/list`, {
          params: {
            limit: this.limitPlace,
            offset: this.offsetPlace,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.placeList = [...this.placeList, ...response.data];
        this.offsetPlace += this.limitPlace; 
        this.hasMorePlace = response.data.length === this.limitPlace;
      } catch (error) {
        console.error("Error in PLACE_LIST:", error);
      }
    },
    async loadMorePlaces() {
      if (this.hasMorePlace) {
        await this.PLACE_LIST();
      }
    },

    async BEER_LIST() {
      try {
        const response = await axios.get(`${BASE_URL}/beer/list`, {
          params: {
            limit: this.limitBerr,
            offset: this.offsetBerr,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.beerList = [...this.beerList, ...response.data];
        this.offsetBerr += this.limitBerr;
        this.hasMoreBeer = response.data.length === this.limitBerr;
      } catch (error) {
        console.error("Error in BEER_LIST:", error);
      }
    },
    async loadMoreBeer() {
      if (this.hasMoreBeer) {
        await this.BEER_LIST();
      }
    },

    async BREWERY_LIST() {
      try {
        const response = await axios.get(`${BASE_URL}/brewery/list`, {
          params: {
            limit: this.limitBrewery,
            offset: this.offsetBrewery,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        this.breweryList = [...this.breweryList, ...response.data];
        this.offsetBrewery += this.limitBrewery;
        this.hasMoreBrewery = response.data.length === this.limitBrewery;
      } catch (error) {
        console.error("Error in PLACE_LIST:", error);
      }
    },
    async loadMoreBrewery() {
      if (this.hasMoreBrewery) {
        await this.BREWERY_LIST();
      }
    },

    async PLACE_ADBLOCK() {
      const response = await axios.get(`${BASE_URL}/place/adblock`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.placeAdvList = response.data;
    },
    async BEER_ADBLOCK() {
      const response = await axios.get(`${BASE_URL}/beer/adblock`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.beerAdvList = response.data;
    },
    async BREWERY_ADBLOCK() {
      const response = await axios.get(`${BASE_URL}/brewery/adblock`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.breweryAdvList = response.data;
    },

   
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGetDataStore, import.meta.hot));
}
