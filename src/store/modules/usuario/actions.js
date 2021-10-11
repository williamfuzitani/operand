export default {
  create({ commit }, payload) {
    commit("SET_LOADING", { dataName: "usuario", payload: true });
    return new Promise((resolve) =>
      setTimeout(() => {
        commit("SET_USER", payload);
        commit("SET_LOADING", { dataName: "usuario", payload: false });
        resolve(payload);
      }, 2000)
    );
  },

  update({ commit }, payload) {
    commit("SET_LOADING", { dataName: "usuario", payload: true });
    return new Promise((resolve) =>
      setTimeout(() => {
        commit("SET_USER", payload);
        commit("SET_LOADING", { dataName: "usuario", payload: false });
        resolve(payload);
      }, 2000)
    );
  },

  delete({ commit }, payload) {
    commit("SET_LOADING", { dataName: "delete", payload: true });

    return new Promise((resolve) =>
      setTimeout(() => {
        commit("DELETE_USER", payload);
        commit("SET_LOADING", { dataName: "delete", payload: false });
        resolve(payload);
      }, 2000)
    );
  },
};
