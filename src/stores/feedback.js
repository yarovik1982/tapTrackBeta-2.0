import { defineStore, acceptHMRUpdate } from 'pinia'
import { BASE_URL } from '@/constants/url'
import axios from 'axios'

export const useFeedbackStore = defineStore('feedback', {
 state: () => ({
   feedbackListMain:[
      {
         "id": 252,
         "feedbackText": "2",
         "rating": 0.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "Fruitality",
         "breweryId": 4,
         "beerId": 9,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_36_24_641794ab39354f2ab5a6cdc56e93eea7.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 112,
         "feedbackText": "FGDFGDF",
         "rating": 5.50,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "BFG",
         "breweryId": 4,
         "beerId": 10,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_38_11_36999c7f7f316f72298ef8f1d31dbb47.jpeg",
         "dateFeedback": "04.10.2023"
     },
     {
         "id": 253,
         "feedbackText": "Бест",
         "rating": 4.50,
         "imageFeedback": "http://109.201.96.70:8081/api/feedback/images/16_03_2024_11_36_34_image",
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "Fruitality",
         "breweryId": 4,
         "beerId": 9,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_36_24_641794ab39354f2ab5a6cdc56e93eea7.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 251,
         "feedbackText": "1",
         "rating": 0.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "Fruitality",
         "breweryId": 4,
         "beerId": 9,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_36_24_641794ab39354f2ab5a6cdc56e93eea7.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 242,
         "feedbackText": "2",
         "rating": 0.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "BFG",
         "breweryId": 4,
         "beerId": 10,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_38_11_36999c7f7f316f72298ef8f1d31dbb47.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 56,
         "feedbackText": "можетичуть слаще надо, но это же весткост так что сойдет",
         "rating": 6.00,
         "imageFeedback": "http://109.201.96.70:8081/api/feedback/images/16_09_2023_20_50_15_image",
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "BFG",
         "breweryId": 4,
         "beerId": 10,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_38_11_36999c7f7f316f72298ef8f1d31dbb47.jpeg",
         "dateFeedback": "16.09.2023"
     },
     {
         "id": 250,
         "feedbackText": "",
         "rating": 0.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "Fruitality",
         "breweryId": 4,
         "beerId": 9,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_36_24_641794ab39354f2ab5a6cdc56e93eea7.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 61,
         "feedbackText": "6 из 6 лучшее пиво",
         "rating": 6.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "Fruitality",
         "breweryId": 4,
         "beerId": 9,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_36_24_641794ab39354f2ab5a6cdc56e93eea7.jpeg",
         "dateFeedback": "18.09.2023"
     },
     {
         "id": 243,
         "feedbackText": "sdfasdf sdf sdfsd fsd fsdfsdfsdffffffffffffffffffffsdf sd sdfffffffffff",
         "rating": 0.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "BFG",
         "breweryId": 4,
         "beerId": 10,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_38_11_36999c7f7f316f72298ef8f1d31dbb47.jpeg",
         "dateFeedback": "16.03.2024"
     },
     {
         "id": 55,
         "feedbackText": "это лучшее пиво в мире",
         "rating": 6.00,
         "imageFeedback": null,
         "userName": "madbad",
         "breweryName": "Selfmade Brewery",
         "beerName": "BFG",
         "breweryId": 4,
         "beerId": 10,
         "imageUser": "http://109.201.96.70:8081/api/user/images/14_03_2024_17_55_32_news4.png",
         "imageBeer": "http://109.201.96.70:8081/api/beer/images/08_09_2023_06_38_11_36999c7f7f316f72298ef8f1d31dbb47.jpeg",
         "dateFeedback": "16.09.2023"
     }
   ]
 }),
 getters: {},
 actions: {
   async _FEEDBACK_LIST_MAIN(){
      const response = await axios.get(`${BASE_URL}/feedback/list/main`,{
         headers:{
            'Content-Type': "application/json"
         }
      })
      this.feedbackListMain = [...this.feedbackListMain, ...response.data]
   }
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useFeedbackStore, import.meta.hot))
}
