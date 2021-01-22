<template>
  <div id="app">
    <div class="wrapper">
      <contacts-list />
    </div>
  </div>
</template>

<script>
import ContactsList from '@/components/contacts/ContactsList.vue';

export default {
  name: 'App',
  components: {
    ContactsList,
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  justify-content: center;
}
.wrapper {
  flex-basis: 80%;
  padding: 30px 0;
}
</style>
