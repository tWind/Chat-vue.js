<template>
  <base-layout>
    <div class="contacts-list__container">
      <contacts-list :contacts="getUsers" />
    </div>

    <div class="chat__container">
      <chat />
    </div>
  </base-layout>
</template>

<script>
import { mapGetters } from 'vuex';

import BaseLayout from '@/layouts/BaseLayout';
import ContactsList from '@/components/contacts/ContactsList';
import Chat from '@/components/chat/Chat';

export default {
  name: 'ChatView',
  components: {
    BaseLayout,
    ContactsList,
    Chat,
  },
  computed: {
    ...mapGetters('users', ['getUsers']),
  },
  mounted() {
    // debugger; // eslint-disable-line
  }
}
</script>

<style lang="scss" scoped>
.contacts-list__container {
  flex-basis: 30%;
  border-color: #e5e5e5;
  border-style: solid;
  border-width: 0 0 1px 1px;
}

.chat__container {
  flex-basis: 70%;
  padding-left: 30px;
  border: 1px #e5e5e5 solid;
}
</style>