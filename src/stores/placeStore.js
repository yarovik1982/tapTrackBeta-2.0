import { defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios';
import { BASE_URL, beerList } from '@/constants/constants';

export const usePlaceStore = defineStore('placeStore', {
 state: () => ({
   limit:5,
   offset:0,
   hasMorePlace: true,
   isLoaded:false,
   placeProfile:{},
   placeList:[],
   placeListUser:[],
   placeListMap:[],
   placeIsAddedList:[],
   placeBeerList:[],
   placeAdBlock:[],
  //  place:[],
  //  place:[],
  //  place:[],
 }),
 getters: {
   getPlaceProfile: state => state.placeProfile,
   getPlaceList: state => state.placeList,
   getPlaceListUser: state => state.placeListUser,
   getPlaceListMap: state => state.placeListMap,
   getPlaceIsAddedList: state => state.placeIsAddedList,
   getPlaceBeerList: state => state.placeBeerList,
   getPlaceAdBlock: state => state.placeAdBlock,
  //  getPlace: state => state.place,
  //  getPlace: state => state.place,
  //  getPlace: state => state.place,
 },
 actions: {
  //  async _PLACE_FAVORITE(POST){},
  //  async _PLACE_CREATE(POST){},
  //  async _PLACE_BUY_BEER(POST){},
  //  async _PLACE_PROFILE(GET){},
   async _PLACE_LIST(){
    const config = {
      headers: { "Content-Type": "application/json" },
      params: { limit: this.limit, offset: this.offset },
  };
  try {
      const response = await axios.get(
          `${BASE_URL}/place/list`,
          config
      );

      if (response.status === 200) {
        this.placeList = [...this.placeList, ...response.data];
        this.offset += this.limit;
        this.hasMorePlace = response.data.length === this.limit;
        this.isLoaded = true; 
      }
  } catch (error) {
      console.log(error);
      // this.beerList = beerList;
  }
   },
   async loadMorePlace(){
    if(this.hasMorePlace){
      this._PLACE_LIST
    }
   },
  //  async _PLACE_LIST_USER(GET){},
  //  async _PLACE_LIST_MAP(GET){},
  //  async _PLACE_ISADDED_LIST(GET){},
  //  async _PLACE_BEER_LIST(GET){},
   async _PLACE_ADBLOCK(){
    try{
      const response = await axios.get(`${BASE_URL}/place/adblock`, {
          headers:{"Content-Type": "application/json"}
      })
      if(response.status === 200){
          this.placeAdBlock = response.data
          return response.data
      }
  }catch(error){
      console.log(error);
  }
   },
  //  async _PLACE_ISADDED_REMOVE(DELETE){},
  //  async _PLACE_FAVORITE_REMOVE(DELETE){},
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(usePlaceStore, import.meta.hot))
}
