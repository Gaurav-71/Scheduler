<template>
  <div class="spinner-wrapper">
    <div class="spinner-container">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <h3>{{message}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
.spinner-wrapper {
  height: calc(100vh - 4.5rem);
  .spinner-container {
    .spinner {
      width: 80px;
      height: 80px;
      position: relative;
      margin: 120px auto 0 auto;
      .double-bounce1,
      .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: $primary;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-animation: sk-bounce 2s infinite ease-in-out;
        animation: sk-bounce 2s infinite ease-in-out;
      }
      .double-bounce2 {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
      }
    }
    h3 {
      margin: 20px auto;
      font-weight: lighter;
      color: grey;
    }
  }
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>