<template>
  <li class="contacts-list__item">
    <p>{{ contact.name }}</p>
  </li>
</template>

<script>
export default {
  name: 'ContactsListItem',
  props: {
    contact: {
      type: Object,
      default() {
        return {};
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts-list__item {
  display: flex;
  align-items: center;
  flex-basis: 80px;
  padding: 5px 20px;
  border-width: 0;
  border-color: #999999;
  border-style: solid;
  background-color: #e5e5e5;
  transition: background-color .3s ease;

  &:not(:last-child) {
    border-bottom-width: 1px;
  }
  
  &:hover {
    background-color: #bebebe;
    cursor: pointer;
  }
}
</style>