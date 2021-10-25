<template>
  <div class="messageListWrapper">
    <img src="../assets/logo.svg" alt="NLW Heat Vue" />

    <ul class="messageList">
      <li class="message">
        <p class="messageContent">
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="messageUser">
          <div class="userImage">
            <img
              src="https://www.pinclipart.com/picdir/middle/93-935675_youtube-computer-icons-cartoon-download-clip-art-strong.png"
              alt="Dianne Russell"
            />
          </div>
          <span>Gabriel Caiana</span>
        </div>
      </li>

      <li class="message">
        <p class="messageContent">
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="messageUser">
          <div class="userImage">
            <img
              src="https://www.pinclipart.com/picdir/middle/93-935675_youtube-computer-icons-cartoon-download-clip-art-strong.png"
              alt="Dianne Russell"
            />
          </div>
          <span>Gabriel Caiana</span>
        </div>
      </li>

      <li class="message">
        <p class="messageContent">
          Não vejo a hora de começar esse evento, com certeza vai ser o melhor
          de todos os tempos, vamooo pra cima! 🔥🔥
        </p>
        <div class="messageUser">
          <div class="userImage">
            <img
              src="https://www.pinclipart.com/picdir/middle/93-935675_youtube-computer-icons-cartoon-download-clip-art-strong.png"
              alt="Dianne Russell"
            />
          </div>
          <span>Gabriel Caiana</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
