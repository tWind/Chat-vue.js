export default {
  namespaced: true,
  state: {
    messages: [],
  },
  mutations: {
    newMessage(state, message) {
      state.messages = [...state.messages, message];
    },
  },
};
