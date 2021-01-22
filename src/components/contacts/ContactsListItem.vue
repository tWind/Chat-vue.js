<template>
  <li class="contacts-list__item">{{ contact.name }} <b>{{ contact.nickname }}</b></li>
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
  padding: 5px 10px;
  margin-bottom: 5px;
  font-family: Tahoma, Verdana, sans-serif;
  border: 1px #999999 solid;
  border-radius: 3px;
  background-color: #e5e5e5;
  transition: background-color .3s ease;
  
  &:hover {
    background-color: #bebebe;
    cursor: pointer;
  }
}
</style>