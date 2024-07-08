import { defineStore, acceptHMRUpdate } from 'pinia'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    danger: { cssClass: 'danger', content: 'Ошибка', animateClass:'animate' },
    success: { cssClass: 'success', content: 'Успешно' , animateClass:'animate'},
    warning: { cssClass: 'warning', content: 'Внимание', animateClass:'animate' },
    info: { cssClass: 'info', content: 'Информация', animateClass:'animate' },
    currentNotification: { cssClass: '', content: '', animateClass:'' },
    isActive:false,
    delay:2000,
    type:''
  }),
  
  getters: {
    getState: (state) => {
      
      return state.isActive ? state.currentNotification : { cssClass: '', content: '', animateClass:'' };
    },
    getType:(state) => {
      return state.type
    }
  },
  actions: {
     setState(type) {
      if(this.isActive) return
      this.isActive = true
      this.currentNotification = this[type]
       setTimeout( () => {
        this.isActive = false
      }, this.delay)
    },
    openLayout(type){
      this.type = type
      setTimeout(() => {
        this.type = ''
      }, 2000);
    },
    closeLayout(){
      this.type = ''
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotificationsStore, import.meta.hot))
}
