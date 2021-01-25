<template>
  <div class="chat-conversation">
    <div v-if="messagesList(currentUser.id).length === 0" class="chat-conversation__empty">
      <p>Ваша беседа ещё не началась. Напишите что-нибудь.</p>
    </div>
    <div v-else class="chat-conversation__replies">
      <chat-reply v-for="message in messagesList(currentUser.id)" :key="message.index" :message="message" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ChatReply from './ChatReply';

export default {
  name: 'ChatConversation',
  components: {
    ChatReply,
  },
  computed: {
    ...mapGetters('messages', ['messagesList']),
    ...mapGetters('users', ['currentUser']),
  },
}
</script>

<style lang="scss" scoped>
.chat-conversation {
  padding: 1rem 0;
}

.chat-conversation__replies {
  display: flex;
  flex-direction: column-reverse;
}
</style>