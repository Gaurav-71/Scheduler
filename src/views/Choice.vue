<template>
  <div class="choice">
    <Header />
    <h1>What would you like to schedule today ?</h1>
    <div class="container">
      <div class="card">
        <div class="image-1"></div>
        <div class="description">
          <h3>Timetable</h3>
          <p>Create a new timetable for any semester automatically without any hassle.</p>
        </div>
        <a @click="route(1)">Schedule Timetable</a>
      </div>
      <div class="card">
        <div class="image-2"></div>
        <div class="description">
          <h3>Internals</h3>
          <p>Create a new timetable for internals and send it via sms to all students without any hassle.</p>
        </div>
        <a @click="route(2)">Schedule Internals</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Navigation/Header.vue";

export default {
  name: "Choice",
  components: {
    Header
  },
  methods: {
    route(page) {
      if (page == 1) {
        this.$router.push("/landing/login/choice/timetable/home");
      }
    }
  },
  created(){
    localStorage.setItem("currentRoute",this.$route.path);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.choice {
  padding-top: 5.3rem;
  h1 {
    text-align: center;
    color: $primary-light;
    font-size: 2.5rem;
    font-weight: 400;
    margin: 1.2rem;
    text-shadow: 1px 1px 1px black;
  }
  .container {
    height: 100vh;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 2rem;
    .card {
      height: 24rem;
      width: 18rem;
      background: white;
      margin: 2rem;
      margin-top: 0;
      padding: 0;
      border-radius: 0.5rem;
      display: grid;
      grid-template-rows: 50% 37% 13%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .image-1 {
        background-image: url("../assets/Choice/timetable.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 12rem;
        margin-top: 1rem;
      }
      .image-2 {
        background-image: url("../assets/Choice/sms.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 18rem;
        margin-top: 2.5rem;
      }
      .description {
        text-align: center;
        padding: 1.3rem;
        padding-top: 0.5rem;
        h3 {
          color: $primary-dark;
          font-size: 1.4rem;
          margin-bottom: 0;
        }
        p {
          font-size: 0.9rem;
          margin-top: 0.7rem;
        }
      }
      a {
        background-image: $gradient;
        height: 100%;
        width: 100%;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
        text-shadow: 1px 1px 1px black;
      }
    }
  }
}
</style>