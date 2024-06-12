import { defineStore, acceptHMRUpdate } from 'pinia'

export const useFakeDataStore = defineStore('fakeData', {
 state: () => ({
   data:[
      {
        id: "1",
        title: "berr-1",
        placeId: 59,
        name: "Пивнуха",
        address: "Оренбуг, ул. Ленина, ",
        description: "Классный бар",
        type: "Бар",
        image: "../assets/images/home.jpg",
        city: "Оренбург",
        geoLat: null,
        geoLon: null,
        setAvailabilityOfSpaceForTheUser: false,
      },
      {
        id: "2",
        title: "berr-2",
        placeId: 125,
        name: "Армянское пиво",
        address: "Респ Крым, г Армянск, ул Симферопольская, д 4Д",
        description: "Всегда свежее пиво с раками и раки со сраками",
        type: "Бар",
        image: "../assets/images/profile-favorites4.jpg",
        city: "Армянск",
        geoLat: 46.1117833,
        geoLon: 33.6897774,
        setAvailabilityOfSpaceForTheUser: true,
      },
      {
        id: "3",
        title: "berr-3",
        placeId: 20,
        name: "13 rules Bar&Shop",
        address: "ул. Брюсова. д. 4/1",
        description:
          "Bar&Shop Крафтового пива. Всегда в наличии пиво на любой вкус и цвет! 20 кранов и 200 бутылок!",
        type: "Бар",
        image: "../assets/images/news4.jpg",
        city: "Ковров",
        geoLat: 56.354661,
        geoLon: 41.310413,
        setAvailabilityOfSpaceForTheUser: false,
      },
      {
        id: "4",
        title: "berr-4",
        placeId: 21,
        name: "Why Not?",
        address: "ул. Островского. д. 47",
        description:
          "Новый взгляд на пиво! Аскетичный бар на улице Островского с огромным количеством крафтового пива со всей...",
        type: "Бар",
        image: "../assets/images/news3.jpg",
        city: "Сочи",
        geoLat: 43.589508,
        geoLon: 39.723637,
        setAvailabilityOfSpaceForTheUser: true,
      },
      {
        id: "5",
        title: "berr-5",
        placeId: 58,
        name: "card-image",
        address: null,
        description:
          "cccccccccccc cccccccc ccccccccccc xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        type: "Магазин",
        image: "../assets/images/news2.jpg",
        city: "Нью-йорк",
        geoLat: 55.756994,
        geoLon: 37.614006,
        setAvailabilityOfSpaceForTheUser: false,
      },
      {
        id: "6",
        title: "berr-6",
        placeId: 60,
        name: "Пивная фактория",
        address: "Респ Крым, г Армянск, ул Вишнёвая, двлд 1",
        description: "Описание",
        type: "Бар",
        image: "../assets/images/news1.jpg",
        city: "Армянск",
        geoLat: 46.105885,
        geoLon: 33.676735,
        setAvailabilityOfSpaceForTheUser: true,
      },
      {
        id: "7",
        title: "berr-7",
        placeId: 57,
        name: "shop",
        address: null,
        description: "cccccccccc cccccc xxxxxxxxxxxx",
        type: "Бар",
        image: "../assets/images/image-5.png",
        city: "Москва",
        geoLat: 55.756994,
        geoLon: 37.614006,
        setAvailabilityOfSpaceForTheUser: false,
      },
      {
        id: "8",
        title: "berr-8",
        placeId: 131,
        name: "Oleg",
        address: "г Москва, ул Тверская, д 1",
        description: "",
        type: "Бар",
        image: "../assets/images/home.jpg",
        city: "Москва",
        geoLat: 55.756994,
        geoLon: 37.614006,
        setAvailabilityOfSpaceForTheUser: true,
      },
    ],
    currentItem:null,
 }),
 getters: {
   item: (state) => state.currentItem,
 },
 actions: {
   getItemById(id){
      const item = this.data.find(item => item.placeId === id)
      this.currentItem = item
      // console.log(this.item);
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useFakeDataStore, import.meta.hot))
}
