<template>
  <div class="contentWrapper">
    <h1>Hello World</h1>
  </div>
</template>

<script setup></script>

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
