import api from '@/common/api';

export default {
  namespaced: true,
  state: {
    users: [],
    currentUser: {},
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
      console.log(user);
    },
  },
  actions: {
    async loadUsers(store) {
      const users = await api.get('https://jsonplaceholder.typicode.com/users');
      store.commit('setUsers', users);
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    currentUser(state) {
      if(Object.keys(state.currentUser).length === 0 && state.currentUser.constructor === Object) {
        return false;
      }
      return state.currentUser;
    }
  },
};
