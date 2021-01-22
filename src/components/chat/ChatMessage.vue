<template>
  <div class="chat-message">
    <div class="chat-message__text"><textarea name="" id="" cols="30" rows="5"></textarea></div>
    <div class="chat-message__submit">
      <base-button @click="sendMessage()">Отправить</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'ChatMessage',
  components: {
    BaseButton,
  },
  methods: {
    sendMessage() {
      console.log('Message sent!');
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-message {
  textarea {
    width: 100%;
    resize: none;
    padding: 0 1rem;
    outline: 0;
    border: 1px #969696 solid;
  }
}

.chat-message__submit {
  text-align: right;
}
</style>