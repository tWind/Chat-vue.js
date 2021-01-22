<template>
  <div class="chat-conversation">
    <chat-reply />
    <chat-reply />
  </div>
</template>

<script>
import ChatReply from './ChatReply';

export default {
  name: 'ChatConversation',
  components: {
    ChatReply,
  }
}
</script>

<style lang="scss" scoped>
.chat-conversation {
  padding: 1rem 0;
}
</style>