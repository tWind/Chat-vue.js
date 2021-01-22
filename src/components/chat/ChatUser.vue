<template>
  <div class="chat-user">
    <div class="chat-user__avatar"></div>
    <div class="chat-user__info">
      <p>Имя</p>
      <p>Фамилия</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatUser',
  }
</script>

<style lang="scss" scoped>
.chat-user {
  display: flex;
  align-items: center;
}

.chat-user__avatar {
  width: 50px; height: 50px;
  border-radius: 50%;
  background-color: #e5e5e5;
  margin-right: 1rem;
}

.chat-user__info {
  p {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>