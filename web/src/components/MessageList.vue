<template>
  <div class="messageListWrapper">
    <img src="../assets/logo.svg" alt="NLW Heat Vue" />

    <ul class="messageList">
      <li v-for="message in messages" :key="message.id" class="message">
        <p class="messageContent">
          {{ message.text }}
        </p>
        <div class="messageUser">
          <div class="userImage">
            <img :src="message.user.avatar_url" :alt="message.user.name" />
          </div>
          <span>{{ message.user.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

import { useStore } from 'vuex';
import { computed, watch, ref } from 'vue';
export default {
  setup() {
    const store = useStore();
    store.dispatch('messages/getMessages');

    let messages = computed(() => store.getters['messages/getMessages']);
  
    const messageQueue = ref([]);

    const socket = io('http://localhost:4000');

    socket.on('new_message', (newMessage) => {
      messageQueue.value.push(newMessage);
    });

    watch(() => [...messageQueue.value],(currentValue) => {
        if(currentValue.length > 0) {
          store.dispatch('messages/getMessages');
        }
      }
    );

    return {
      messages,
    };
  },
};
</script>

<style lang="scss" scoped>
.messageListWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }

  .messageList {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    flex: 1;

    .message {
      max-width: 440px;

      &:nth-child(2) {
        margin-left: 80px;
      }

      .messageContent {
        font-size: 20px;
        line-height: 28px;
      }

      .messageUser {
        margin-top: 16px;
        display: flex;
        align-items: center;

        .userImage {
          padding: 2px;
          background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
          border-radius: 50%;
          line-height: 0;

          img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 4px solid #121214;
          }
        }

        span {
          font-size: 16px;
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
