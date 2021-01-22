<template>
  <div class="contacts-list">
    <ul>
      <list-item v-for="user in users" :key="user.index" :contact="user" />
    </ul>
  </div>
</template>

<script>
const users = [
  {
    name: 'Шпиц',
    nickname: "Хитрый",
  },
  {
    name: 'Кира',
    nickname: "Банан",
  },
  {
    name: 'Даша',
    nickname: "Вредина",
  }
];

import ListItem from './ContactsListItem';

export default {
  name: 'contacts',
  data() {
    return {
      users: users,
    }
  },
  components: {
    ListItem,
  },
}
</script>

<style lang="scss" scoped>
.contacts-list ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>