import { auth } from "../main.js";
export default {
  async signin({ commit }, payload) {
    try {
      let response = await auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
      this.state.currentUser = payload.email;
      localStorage.setItem("currentUser", payload.email);
      commit("signin", response.user);
    } catch (err) {
      console.log("in signin catch block");
      throw err;
    }
  },
  async logout(context) {
    await auth.signOut();
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentRoute");
    this.state.currentUser = "";
    context.commit("logout");
  } /*
    async signup({ commit }, payload) {      
      let response;
      try {
        response = await auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        );
      } catch (err) {
        console.log("in register catch block");
      }
      this.state.currentUser = payload.email;
      localStorage.setItem("currentUser", payload.email);
      commit("signup", response.user);
    },*/,
  async signup({ commit }, payload) {
    let response = await auth.createUserWithEmailAndPassword(
      payload.email,
      payload.password
    );
    this.state.currentUser = payload.email;
    localStorage.setItem("currentUser", payload.email);
    commit("signup", response.user);
  },
};
