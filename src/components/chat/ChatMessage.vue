<template>
  <div class="chat-message">
    <div class="chat-message__text">
      <div class="chat-message__input"
           contenteditable="true" ref="textMessage"
           @keyup.enter.exact="sendMessage"></div>
    </div>
    <div class="chat-message__submit">
      <base-button @click="sendMessage()">Отправить</base-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'ChatMessage',
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters('users', ['currentUser']),
  },
  methods: {
    ...mapMutations('messages', ['newMessage']),
    sendMessage() {
      const text = this.$refs.textMessage.textContent;
      this.$refs.textMessage.textContent = '';

      if(text !== '') {
        let message = {
          text: text,
          userId: this.currentUser.id,
        };

        this.newMessage(message);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-message__text {
  margin-bottom: .5rem;
}

.chat-message__input {
  padding: 1rem;
  outline: 0;
  border: 1px #969696 solid;
  border-radius: 3px;
}

.chat-message__submit {
  text-align: right;
}
</style>