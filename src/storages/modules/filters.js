const state = {
  country: undefined,
  score: undefined,
};

const getters = {
  getCountry: (state) => state.country,
  getScore: (state) => state.score,
};

const mutations = {
  country(state, value) {
    state.country = value;
  },
  score(state, value) {
    state.score = value;
  },
};

const actions = {
  setCountry: ({ commit }, payload) => commit("country", payload),
  setScore: ({ commit }, payload) => commit("score", payload),
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
