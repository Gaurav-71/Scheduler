import { auth } from "../main.js";
export default {
    async signin({ commit }, payload) {
      try {        
        let response = await auth.signInWithEmailAndPassword(
          payload.email,
          payload.password
        );
        this.state.isLoggingIn = false;
        this.state.currentUser = payload.email;
        localStorage.setItem("currentUser", payload.email);
        commit("signin", response.user);
      } catch (err) {
        this.state.isLoggingIn = true;        
        throw err;
      }
    },
    async logout(context) {
      await auth.signOut();
      localStorage.removeItem("loggedUser");
      localStorage.removeItem("currentUser");
      this.state.isLoggingIn = true;
      this.state.currentUser = "";
      context.commit("logout");
    },
    async signup({ commit }, payload) {
        this.state.isLoggingIn = false;
        let response = await auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        );
        this.state.currentUser = payload.email;
        localStorage.setItem("currentUser", payload.email);
        commit("signup", response.user);
      }
}