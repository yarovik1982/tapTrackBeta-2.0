import { defineStore } from "pinia";


export const useForms = defineStore("forms", {
  state: () => ({
    formType: null,
  }),
  getters: {
    getFormType() {
      return this.formType;
    },
  },
  actions: {
    setFormType(type) {
      this.formType = type;
    },
    openForm(type) {
      switch (type) {
        case "login":
          return FormLogin;
        case "register":
          return FormRegister;
        case "writeUs":
          return FormWriteUs;
        case "editProfile":
          return FormEditProfile;
        case "addPlace":
          return FormAddPlace;
        case "addBrewery":
          return FormAddBrewery;
        case "addAvatar":
          return FormAddAvatar;
      }
    },
  },
});
