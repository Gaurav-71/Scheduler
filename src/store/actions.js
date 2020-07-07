import { auth } from "../main.js";
import { db } from "../main.js";
export default {
  async signin({ commit }, payload) {
    this.state.isLoggingIn = false;
    try {
      let response = await auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      );
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
    localStorage.removeItem("currentRoute");
    localStorage.removeItem("createRouteTracker");
    this.state.currentUser = "";
    this.state.isLoggingIn = true;
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
  },
  async loadProfessorList(context) {
    let response = db.collection("Teachers").onSnapshot((snapshot) => {
      let items = [];
      snapshot.forEach((doc) => {
        let data = { id: doc.id, detail: doc.data() ,isEditing:false};
        items.push(data);
      });
      items.sort(function(a, b){
        var nameA=a.detail.Name, nameB=b.detail.Name;
        if (nameA < nameB) //sort string ascending
            return -1 
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
      })
      context.commit("loadProfessorList", items);
    });
    return response;
  },
  async addProfessor({ commit }, data) {
    try {
      console.log(commit);
      await db.collection("Teachers").add(data);
    } catch (err) {
      console.log(err);
    }
  },
  async removeProfessor({ commit }, id) {
    try {
      console.log(commit);
      await db
        .collection("Teachers")
        .doc(id)
        .delete();
    } catch (err) {
      console.log(err);
    }
  },
  async updateProfessorBio({ commit },data) {
    try{
      console.log(commit);
      let newData = {
        Name : data.Name,
        Designation : data.Designation,
        Gender : data.Gender
      }
      await db.collection("Teachers").doc(data.id).update(newData);
    }
    catch(err){
      console.log(err);
    }
  }
};
