<template>
  <div class="chat-message">
    <div class="chat-message__text">
      <input ref="textMessage" name="message" id="message" placeholder="Введите сообщение" />
    </div>
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
.chat-message__text {
  margin-bottom: .5rem;
  input {
    width: 100%;
    padding: 1rem;
    outline: 0;
    border: 1px #969696 solid;
    border-radius: 3px;
  }
}

.chat-message__submit {
  text-align: right;
}
</style>