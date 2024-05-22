import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = 'http://109.201.96.70:8081/api';
const api_url = '/user/create';
const headers = {
   'Content-Type': 'application/json',
}

export const useUserCreate = defineStore('userCreate', {
  state: () => ({
    // Здесь можно определить состояние, если оно необходимо
  }),
  actions: {
    async createUser(data) {
      try {
        const response = await axios.post(`${BASE_URL}${api_url}`, data, headers);
        if (response.status === 200) {
          return response.data; // Возвращаем данные ответа
        }
      } catch (error) {
        return error; // Возвращаем объект ошибки
      }
    }
  }
});
