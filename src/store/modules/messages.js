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
  getters: {
    messagesList: state => id => {
      return state.messages.filter(message => message.userId === id);
    },
  }
};
