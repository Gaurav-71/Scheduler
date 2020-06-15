<template>
  <div class="type">
    <div class="card">
      <h1>Manual or Automated ?</h1>
      <div class="child-container">
        <div class="child-card">
          <div class="title">
            <img src="../../assets/Create/Type/automation.svg" alt="automated" />
            <h3>Automated</h3>
          </div>
          <p>Create a new timetable for all semesters automatically without any hassle.</p>
          <button @click="route(1)">Create Automatically</button>
        </div>
        <div class="child-card">
          <div class="title">
            <img src="../../assets/Create/Type/manual.svg" alt="manual" />
            <h3>Manual</h3>
          </div>
          <p>Create a new timetable for a particular semester manually using advanced drag and drop features.</p>
          <button @click="route(2)">Create Manually</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    route(page) {
      if (page == 1) {        
        this.$router.push("cycle");
      }
      else if(page==2){
        this.$router.push("class");
      }
    }
  },
  created() {
    this.$store.state.progressCounter = 1;
    this.$store.state.isManual = false;
    this.$store.state.isAutomated = false;
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors";
@import "../../scss/mediaQuery";

.type {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    text-align: center;
    width: 65%;
    height: 22rem;
    background: white;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @include ipad-portrait {
      margin-bottom: 2rem;
      height: 36.5rem;
    }
    @include ipad {
      margin-bottom: 2rem;
      height: 36.5rem;
    }
    img {
      width: 65px;
      height: 65px;
    }
    h1 {
      background-image: $gradient;
      color: white;
      padding: 1.5rem;
      margin: 0;
      font-weight: lighter;
    }
    .child-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .child-card {
        width: 20rem;
        height: calc(12rem + 5px);
        border: 1px solid grey;
        border-radius: 0.5rem;
        margin: 2rem 1rem;
        @include ipad-portrait {
          margin: 1rem;
        }
        @include ipad {
          margin: 1rem;
        }
        overflow: hidden;
        img {
          width: 55px;
          height: 55px;
        }
        .title {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h3 {
          margin: 0.8rem;
          color: $primary;
        }
        p {
          font-weight: lighter;
        }
        button {
          width: 100%;
          padding: 0.89rem;
          border: none;
          background-image: $gradient;
          cursor: pointer;
          color: white;
          font-size: 0.9rem;
        }
        button:active {
          transform: scale(1.01);
        }
        button:focus {
          outline: none;
        }
      }
    }
  }
}
</style>

