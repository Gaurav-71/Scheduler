<template>
  <header>
    <img src="../../assets/Header/Logo.png" class="logo" alt="logo" />
    <a v-if="$store.state.isLoggedIn" @click="logOut" class="signout">
      <img src="../../assets/Header/signout.svg" alt="signout" />
      <span>Sign out</span>
    </a>
  </header>
</template>
<script>
/* eslint-disable */
export default {
  name: "Header",
  methods: {
    logOut() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$store.state.isLoggedIn = false;
          this.$router.push("/login");
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  created() {
    // important dont remove
    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$store.state.isLoggedIn = true;
    }
  },
};
</script>
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
  .signout {
    position: fixed;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
    }
    span {
      display: none;
    }
  }
  .signout:hover {
    background: rgba($primary-light, 0.75);
    padding: 0.8rem 1rem;
    border-radius: 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    span {
      display: block;
      margin-left: 0.7rem;
      text-shadow: 1px 0.5px 1px black;
    }
  }
  @media print {
    display: none;
    margin: 0;
    padding: 0;
  }
}
</style>
