import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,

  state: {
    usuarios: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
      },
      {
        id: 2,
        name: "Júlio Barros",
        email: "juliobarros@email.com",
      },
      {
        id: 3,
        name: "Lara Martins",
        email: "laramartins@email.com",
      },
      {
        id: 4,
        name: "Gustavo Barbosa",
        email: "gustavobarbosa@email.com",
      },
    ],

    status: {
      usuarios: {
        loading: false,
      },

      usuario: {
        loading: false,
      },

      create: {
        loading: false,
      },

      edit: {
        loading: false,
      },

      delete: {
        loading: false,
      },
    },
  },

  actions,
  mutations,
  getters,
};
