<template>
  <div class="type">
    <div class="card">
      <h1>Manual or Automated ?</h1>
      <div class="child-container">
        <div class="child-card grow">
          <div class="title">
            <img src="../../assets/Create/Type/automation.svg" alt="automated" />
            <h3>Automated</h3>
          </div>
          <p>Create a new timetable for all semesters automatically without any hassle.</p>
          <button @click="route(1)">Create Automatically</button>
        </div>
        <div class="child-card grow">
          <div class="title">
            <img src="../../assets/Create/Type/manual.svg" alt="manual" />
            <h3>Manual</h3>
          </div>
          <p>Create a new timetable for a particular semester manually using advanced drag and drop features.</p>
          <div class="create-manual">
            <div class="one" @click="route(2)">Create One</div>
            <div @click="route(3)">Create All</div>
          </div>
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
        this.$store.state.createType = 1;
        this.$router.push("/timetable/create/cycle");
      } else if (page == 3) {
        this.$store.state.createType = 2;
        this.$router.push("/timetable/create/cycle");
      }
    }
  },
  created() {
    this.$store.state.sidebarCounter = 2;
    this.$store.state.progressCounter = 1;
    localStorage.setItem("currentRoute", this.$route.path);
    this.$store.state.createRouteTracker = localStorage.getItem(
      "createRouteTracker"
    );
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/create-cards";
@import "../../scss/mediaQuery";
@import "../../scss/custom-animations";

.type {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  .card {
    text-align: center;
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
        button,
        .create-manual {
          width: 100%;
          padding: 0.89rem;
          cursor: pointer;
          color: white;
          font-size: 0.9rem;
          transition: all 0.2s ease-in-out;
        }
        button {
          background-image: $gradient;
          border: none;
        }        
        button:hover{
          background-image: $gradient-inverted;
        }
        button:focus {
          outline: none;
        }
        .create-manual {
          padding: 0;
          display: grid;
          grid-template-columns: 50% 50%;
          background-image: $gradient;
          div {
            width: 100%;
            padding: 0.89rem 0;
            background-image: $gradient-inverted;
            border-left: 1.35px solid white;
            transition: all 0.2s ease-in-out;
          }
          div:hover{
            background-image: $gradient;
          }
          .one {        
            background-image: $gradient;    
            border-left: none;
          }
          .one:hover {
            background-image: $gradient-inverted;
          }          
        }
      }
    }
  }
}
</style>

