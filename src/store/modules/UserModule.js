import axiosClient from "../../axios.js";
const user = {
  namespaced: true,
  state: () => ({
    user: [],
    token: sessionStorage.getItem("TOKEN"),
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getToken(state) {
      return state.token;
    },
  },
  actions: {
    register({ commit }, formData) {
      console.log(formData);
      return axiosClient.post("/register", formData).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, formData) {
      return axiosClient.post("/login", formData).then(({ data }) => {
        commit("setToken", data.token);
        commit("setUser", data.user);
        return data;
      });
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
      if (data) {
        sessionStorage.setItem("TOKEN", data);
      } else {
        sessionStorage.removeItem("TOKEN");
      }
    },
    setUser(state, data) {
      state.user = data;
    },
    logout(state) {
      state.token = null;
      sessionStorage.removeItem("TOKEN");
    },
  },
};
export default user;
