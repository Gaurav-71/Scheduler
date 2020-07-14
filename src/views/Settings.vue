<template>
  <div class="settings">
    <div class="heading-container">
      <img src="../assets/Settings/settings.svg" alt />
      <div class="heading">
        <h1>Settings</h1>
        <h4>Modify account details and manage your data & privacy</h4>
      </div>
    </div>
    <div class="line"></div>
    <div class="card">
        <div class="title">
            <img src="../assets/Settings/account.svg" alt="">
            <h3>Account Details</h3>
        </div>
        <div class="body">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push("/reset");
    }
  },
  created() {
    this.$store.state.sidebarCounter = 6;
    localStorage.setItem("currentRoute", this.$route.path);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
.settings {
  margin-top: 5rem;
  margin-left: 5rem;
  min-height: calc(100vh - 5rem);
  padding: 0 1rem;
  .heading-container {
    height: 100%;
    width: 100%;
      padding: .7rem 0 1rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 60px;
      margin-right: 0.5rem;
    }
    .heading {      
      h1,
      h4 {
        margin: 0.5rem;
        padding: 0;
        font-weight: lighter;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: gray;
    //background-image: $gradient;
    margin: 0 0 1rem 0;
  }
  .card{                 
      background: white;
      box-shadow: 0 0px 10px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;      
      border-radius: 0.8rem;
      .title{
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: $primary-light;
         // background-image: $gradient;
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
          img{
              width: 80px;
          }
          h3{
              margin:0.8rem;
              color: white;
          }

      }
  }
}
</style>