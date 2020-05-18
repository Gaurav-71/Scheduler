<template>
  <header>
    <img src="../assets/Header/Logo.png" class="logo" alt="logo" />
    <a class="logout">
      <!-- <span>Logout</span> -->
      <img src="../assets/Header/exit.svg" alt="exit" />
    </a>
  </header>
</template>

<style lang="scss" scoped>
@import "../scss/colors";
header {
  position: fixed;
  height: 4.5rem;
  width: 100vw;  
  background: $primary;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 14rem;
  }
  .logout {
    position: fixed;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color:$background;
    img {
      width: 35px;
      border: 2px solid $background;
      border-radius: 50%;
      box-shadow: 0px 0 5px black;
    }
  }
}
</style>
