export default {
  namespaced: true,
  state: {
    cardModal: {
      show: false,
      type: "",
      item: null,
      index: null,
      column: "",
    },
  },
  getters: {
    getShow: (state) => state.cardModal.show,
  },
  mutations: {
    TOGGLE_CARD_MODAL(state, obj) {
      if (obj.show) {
        state.cardModal.type = obj.type ? obj.type : "";
        state.cardModal.index = obj.index || obj.index===0 ? obj.index : null;
        state.cardModal.column = obj.column ? obj.column : "";
        state.cardModal.item = obj.item ? obj.item : null;
      }
      state.cardModal.show = obj.show;
    },
  },
  actions: {
    toggleCardModal({ commit }, obj) {
      commit("TOGGLE_CARD_MODAL", obj);
    },
  },
};
