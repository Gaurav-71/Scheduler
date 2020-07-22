<template>
  <div class="settings">
    <Heading :obj="headingObj" />
    <div class="card-container">
      <div class="card">
        <div class="title">
          <img src="../assets/Settings/account.svg" alt="settings" />
          <h3>Account Details</h3>
        </div>
        <div class="body">
          <div class="container">
            <div class="flex">
              <img src="../assets/Settings/name.svg" alt="name" />
              <h3>User Name</h3>
            </div>
            <div v-if="isEditingName" class="flex">
              <input type="text" v-model="currentUser.name" placeholder="Enter Name" />
              <img
                @click="isEditingName=false"
                src="../assets/Common/save.svg"
                alt="save"
                style="margin-left: auto;width: 30px;cursor: pointer;"
                title="Save changes"
              />
              <img
                @click="isEditingName=false"
                src="../assets/Common/cancel.svg"
                alt="cancel"
                style="width: 30px;cursor: pointer;"
                title="Cancel edit"
              />
            </div>
            <div class="flex" v-else>
              <div class="box">{{currentUser.name}}</div>
              <img
                src="../assets/Common/edit.svg"
                alt="edit"
                title="Edit user name"
                style="margin-left: auto;width:39px;cursor:pointer;"
                @click="isEditingName=true"
              />
            </div>
          </div>
          <div class="line" style="margin: 0.5rem 0 1rem 0;"></div>
          <div class="container">
            <div class="flex">
              <img src="../assets/Settings/gmail.svg" alt="email" />
              <h3>Email</h3>
            </div>
            <div style="margin: 0.3rem 0;">{{currentUser.email}}</div>
          </div>
          <div class="line"></div>
          <div class="btn-container">
            <div class="btn" @click="route">Reset Password</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="title">
          <img src="../assets/Settings/data.svg" alt />
          <h3>Data Collected</h3>
        </div>
        <div class="body">lol</div>
      </div>
      <div class="card">
        <div class="title">
          <img src="../assets/Settings/privacy.svg" alt />
          <h3>User Privacy</h3>
        </div>
        <div class="body">
          <p
            style="line-height: 1.15;"
          >Privacy is built in from the beginning. Our products and features include innovative privacy technologies and techniques designed to minimise how much of your data we — or anyone else — can access. And powerful security features help prevent anyone except you from being able to access your information.</p>
          <div class="line" style="margin: 1rem 0;"></div>
          <div class="btn-container">
            <div class="btn" @click="route">Delete Account</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/Design/Heading";
export default {
  components: {
    Heading
  },
  data() {
    return {
      headingObj: {
        h1: "Settings",
        h4: "Modify account details and manage your data & privacy",
        src: "settings.svg"
      },
      name: this.$store.state.currentUser.name,
      email: this.$store.state.currentUser.email,
      isEditingName: false
    };
  },
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
  margin-top: 4.5rem;
  margin-left: 5rem;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .line {
      width: 100%;
      height: 1px;
      background: gray;
      margin: 0 0 1rem 0;
    }
    .card {
      width: 23rem;
      height: 23rem;
      margin: 1.5rem;
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      display: flex;
      flex-direction: column;
      .title {
        widows: 100%;
        height: 3rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: $gradient;
        img {
          width: 50px;
        }
        h3 {
          color: white;
          margin: 0 1rem;
        }
      }
      .body {
        padding: 1rem;
        .container {
          h3 {
            margin: 0;
            color: black;
            font-weight: lighter;
          }
          input,
          .box {
            background: rgba(orange, 0.3);
            border: 1px solid grey;
            padding: 12px 15px;
            margin: 10px 0;
            width: 13rem;
          }
          .box {
            width: 15rem;
            background: rgba($primary, 0.3);
            font-size: small;
          }
          .flex {
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: black;
            img {
              width: 32px;
              margin: 0 0.5rem 0 0;
            }
          }
        }
        .btn-container {
          display: flex;
          justify-content: center;
          align-items: center;
          .btn {
            margin: 0.2rem;
            text-align: center;
            border-radius: 20px;
            border: 1px solid $primary-light;
            background-color: $primary-light;
            background-image: $gradient;
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;
            padding: 12px 45px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 80ms ease-in;
            cursor: pointer;
          }
          .btn:active {
            transform: scale(0.95);
          }
          .btn:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>