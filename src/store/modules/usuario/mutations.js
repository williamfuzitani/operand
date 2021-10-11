export default {
  SET_USERS(state, payload) {
    state.usuarios = payload;
  },

  SET_USER(state, payload) {
    const { id } = payload;
    state.usuarios = [...state.usuarios.filter((user) => user.id !== id), payload];
  },

  SET_LOADING(state, { dataName, payload }) {
    state.status[dataName].loading = payload;
  },

  DELETE_USER(state, payload) {
    const { id } = payload;
    state.usuarios = [...state.usuarios.filter((user) => user.id !== id)];
  },
};
