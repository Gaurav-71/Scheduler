import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;
var firebaseConfig = {
  apiKey: "AIzaSyADoq1ZL1v0aDSGbJFLWoVoDOjdtWAPFeU",
  authDomain: "schedulertest-ec44d.firebaseapp.com",
  databaseURL: "https://schedulertest-ec44d.firebaseio.com",
  projectId: "schedulertest-ec44d",
  storageBucket: "schedulertest-ec44d.appspot.com",
  messagingSenderId: "753491286045",
  appId: "1:753491286045:web:02b2c4f12e476518764ef4",
  measurementId: "G-VYC06E8BR9",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
