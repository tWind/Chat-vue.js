<template>
  <div class="chat">
    <div class="chat__header">
      <chat-user />
    </div>
    <div class="chat__message">
      <chat-message />
    </div>
    <div class="chat__conversation">
      <chat-conversation />
    </div>
  </div>
</template>

<script>
import ChatUser from './ChatUser';
import ChatMessage from './ChatMessage';
import ChatConversation from './ChatConversation';

export default {
  name: 'Chat',
  components: {
    ChatUser,
    ChatMessage,
    ChatConversation,
  },
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  flex-direction: column;
}

.chat__header {
  flex-basis: 60px;
  padding: 1rem 0;
}

.chat__message {
  padding-right: 2rem;
}

.chat__conversation {
  padding-right: 2rem;
}
</style>