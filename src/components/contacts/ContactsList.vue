<template>
  <div class="contacts-list">
    <ul>
      <list-item v-for="contact in contacts" :key="contact.index" :contact="contact" />
    </ul>
  </div>
</template>

<script>
import ListItem from './ContactsListItem';

export default {
  name: 'contacts',
  props: {
    contacts: {
      default: () => [],
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