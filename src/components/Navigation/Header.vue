<template>
  <header>
    <img src="../../assets/Header/Logo.png" class="logo" alt="logo" />
    <a class="logout">
      <img src="../../assets/Header/exit.svg" alt="exit" />
      <span>Logout</span>
    </a>
  </header>
</template>

<style lang="scss" scoped>
@import "../../scss/colors";

header {      
  position: fixed;  
  height: 4.5rem;
  width: 100vw;  
  background-image: $gradient;
  z-index: 101;
  top: 0;
  left: 0;
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
    color: white;
    cursor: pointer;    
    img {
      width: 35px;
      border: 2px solid $background;
      border-radius: 50%;
      box-shadow: 0px 0 5px black;            
    }
    span {
      display: none;      
    }
  }
  .logout:hover {      
    span {
      display: block;
      margin-left: 0.7rem;
      text-shadow: 1px 0.5px 1px black;
    }
  }  
}
</style>
