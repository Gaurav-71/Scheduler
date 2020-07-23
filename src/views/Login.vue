<template>
  <div class="login">
    <Header />
    <div class="container" :class="{'right-panel-active':shiftView}">
      <div class="form-container sign-up-container">
        <form @submit.prevent="signUp" autocomplete="off">
          <img src="../assets/Login/authorization.svg" alt="signin" style="width: 3rem;" />
          <h1 style="margin: 1rem;">Create Account</h1>
          <div v-if="$store.state.isLoggingIn" class="form-fields">
            <input v-model="name" type="text" placeholder="Name" class="name" />
            <input v-model="email" type="email" placeholder="Email" class="email" />
            <input v-model="password" type="password" placeholder="Password" class="password" />
            <input
              v-model="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              class="confirm-password"
            />
            <button type="button" @click="signUp">Sign Up</button>
          </div>
          <Loading :message="'Verifying and creating new account'" v-else />
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="signIn" autocomplete="on">
          <img src="../assets/Login/login.svg" alt="signin" style="width: 4.5rem;" />
          <h1 style="margin: 1rem;">Sign in</h1>
          <div v-if="$store.state.isLoggingIn" class="form-fields">
            <input v-model="email" type="email" placeholder="Email" class="email" autocomplete="on" />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="password"
              autocomplete="on"
            />
            <button type="button" @click="signIn">Sign In</button>
            <router-link to="/reset" class="forgot-pass">Forgot your password?</router-link>
          </div>
          <Loading :message="'Verifying User Credentials'" v-else />
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your credentials</p>
            <button class="ghost" @click="shiftView=false">Sign In</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello!</h1>
            <p>Enter your details and start your journey with us</p>
            <button class="ghost" @click="shiftView=true">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header.vue";
import Error from "../components/Modals/Error.vue";
import Loading from "../components/Loading/Circle.vue";

export default {
  name: "Login",
  components: {
    Header,
    Error,
    Loading
  },
  data() {
    return {
      shiftView: false,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      error: {
        isVisible: false,
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      let data = { email: this.email, password: this.password };
      this.$store
        .dispatch("signin", data)
        .then(() => {
          this.$router.push("/choice").catch(err => {
            console.log(err.message);
          });
        })
        .catch(err => {
          this.error.message = err;
          this.error.isVisible = true;
          this.password = "";
        });
    },
    signUp() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      if (this.password !== this.confirmpassword) {
        let customErr = {
          message: "Passwords do not match, please retry",
          code: "auth/password-mismatch"
        };
        this.error.message = customErr;
        this.error.isVisible = true;
        this.password = "";
        this.confirmpassword = "";
      } else if (this.name.trim() == "") {
        let customErr = {
          message: "User name is empty, please retry",
          code: "auth/null-name"
        };
        this.error.message = customErr;
        this.error.isVisible = true;
        this.password = "";
        this.confirmpassword = "";
      } else {
        this.$store
          .dispatch("signup", data)
          .then(() => {
            this.$router.push("/choice");
          })
          .catch(err => {
            this.error.message = err;
            this.error.isVisible = true;
            this.$store.state.isLoggingIn = true;
          });
        this.email = "";
        this.password = "";
        this.confirmpassword = "";
      }
    }
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("loggedUser"));
    if (user) {
      this.$store.state.user = user;
      this.$router.push(localStorage.getItem("currentRoute"));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";

.login {
  margin-top: 2.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  .container {
    h1 {
      font-weight: bold;
      margin: 0;
    }
    h2 {
      text-align: center;
    }
    p {
      font-size: 14px;
      font-weight: 100;
      line-height: 20px;
      letter-spacing: 0.5px;
      margin: 20px 0 30px;
    }
    span {
      font-size: 12px;
    }
    a {
      color: #333;
      font-size: 14px;
      text-decoration: none;
      margin: 15px 0;
    }
    a:hover {
      color: rgb(230, 44, 44);
      font-weight: bold;
    }
    button {
      margin-top: 1rem;
      border-radius: 20px;
      border: 1px solid $primary-light;
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
    button:active {
      transform: scale(0.95);
    }
    button:focus {
      outline: none;
    }
    .ghost {
      background-image: none;
      background-color: transparent;
      border-color: #ffffff;
    }
    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
      background-position-y: center;
      background-position-x: 0.8rem;
      background-size: 18px;
      background-repeat: no-repeat;
      text-indent: 30px;
    }
    .name {
      background-image: url("../assets/Login/name.svg");
    }
    .email {
      background-image: url("../assets/Login/mail.svg");
    }
    .password {
      background-image: url("../assets/Login/password.svg");
    }
    .confirm-password {
      background-image: url("../assets/Login/confirm.svg");
    }
  }
  .container {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 80%;
    min-height: 480px;
    .form-container {
      position: absolute;
      top: 0;
      height: 100%;
      transition: all 0.6s ease-in-out;
      form {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
        .form-fields {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        }
      }
    }
    .sign-in-container {
      left: 0;
      width: 50%;
      z-index: 2;
    }
    .sign-up-container {
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;
    }
    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform 0.6s ease-in-out;
      z-index: 100;
      .overlay {
        background-image: $gradient;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        .overlay-panel {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          top: 0;
          height: 100%;
          width: 50%;
          transform: translateX(0);
          transition: transform 0.6s ease-in-out;
        }
        .overlay-left {
          transform: translateX(0);
        }
        .overlay-right {
          right: 0;
          transform: translateX(0);
        }
      }
    }
  }
  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }
  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }
  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }
    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }
  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }
  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }
  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }
}
</style>