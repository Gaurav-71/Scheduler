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
      const {id, ...newData} = data;
      await db.collection("Teachers").doc(id).update(newData);
    }
    catch(err){
      console.log(err);
    }
  },

  async loadCourseList(context) {
    let response = db.collection("Courses").onSnapshot((snapshot) => {
      let items = [];
      snapshot.forEach((doc) => {
        let data = { id: doc.id, detail: doc.data() ,isEditing:false};
        items.push(data);
      });
      items.sort(function(a, b){
        var semA=a.detail.Semester, semB=b.detail.Semester;
        if (semA < semB) //sort string ascending
            return -1 
        if (semA > semB)
            return 1
        return 0 //default return value (no sorting)
      });
      context.commit("loadCourseList", items);
    });
    return response;
  },
  async addCourse({ commit }, data) {
    try {
      console.log(commit);
      await db.collection("Courses").add(data);
    } catch (err) {
      console.log(err);
    }
  },
  async removeCourse({ commit }, id) {
    try {
      console.log(commit);
      await db
        .collection("Courses")
        .doc(id)
        .delete();
    } catch (err) {
      console.log(err);
    }
  },
  async updateCourseDetails({ commit }, data) {
    try{
      console.log(commit);
      const {id,...newData} = data;
      await db.collection("Courses").doc(id).update(newData);
    }
    catch(err){
      console.log(err);
    }
  },
  async assignSectionDetails(context) {
    console.log(context);    
    if(this.state.cycle == "Odd")
    { let semester = [3,3,3,5,5,5,7,7,7];
      let classNames = ["sec3A", "sec3B", "sec3C","sec5A","sec5B","sec5C","sec7A","sec7B","sec7C"];
      for(let i = 0; i<9; i++)
      {  this.state.allOddCycleClasses[classNames[i]] = {
          newProfessor: [1, 1, 1, 1, 1, 1, 1, 1],
          getProfessors: function(index) {
            return this.newProfessor[index];
          },
          incrementNewProfessors: function(index) {
            return this.newProfessor[index] + 1;
          },
          decrementNewProfessors: function(index) {
            return this.newProfessor[index] - 1;
          },
          subjects : this.state.courseList.filter((subject) => {
             return subject.detail.Semester == semester[i];
          }),
        }
          
      }
    }
    else
    {
      let semester = [4,4,4,6,6,6];
      let classNames = ["sec4A", "sec4B", "sec4C","sec6A","sec6B","sec6C"];
      for(let i = 0;i<6;i++)
      { 
         this.state.allEvenCycleClasses[classNames[i]]  = {
          newProfessor: [1, 1, 1, 1, 1, 1, 1, 1],
          getProfessors: function(index) {
            return this.newProfessor[index];
          },
          incrementNewProfessors: function(index) {
            return this.newProfessor[index] + 1;
          },
          decrementNewProfessors: function(index) {
            return this.newProfessor[index] - 1;
          },
          subjects : this.state.courseList.filter((subject) => {
            return subject.detail.Semester == semester[i];
         })
        }
        console.log(this.state.allEvenCycleClasses[classNames[i]]);  
      }
    }    
  }
};
