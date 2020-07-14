<template>
  <div class="landing">
    <Header />
    <h1>Schedule timetables and exams the modern way</h1>
    <h5>The scheduler is a smart web solution which helps in scheduling timetables and exams</h5>
    <h6>Made by Aravind Shreyas, Dheeraj Bhat, Divya, Gaurav v</h6>
    <button @click="route">Login</button>
    <footer>
      <img src="../assets/Landing/college.png" alt="college" />
    </footer>
  </div>
</template>

<script>
import Header from "../components/Navigation/Header.vue";

export default {
  name: "Landing",
  components: {
    Header
  },
  methods: {
    route() {
      this.$router.push("/login");
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$router.push("/choice");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.landing {
  text-align: center;
  margin-top: 7rem;
  height: 83vh;
  overflow: hidden;
  h1 {
    color: $primary-light;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 1.3rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }
  h5,
  h6 {
    margin-block-start: 0;
    margin-block-end: 0;
    font-weight: 100;
    margin-bottom: 1rem;
  }
  button {
    margin-top: 1rem;
    border-radius: 20px;
    border: 1px solid $primary-light;
    background-color: $primary-light;
    background-image: $gradient;
    color: #ffffff;
    font-size: 14px;
    font-weight: 100;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in;
  }
  button:active {
    transform: scale(0.95);
  }
  button:focus {
    outline: none;
  }
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    img {
      width: 100vw;
    }
  }
}
</style>