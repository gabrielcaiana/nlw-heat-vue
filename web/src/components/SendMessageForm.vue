<template>
  <div class="sendMessageFormWrapper">
    <button @click="logout" class="signOutButton">
      <i class="fas fa-sign-out-alt"></i>
    </button>
    <header class="userInformation">
      <div class="userImage">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEwLQ0IqyfUVoiusLx97FNW4Iyi5a95h7DQ&usqp=CAU"
          alt="Gabriel Caiana"
        />
      </div>
      <strong class="userName"> Gabriel Caiana </strong>
      <span class="userGithub">
        <i class="fab fa-github"></i>
        gabrielcaiana
      </span>
    </header>

    <form @submit.prevent="" class="sendMessageForm">
      <label for="message">Mensagem</label>
      <textarea
        name="message"
        id="message"
        placeholder="Qual sua expectativa para o evento?"
      ></textarea>
      <button type="submit">Enviar mensagem</button>
    </form>
  </div>
</template>

<script>
import {useStore } from "vuex"
export default {
  setup() {
    const store = useStore()

    const logout = () => {
      store.dispatch("authentication/getLogout")
    }

    return {
      logout
    }
  }
};
</script>

<style lang="scss" scoped>
.sendMessageFormWrapper {
  background: #1b1b1f;
  padding: 24px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  .signOutButton {
    background: transparent;
    border: 0;
    color: #c4c4cc;
    position: absolute;
    left: 24px;
    top: 24px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    i {
      font-size: 24px;
    }
  }

  .userInformation {
    display: flex;
    flex-direction: column;
    align-items: center;

    .userImage {
      padding: 3px;
      background: linear-gradient(100deg, #ff008e 0.48%, #ffcd1e 100%);
      border-radius: 50%;
      line-height: 0;

      img {
        width: 94px;
        height: 94px;
        border-radius: 50%;
        border: 6px solid #121214;
      }
    }

    .userName {
      font-size: 24px;
      line-height: 30px;
      margin-top: 16px;
    }

    .userGithub {
      display: flex;
      align-items: center;
      margin-top: 8px;
      color: #c4c4cc;

      i {
        margin-right: 8px;
        font-size: 24px;
      }
    }
  }

  .sendMessageForm {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-top: 48px;
    background: #202024;

    label {
      padding: 18px 24px;
      font-size: 20px;
      background: #29292e;
      font-weight: bold;
      text-align: left;
    }

    textarea {
      background: transparent;
      border: 0;
      padding: 24px;
      resize: none;
      height: 160px;
      color: #e1e1e6;
      font-size: 16px;
      line-height: 24px;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #8d8d99;
      }
    }

    button {
      align-self: flex-end;
      background: #ff008e;
      border: 0;
      margin: 24px;
      padding: 0 32px;
      height: 40px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 300ms all ease-in-out;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
}
</style>
