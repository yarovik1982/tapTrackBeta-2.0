import { BASE_URL, beerList } from "@/constants/constants";
import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "axios";

export const useBeerStore = defineStore("beerStore", {
    state: () => ({
        limit: 5,
        offset: 0,
        hasMoreBeer: true,
        isLoaded: false,
        beerProfile: [],
        beerPlace: [],
        beerList: [],
        beerListBrewery: [],
        beerAdBlock: [],
    }),
    getters: {
        getBeerProfile: (state) => state.beerProfile,
        getBeerPlace: (state) => state.beerPlace,
        getBeerList: (state) => state.beerList,
        getBeerListBrewery: (state) => state.beerListBrewery,
        getBeerAdBlock: (state) => state.beerAdBlock,
    },
    actions: {
        async _BEER_CREATE() {},

        async _BEER_PROFILE() {},

        async _BEER_PLACE() {},

        async _BEER_LIST() {
            const config = {
                headers: { "Content-Type": "application/json" },
                params: { limit: this.limit, offset: this.offset },
            };
            try {
                const response = await axios.get(
                    `${BASE_URL}/beer/list`,
                    config
                );

                if (response.status === 200) {
                  this.beerList = [...this.beerList, ...response.data];
                  this.offset += this.limit;
                  this.hasMoreBeer = response.data.length === this.limit;
                  this.isLoaded = true; 
                }
            } catch (error) {
                console.log(error);
                this.beerList = beerList;
            }
        },

        async loadMoreBeer() {
         if (this.hasMoreBeer) {
           await this._BEER_LIST();
         }
       },

        async _BEER_LIST_BREWERY() {},

        async _BEER_ADBLOCK() {
            try{
                const response = await axios.get(`${BASE_URL}/beer/adblock`, {
                    headers:{"Content-Type": "application/json"}
                })
                if(response.status === 200){
                    this.beerAdBlock = response.data
                    return response.data
                }
            }catch(error){
                console.log(error);
            }
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useBeerStore, import.meta.hot));
}
