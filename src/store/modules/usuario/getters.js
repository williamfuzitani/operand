export default {
  getById: (state) => (id) => {
    return state.usuarios.find((user) => user.id === id);
  },
};
