<template>
  <div class="contentWrapper">
    <MessageList />
    <LoginBox v-if="!getToken" />
    <SendMessageForm v-else />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import MessageList from '@/components/MessageList.vue';
import LoginBox from '@/components/LoginBox.vue';
import SendMessageForm from '../components/SendMessageForm.vue';
export default {
  components: {
    MessageList,
    LoginBox,
    SendMessageForm,
  },
  setup() {
    const store = useStore();

    const getToken = store.getters['authentication/getToken'];

    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWihoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, '', urlWihoutCode);

      store.dispatch("authentication/getAuth", githubCode)
    }

    return {
      getToken
    };
  },
};
</script>

<style lang="scss" scoped>
.contentWrapper {
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;
}

.contentSigned::before {
  content: '';
  height: 100vh;
  width: 420px;
  background: url('../assets/background.svg') no-repeat;
  background-size: cover;
  position: absolute;
  right: -200px;
  top: 0;
}
</style>
