<template>
  <div class="chat-user">
    <div class="chat-user__avatar"><span>{{ userAvatar }}</span></div>
    <div class="chat-user__info">
      {{ currentUser.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatUser',
  computed: {
    ...mapGetters('users', ['currentUser']),
    userAvatar() {
      return this.currentUser.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
    },
  }
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
  display: flex;
  align-items: center; justify-content: center;
  background-color: #e5e5e5;
  margin-right: 1rem;

  span {
    font-weight: bold;
    font-size: 22px;
  }
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