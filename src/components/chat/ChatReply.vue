<template>
  <div class="chat-reply">
    <p>{{ message.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'ChatReply',
    props: {
      message: {
        default() {
          return {};
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.chat-reply {
  background-color: #e5e5e5;
  border-radius: 3px;
  padding: .25rem 2rem;
  margin: .25rem 0;
}
</style>