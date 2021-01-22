import api from '@/common/api';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async loadUsers(store) {
      const { data: users } = await api.get('https://jsonplaceholder.typicode.com/users');
      store.commit('setUsers', users);
    },
  },
};
