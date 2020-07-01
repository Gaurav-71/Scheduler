<template>
  <div class="main">
    <img src="../assets/Login/login.svg" alt="login" class="img" />
    <div class="container">
      <Header />
      <div class="emailBox">
        <input v-model="email" type="email" placeholder="Email" class="email" />
        <button @click="resetPassword" class="btn">Reset</button>
      </div>
    </div>No worries,we got you.
    <br />Just verify your Email.
    <br />
    <br />Create a new password at the click of a button.
  </div>
</template>
<script>
import firebase from "firebase";
import Header from "@/components/Navigation/Header.vue";

export default {
  components: {
    Header
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    resetPassword() {
      const auth = firebase.auth();
      var emailAddress = this.email;
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(() => {
          // Email sent.
          alert("Please check your email to set up a new password!");
          console.log(emailAddress);
        })
        .catch(error => {
          // An error happened.
          alert(error);
        });
    }
  }
};
</script>
<style scoped>
.main {
  text-align: center;
  margin-top: 250px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.container {
  margin-bottom: 100px;
}
.btn {
  background: rgb(79, 196, 79);
  border-radius: 0.8em;
  width: 80px;
  height: 25px;
  color: darkgreen;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.emailBox {
  align-content: center;
  justify-content: center;
  display: flex;
}
.email {
  height: 25px;
  width: 250px;
  border: 1px solid rgb(28, 116, 28);
  border-radius: 0.8em;
}
.img {
  height: 200px;
  width: 150px;
}
</style>