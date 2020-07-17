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
        let data = { id: doc.id, detail: doc.data(), isEditing: false };
        items.push(data);
      });
      items.sort(function(a, b) {
        var nameA = a.detail.Name,
          nameB = b.detail.Name;
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
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
  async updateProfessorBio({ commit }, data) {
    try {
      console.log(commit);
      const { id, ...newData } = data;
      await db
        .collection("Teachers")
        .doc(id)
        .update(newData);
    } catch (err) {
      console.log(err);
    }
  },

  async loadCourseList(context) {
    let response = db.collection("Courses").onSnapshot((snapshot) => {
      let items = [];
      snapshot.forEach((doc) => {
        let data = { id: doc.id, detail: doc.data(), isEditing: false };
        items.push(data);
      });
      items.sort(function(a, b) {
        var semA = a.detail.Semester,
          semB = b.detail.Semester;
        if (semA < semB)
          //sort string ascending
          return -1;
        if (semA > semB) return 1;
        return 0; //default return value (no sorting)
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
    try {
      console.log(commit);
      const { id, ...newData } = data;
      await db
        .collection("Courses")
        .doc(id)
        .update(newData);
    } catch (err) {
      console.log(err);
    }
  },
  async assignSectionDetails(context) {
    console.log(context);
    if (this.state.cycle == "Odd") {
      let semester = [3, 3, 3, 5, 5, 5, 7, 7];
      let classNames = [
        "sec3A",
        "sec3B",
        "sec3C",
        "sec5A",
        "sec5B",
        "sec5C",
        "sec7A",
        "sec7B",
      ];
      for (let i = 0; i < 8; i++) {
        this.state.allOddCycleClasses[classNames[i]] = {
          newProfessor: [],
          Monday: ["","","","","","",""],
          Tuesday: ["","","","","","",""],
          Wednesday: ["","","","","","",""],
          Thursday: ["","","","","","",""],
          Friday: ["","","","","","",""],
          Saturday: ["","","","","","",""],
          roomNumber: "",
          getProfessors: function(index) {
            return this.newProfessor[index];
          },
          incrementNewProfessors: function(index) {
            return this.newProfessor[index] + 1;
          },
          decrementNewProfessors: function(index) {
            return this.newProfessor[index] - 1;
          },
        };
        let subjects = [];
        this.state.courseList.forEach((subject) => {
          if (subject.detail.Semester == semester[i]) {
            let sub = JSON.parse(JSON.stringify(subject));
            if (sub.detail.Credits.Lab > 0) {
              sub.detail["LabSchedule"] = {
                Day: "",
                Time: "",
                LabNumber: "",
              };
            }
            subjects.push(sub);
          }
        });
        this.state.allOddCycleClasses[classNames[i]]["subjects"] = subjects;
        for (
          let j = 0;
          j < this.state.allOddCycleClasses[classNames[i]].subjects.length;
          j++
        ) {
          let currentSubject = this.state.allOddCycleClasses[classNames[i]]
            .subjects[j];
          if (currentSubject.detail.Credits.Tutorial > 0) {
            this.state.allOddCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allOddCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = ["", "", ""];
          } else if (currentSubject.detail.Credits.Lab > 0) {
            this.state.allOddCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allOddCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = ["", "", "", ""];
          } else {
            this.state.allOddCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allOddCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = [""];
          }
        }
      }
    } else {
      let semester = [4, 4, 4, 6, 6, 6, 8, 8];
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C", "sec8A", "sec8B",];
      for (let i = 0; i < 8; i++) {
        this.state.allEvenCycleClasses[classNames[i]] = {
          newProfessor: [],
          Monday: ["","","","","","",""],
          Tuesday: ["","","","","","",""],
          Wednesday: ["","","","","","",""],
          Thursday: ["","","","","","",""],
          Friday: ["","","","","","",""],
          Saturday: ["","","","","","",""],
          roomNumber: "",
          getProfessors: function(index) {
            return this.newProfessor[index];
          },
          incrementNewProfessors: function(index) {
            return this.newProfessor[index] + 1;
          },
          decrementNewProfessors: function(index) {
            return this.newProfessor[index] - 1;
          },
        };

        let subjects = [];
        this.state.courseList.forEach((subject) => {
          if (subject.detail.Semester == semester[i]) {
            let sub = JSON.parse(JSON.stringify(subject));
            if (sub.detail.Credits.Lab > 0) {
              sub.detail["LabSchedule"] = {
                Day: "",
                Time: "",
                LabNumber: "",
              };
            }
            subjects.push(sub);
          }
        });
        this.state.allEvenCycleClasses[classNames[i]]["subjects"] = subjects;

        for (
          let j = 0;
          j < this.state.allEvenCycleClasses[classNames[i]].subjects.length;
          j++
        ) {
          let currentSubject = this.state.allEvenCycleClasses[classNames[i]]
            .subjects[j];
          if (currentSubject.detail.Credits.Tutorial > 0) {
            this.state.allEvenCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allEvenCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = ["", "", ""];
          } else if (currentSubject.detail.Credits.Lab > 0) {
            this.state.allEvenCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allEvenCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = ["", "", "", ""];
          } else {
            this.state.allEvenCycleClasses[classNames[i]].newProfessor.push(1);
            this.state.allEvenCycleClasses[classNames[i]].subjects[j].detail[
              "Professors"
            ] = [""];
          }
        }
      }
    }
  },
  async getProfessorObject(context,name)
  {
    console.log(context);
    for(let i = 0;i<this.state.professorList.length;i++)
    {
      if(name == this.state.professorList[i].detail.Name)
        return this.state.professorList[i];
    }
  },
  async getLabHour(context,labHour){
    console.log(context);
    if(labHour == "9:00 AM")
      return 0;
    else if(labHour == "11:05 AM")
      return 2;
    else if(labHour == "1:45 PM")
      return 4;
    return 5;
  },
  async assignLabs(context) {
    console.log(context);
    if (this.state.cycle == "Odd") {
      let classNames = [
        "sec3A",
        "sec3B",
        "sec3C",
        "sec5A",
        "sec5B",
        "sec5C",
        "sec7A",
        "sec7B",
      ];
      for(let i = 0;i<8;i++)
      {
        let currentClass = this.state.allOddCycleClasses[classNames[i]];
        for(let i = 0;i<currentClass.subjects.length;i++)
        {
          let sub = currentClass.subjects[i];
          if(sub.detail.Credits.Lab > 0)
          { 
            let x = await context.dispatch("getLabHour",sub.detail.LabSchedule.Time);
            currentClass[sub.detail.LabSchedule.Day][x] = sub.detail.Name; 
            currentClass[sub.detail.LabSchedule.Day][x + 1] = sub.detail.Name;
            for(let j = 0;j<currentClass.newProfessor[i];j++)
            { 
              let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
              professor.detail[sub.detail.LabSchedule.Day][x] = sub.detail.Name + " " + classNames[i].substring(3);
              professor.detail[sub.detail.LabSchedule.Day][x+1] = sub.detail.Name + " " + classNames[i].substring(3);
            }
          }
        }
      }
    }
    else{
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C"];
      for(let i = 0;i<6;i++)
      {
        let currentClass = this.state.allEvenCycleClasses[classNames[i]];
        for(let i = 0;i<currentClass.subjects.length;i++)
        {
          let sub = currentClass.subjects[i];
          if(sub.detail.Credits.Lab > 0)
          { 
            let x = await context.dispatch("getLabHour",sub.detail.LabSchedule.Time);
            currentClass[sub.detail.LabSchedule.Day][x] = sub.detail.Name; 
            currentClass[sub.detail.LabSchedule.Day][x + 1] = sub.detail.Name;
            for(let j = 0;j<currentClass.newProfessor[i];j++)
            { 
              let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
              professor.detail[sub.detail.LabSchedule.Day][x] = sub.detail.Name + " " + classNames[i].substring(3);
              professor.detail[sub.detail.LabSchedule.Day][x+1] = sub.detail.Name + " " + classNames[i].substring(3);
            }
          }
        }
      }
    } 
  },
  async getRandomDayHour()
  { let Days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    let day = Days[Math.floor(Math.random() * Days.length)];
    let Hours = [0,2,4,5];
    let hour = Hours[Math.floor(Math.random() * Hours.length)];
    return {day:day,hour:hour};
  },
  async assignTutorials(context) {
    if (this.state.cycle == "Odd") {
      let classNames = [
        "sec3A",
        "sec3B",
        "sec3C",
        "sec5A",
        "sec5B",
        "sec5C",
        "sec7A",
        "sec7B",
      ];
      for(let i = 0;i<8;i++)
      {
        let currentClass = this.state.allOddCycleClasses[classNames[i]];
        for(let i = 0;i<currentClass.subjects.length;i++)
        {
          let sub = currentClass.subjects[i];
          if(sub.detail.Credits.Tutorial > 0)
          { 
            let allProfessorsFree = true;  
            let x = await context.dispatch("getRandomDayHour"); 
            for(;;)
            { allProfessorsFree = currentClass[x.day][x.hour] == ""
              for(let j = 0;j<currentClass.newProfessor[i];j++) 
              { 
                let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
                allProfessorsFree = allProfessorsFree  && (professor.detail[x.day][x.hour] == "");
              }
              if(allProfessorsFree)
              { currentClass[x.day][x.hour] = sub.detail.Name; 
                currentClass[x.day][x.hour + 1] = sub.detail.Name;    
                for(let j = 0;j<currentClass.newProfessor[i];j++) 
                {
                  let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
                  professor.detail[x.day][x.hour] = sub.detail.Name + " " + classNames[i].substring(3);
                  professor.detail[x.day][x.hour + 1] = sub.detail.Name + " " + classNames[i].substring(3);
                }
                console.log(x + " true");
                break;
              }
              else{
                console.log(x+ " false");
                x = await context.dispatch("getRandomDayHour");
              }
            }             
          }
        }
      }
    }
    else
    {
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C"];
      for(let i = 0;i<6;i++)
      {
        let currentClass = this.state.allEvenCycleClasses[classNames[i]];
        for(let i = 0;i<currentClass.subjects.length;i++)
        {
          let sub = currentClass.subjects[i];
          if(sub.detail.Credits.Tutorial > 0)
          { 
            let allProfessorsFree = true;  
            let x = await context.dispatch("getRandomDayHour"); 
            for(;;)
            { allProfessorsFree = currentClass[x.day][x.hour] == ""
              for(let j = 0;j<currentClass.newProfessor[i];j++) 
              { 
                let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
                allProfessorsFree = allProfessorsFree  && (professor.detail[x.day][x.hour] == "");
              }
              if(allProfessorsFree)
              { currentClass[x.day][x.hour] = sub.detail.Name; 
                currentClass[x.day][x.hour + 1] = sub.detail.Name;    
                for(let j = 0;j<currentClass.newProfessor[i];j++) 
                {
                  let professor = await context.dispatch("getProfessorObject",sub.detail.Professors[j]);
                  professor.detail[x.day][x.hour] = sub.detail.Name + " " + classNames[i].substring(3);
                  professor.detail[x.day][x.hour + 1] = sub.detail.Name + " " + classNames[i].substring(3);
                }
                break;
              }
              else{
                x = await context.dispatch("getRandomDayHour");
              }
            }             
          }
        }
      }
    }
  },
  async automateTimetable(context) {
    console.log(context);
    await context.dispatch("assignLabs");
    await context.dispatch("assignTutorials");

  }
};
