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
    console.log("assignSectionDetails' context- " + context);
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
          Semester: classNames[i].charAt(3),
          Section: classNames[i].charAt(4),
          Monday: ["", "", "", "", "", "", ""],
          Tuesday: ["", "", "", "", "", "", ""],
          Wednesday: ["", "", "", "", "", "", ""],
          Thursday: ["", "", "", "", "", "", ""],
          Friday: ["", "", "", "", "", "", ""],
          Saturday: ["", "", "", "", "", "", ""],
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
        if (semester[i] == 3) {
          this.state.allOddCycleClasses[classNames[i]]["mathClass"] = {
            TutorialClass: {
              Time: "",
              Day: "",
            },
            RegularClass1: {
              Time: "",
              Day: "",
            },
            RegularClass2: {
              Time: "",
              Day: "",
            },
            RegularClass3: {
              Time: "",
              Day: "",
            },
            Professors: ["", "", ""],
          };
        }
        let subjects = [];
        this.state.courseList.forEach((subject) => {
          if(subject.detail.Code.startsWith("CSE"))
          {
            let sub = JSON.parse(JSON.stringify(subject));
            sub.detail["Professors"]=["","","",""];
            if( subject.detail.Semester != 6 && i==0){
              this.state.oddCycleElectives["sem"+subject.detail.Semester].newProfessor.push(1);
              this.state.oddCycleElectives["sem"+subject.detail.Semester].subjects.push(sub);
            }          
          }
          else
          {
            if (subject.detail.Semester == semester[i]) {
              let sub = JSON.parse(JSON.stringify(subject));
              if (sub.detail.Credits.Lab > 0) {
                sub.detail["LabSchedule"] = {
                  Day: "",
                  Time: "",
                  LabNumber: "",
                };
              }
              sub.detail["isDayDone"] = [
                false,
                false,
                false,
                false,
                false,
                false,
              ];
              sub.detail["noOfTheoryTeachers"] = 1;
              sub.detail["Professors"] = ["", "", "", ""];
              subjects.push(sub);
              this.state.allOddCycleClasses[classNames[i]].newProfessor.push(1);
            }  
          }
        });
        this.state.allOddCycleClasses[classNames[i]]["subjects"] = subjects;
      }
    } 
    else {
      let semester = [4, 4, 4, 6, 6, 6, 8, 8];
      let classNames = [
        "sec4A",
        "sec4B",
        "sec4C",
        "sec6A",
        "sec6B",
        "sec6C",
        "sec8A",
        "sec8B",
      ];
      for (let i = 0; i < 8; i++) {
        this.state.allEvenCycleClasses[classNames[i]] = {
          newProfessor: [],
          Semester: classNames[i].charAt(3),
          Section: classNames[i].charAt(4),
          Monday: ["", "", "", "", "", "", ""],
          Tuesday: ["", "", "", "", "", "", ""],
          Wednesday: ["", "", "", "", "", "", ""],
          Thursday: ["", "", "", "", "", "", ""],
          Friday: ["", "", "", "", "", "", ""],
          Saturday: ["", "", "", "", "", "", ""],
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
        if (semester[i] == 4) {
          this.state.allEvenCycleClasses[classNames[i]]["mathClass"] = {
            TutorialClass: {
              Time: "",
              Day: "",
            },
            RegularClass1: {
              Time: "",
              Day: "",
            },
            RegularClass2: {
              Time: "",
              Day: "",
            },
            RegularClass3: {
              Time: "",
              Day: "",
            },
            Professors: ["", "", ""],
          };
        }
        let subjects = [];
        this.state.courseList.forEach((subject) => {
          if(subject.detail.Code.startsWith("CSE"))
          {
            let sub = JSON.parse(JSON.stringify(subject));
            sub.detail["Professors"]=["","","",""];
            if( subject.detail.Semester == 6  && i==0){
              this.state.evenCycleElectives["sem"+subject.detail.Semester].newProfessor.push(1);
              this.state.evenCycleElectives["sem"+subject.detail.Semester].subjects.push(sub);
            }          
          }
          else{
            if (subject.detail.Semester == semester[i]) {
              let sub = JSON.parse(JSON.stringify(subject));
              if (sub.detail.Credits.Lab > 0) {
                sub.detail["LabSchedule"] = {
                  Day: "",
                  Time: "",
                  LabNumber: "",
                };
              }
              sub.detail["isDayDone"] = [
                false,
                false,
                false,
                false,
                false,
                false,
              ];
              sub.detail["noOfTheoryTeachers"] = 1;
              sub.detail["Professors"] = ["", "", "", ""];
              subjects.push(sub);
              this.state.allEvenCycleClasses[classNames[i]].newProfessor.push(1);
            }
          } 
        });
        this.state.allEvenCycleClasses[classNames[i]]["subjects"] = subjects;
      }
    }
  },
  async getProfessorObject(context, name) {
    console.log("getProfessorObject's context- " + context);
    for (let i = 0; i < this.state.professorList.length; i++) {
      if (name == this.state.professorList[i].detail.Name)
        return this.state.professorList[i];
    }
  },
  async getLabHour(context, labHour) {
    console.log("getLabHour's context- " + context);
    if (labHour == "9:00 AM") return 0;
    else if (labHour == "11:05 AM") return 2;
    else if (labHour == "1:45 PM") return 4;
    else if (labHour == "2:40 PM") return 5;
  },
  async getMathHour(context, labHour) {
    console.log("getMathHour's context- " + context);
    if (labHour == "9:00 AM") return 0;
    else if (labHour == "9:55 AM") return 1;
    else if (labHour == "11:05 AM") return 2;
    else if (labHour == "12:00 PM") return 3;
    else if (labHour == "1:45 PM") return 4;
    else if (labHour == "2:40 PM") return 5;
    else if (labHour == "3:35 PM") return 6;
  },
  async shuffleArray(context, array) {
    console.log("shuffleArray's context- " + context);
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  async getDay(context, day) {
    console.log("getDay's context- " + context);
    let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    return Days[day];
  },
  async getRandomDayHour(context) {
    console.log("getRandomDayHour's context- " + context);
    let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let index = Math.floor(Math.random() * Days.length);
    let day = Days[index];
    let Hours = [0, 2, 4, 5];
    let hour = Hours[Math.floor(Math.random() * Hours.length)];
    return { day: day, hour: hour, dayNumber: index };
  },
  async assignMathsClasses(context) {
    console.log("assignMathsClasses' context- " + context);
    if (this.state.cycle == "Odd") {
      let classNames = ["sec3A", "sec3B", "sec3C"];
      for (let k = 0; k < 3; k++) {
        let currentClass = this.state.allOddCycleClasses[classNames[k]];
        let mathClassNames = [
          "RegularClass1",
          "RegularClass2",
          "RegularClass3",
        ];
        console.log(currentClass.mathClass);
        let x = await context.dispatch(
          "getMathHour",
          currentClass.mathClass.TutorialClass.Time
        );
        currentClass[currentClass.mathClass.TutorialClass.Day][x] =
          "Maths Tutorial";
        currentClass[currentClass.mathClass.TutorialClass.Day][x + 1] =
          "Maths Tutorial";
        for (let y = 0; y < 3; y++) {
          x = await context.dispatch(
            "getMathHour",
            currentClass.mathClass[mathClassNames[y]].Time
          );
          console.log(x);
          currentClass[currentClass.mathClass[mathClassNames[y]].Day][x] =
            "Maths";
        }
      }
    } else {
      let classNames = ["sec4A", "sec4B", "sec4C"];
      for (let k = 0; k < 3; k++) {
        let currentClass = this.state.allEvenCycleClasses[classNames[k]];
        let mathClassNames = [
          "RegularClass1",
          "RegularClass2",
          "RegularClass3",
        ];
        console.log(currentClass.mathClass);
        let x = await context.dispatch(
          "getMathHour",
          currentClass.mathClass.TutorialClass.Time
        );
        currentClass[currentClass.mathClass.TutorialClass.Day][x] =
          "Maths Tutorial";
        currentClass[currentClass.mathClass.TutorialClass.Day][x + 1] =
          "Maths Tutorial";
        for (let y = 0; y < 3; y++) {
          x = await context.dispatch(
            "getMathHour",
            currentClass.mathClass[mathClassNames[y]].Time
          );
          console.log(x);
          currentClass[currentClass.mathClass[mathClassNames[y]].Day][x] =
            "Maths";
        }
      }
    }
  },
  async getRandomDayRegularHour(context){
    console.log("getRandomDayRegularHour's context- " + context)
    let Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let index = Math.floor(Math.random() * Days.length);
    let day = Days[index];
    let Hours = [0, 1, 2, 3, 4, 5, 6];
    let hour = Hours[Math.floor(Math.random() * Hours.length)];
    return {day: day, hour :hour }
  },
  async assignElectives(context) {
    if(this.state.cycle == "Odd")
    { 
      for(let k = 0;k<this.state.oddCycleElectives.sem5.subjects.length;k++)
      { let subject = this.state.oddCycleElectives.sem5.subjects[k];
        for(let i = 0;i<subject.detail.Credits.Theory;i++)
        {
          let x = await context.dispatch("getRandomDayRegularHour");
          for(;;)
          { let allProfessorsFree = true
            for(let j = 0;j<this.state.oddCycleElectives.sem5.newProfessor[k];j++)
            {
              let professor = await context.dispatch(
                "getProfessorObject",
                subject.detail.Professors[j]
              );
              allProfessorsFree =
                allProfessorsFree && professor.detail[x.day][x.hour] == "";
            }
            if(allProfessorsFree && this.state.allOddCycleClasses["sec5A"][x.day][x.hour] == "" && this.state.allOddCycleClasses["sec5B"][x.day][x.hour] == "" && this.state.allOddCycleClasses["sec5C"][x.day][x.hour] == "")
            {
              this.state.allOddCycleClasses["sec5A"][x.day][x.hour] = subject.detail.Code;
              this.state.allOddCycleClasses["sec5B"][x.day][x.hour] = subject.detail.Code;
              this.state.allOddCycleClasses["sec5C"][x.day][x.hour] = subject.detail.Code;
              for(let j = 0;j<this.state.oddCycleElectives.sem5.newProfessor[k];j++)
              {
                let professor = await context.dispatch(
                  "getProfessorObject",
                  subject.detail.Professors[j]
                );
                professor.detail[x.day][x.hour] = subject.detail.Code + subject.detail.Semester;
              }
              break;
            }
            else
            {
              x = await context.dispatch("getRandomDayRegularHour");
            }
          }
        }
      }
      for(let k = 0;k<this.state.oddCycleElectives.sem7.subjects.length;k++)
      { let subject = this.state.oddCycleElectives.sem7.subjects[k];
        for(let i = 0;i<subject.detail.Credits.Theory;i++)
        {
          let x = await context.dispatch("getRandomDayRegularHour");
          for(;;)
          { console.log(x);
            let allProfessorsFree = true
            for(let j = 0;j<this.state.oddCycleElectives.sem7.newProfessor[k];j++)
            {
              let professor = await context.dispatch(
                "getProfessorObject",
                subject.detail.Professors[j]
              );
              allProfessorsFree = allProfessorsFree && professor.detail[x.day][x.hour] == "";
            }
            if(allProfessorsFree && this.state.allOddCycleClasses["sec7A"][x.day][x.hour] == "" && this.state.allOddCycleClasses["sec7B"][x.day][x.hour] == "")
            {
              this.state.allOddCycleClasses["sec7A"][x.day][x.hour] = subject.detail.Code;
              this.state.allOddCycleClasses["sec7B"][x.day][x.hour] = subject.detail.Code;
              for(let j = 0;j<this.state.oddCycleElectives.sem7.newProfessor[k];j++)
              {
                let professor = await context.dispatch(
                  "getProfessorObject",
                  subject.detail.Professors[j]
                );
                professor.detail[x.day][x.hour] = subject.detail.Code + subject.detail.Semester;
              }
              break;
            }
            else
            {
              x = await context.dispatch("getRandomDayRegularHour");
            }
          }
        }
      }
    }
    else
    {
      for(let k = 0;k<this.state.evenCycleElectives.sem6.subjects.length;k++)
      { let subject = this.state.evenCycleElectives.sem6.subjects[k];
        for(let i = 0;i<subject.detail.Credits.Theory;i++)
        {
          let x = await context.dispatch("getRandomDayRegularHour");
          for(;;)
          { let allProfessorsFree = true
            for(let j = 0;j<this.state.evenCycleElectives.sem6.newProfessor[k];j++)
            {
              let professor = await context.dispatch(
                "getProfessorObject",
                subject.detail.Professors[j]
              );
              allProfessorsFree =
                allProfessorsFree && professor.detail[x.day][x.hour] == "";
            }
            if(allProfessorsFree && this.state.allEvenCycleClasses["sec6A"][x.day][x.hour] == "" && this.state.allEvenCycleClasses["sec6B"][x.day][x.hour] == "" && this.state.allEvenCycleClasses["sec6C"][x.day][x.hour] == "")
            {
              this.state.allEvenCycleClasses["sec6A"][x.day][x.hour] = subject.detail.Code;
              this.state.allEvenCycleClasses["sec6B"][x.day][x.hour] = subject.detail.Code;
              this.state.allEvenCycleClasses["sec6C"][x.day][x.hour] = subject.detail.Code;
              for(let j = 0;j<this.state.oddCycleElectives.sem5.newProfessor[k];j++)
              {
                let professor = await context.dispatch(
                  "getProfessorObject",
                  subject.detail.Professors[j]
                );
                professor.detail[x.day][x.hour] = subject.detail.Code + subject.detail.Semester;
              }
              break;
            }
            else
            {
              x = await context.dispatch("getRandomDayRegularHour");
            }
          }
        }
      }
    }
  },
  async assignLabs(context) {
    console.log("assignLabs' context- " + context);
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
      for (let k = 0; k < 8; k++) {
        let currentClass = this.state.allOddCycleClasses[classNames[k]];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          if (sub.detail.Credits.Lab > 0) {
            let x = await context.dispatch(
              "getLabHour",
              sub.detail.LabSchedule.Time
            );
            currentClass[sub.detail.LabSchedule.Day][x] =
              sub.detail.Abbreviation + " " + sub.detail.LabSchedule.LabNumber;
            currentClass[sub.detail.LabSchedule.Day][x + 1] =
              sub.detail.Abbreviation + " " + sub.detail.LabSchedule.LabNumber;
            if (sub.detail.Credits.Thoery > 0) {
              currentClass[sub.detail.LabSchedule.Day][x] =
                currentClass[sub.detail.LabSchedule.Day][x] + " Lab";
              currentClass[sub.detail.LabSchedule.Day][x + 1] =
                currentClass[sub.detail.LabSchedule.Day][x + 1] + " Lab";
            }
            if (x == 4) {
              currentClass[sub.detail.LabSchedule.Day][x + 2] = "    ";
            }
            for (let j = 0; j < currentClass.newProfessor[i]; j++) {
              let professor = await context.dispatch(
                "getProfessorObject",
                sub.detail.Professors[j]
              );
              professor.detail[sub.detail.LabSchedule.Day][x] =
                sub.detail.Abbreviation +
                " " +
                classNames[k].substring(3) +
                " " +
                sub.detail.LabSchedule.LabNumber;
              professor.detail[sub.detail.LabSchedule.Day][x + 1] =
                sub.detail.Abbreviation +
                " " +
                classNames[k].substring(3) +
                " " +
                sub.detail.LabSchedule.LabNumber;
            }
          }
        }
      }
    } else {
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C"];
      for (let k = 0; k < 6; k++) {
        let currentClass = this.state.allEvenCycleClasses[classNames[k]];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          if (sub.detail.Credits.Lab > 0) {
            let x = await context.dispatch(
              "getLabHour",
              sub.detail.LabSchedule.Time
            );
            currentClass[sub.detail.LabSchedule.Day][x] =
              sub.detail.Abbreviation + " " + sub.detail.LabSchedule.LabNumber;
            currentClass[sub.detail.LabSchedule.Day][x + 1] =
              sub.detail.Abbreviation + " " + sub.detail.LabSchedule.LabNumber;
            if (x == 4) {
              currentClass[sub.detail.LabSchedule.Day][x + 2] = "    ";
            }
            for (let j = 0; j < currentClass.newProfessor[i]; j++) {
              let professor = await context.dispatch(
                "getProfessorObject",
                sub.detail.Professors[j]
              );
              professor.detail[sub.detail.LabSchedule.Day][x] =
                sub.detail.Abbreviation +
                " " +
                classNames[k].substring(3) +
                " " +
                sub.detail.LabSchedule.LabNumber;
              professor.detail[sub.detail.LabSchedule.Day][x + 1] =
                sub.detail.Abbreviation +
                " " +
                classNames[k].substring(3) +
                " " +
                sub.detail.LabSchedule.LabNumber;
            }
          }
        }
      }
    }
  },
  async assignTutorials(context) {
    console.log("assignTutorials' context - " + context);
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
      for (let k = 0; k < 8; k++) {
        let currentClass = this.state.allOddCycleClasses[classNames[k]];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          if (sub.detail.Credits.Tutorial > 0) {
            let allProfessorsFree = true;
            let x = await context.dispatch("getRandomDayHour");
            for (;;) {
              let currentClassFree = currentClass[x.day][x.hour] == "";
              if (x.hour != 0) {
                currentClassFree =
                  currentClassFree && currentClass[x.day][x.hour - 1] == "";
                if (x.hour != 5) {
                  currentClassFree =
                    currentClassFree && currentClass[x.day][x.hour + 2] == "";
                }
              } else {
                currentClassFree =
                  currentClassFree && currentClass[x.day][x.hour + 2] == "";
              }
              for (let j = 0; j < currentClass.newProfessor[i]; j++) {
                let professor = await context.dispatch(
                  "getProfessorObject",
                  sub.detail.Professors[j]
                );
                allProfessorsFree =
                  allProfessorsFree && professor.detail[x.day][x.hour] == "";
              }
              if (currentClassFree && allProfessorsFree) {
                sub.detail.isDayDone[x.dayNumber] = true;
                currentClass[x.day][x.hour] =
                  sub.detail.Abbreviation + " Tutorial";
                currentClass[x.day][x.hour + 1] =
                  sub.detail.Abbreviation + " Tutorial";
                if (x == 4) {
                  currentClass[sub.detail.LabSchedule.Day][x + 2] = "    ";
                }
                for (let j = 0; j < currentClass.newProfessor[i]; j++) {
                  let professor = await context.dispatch(
                    "getProfessorObject",
                    sub.detail.Professors[j]
                  );
                  professor.detail[x.day][x.hour] =
                    sub.detail.Abbreviation +
                    " " +
                    classNames[k].substring(3) +
                    " Tutorial";
                  professor.detail[x.day][x.hour + 1] =
                    sub.detail.Abbreviation +
                    " " +
                    classNames[k].substring(3) +
                    " Tutorial";
                }
                break;
              } else {
                x = await context.dispatch("getRandomDayHour");
              }
            }
          }
        }
      }
    } else {
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C"];
      for (let k = 0; k < 6; k++) {
        let currentClass = this.state.allEvenCycleClasses[classNames[k]];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          if (sub.detail.Credits.Tutorial > 0) {
            let allProfessorsFree = true;
            let x = await context.dispatch("getRandomDayHour");
            for (;;) {
              let currentClassFree = currentClass[x.day][x.hour] == "";
              if (x.hour != 0) {
                currentClassFree =
                  currentClassFree && currentClass[x.day][x.hour - 1] == "";
                if (x.hour != 5) {
                  currentClassFree =
                    currentClassFree && currentClass[x.day][x.hour + 2] == "";
                }
              } else {
                currentClassFree =
                  currentClassFree && currentClass[x.day][x.hour + 2] == "";
              }
              for (let j = 0; j < currentClass.newProfessor[i]; j++) {
                let professor = await context.dispatch(
                  "getProfessorObject",
                  sub.detail.Professors[j]
                );
                allProfessorsFree =
                  allProfessorsFree && professor.detail[x.day][x.hour] == "";
              }
              if (currentClassFree && allProfessorsFree) {
                sub.detail.isDayDone[x.dayNumber] = true;
                currentClass[x.day][x.hour] =
                  sub.detail.Abbreviation + " Tutorial";
                currentClass[x.day][x.hour + 1] =
                  sub.detail.Abbreviation + " Tutorial";
                if (x == 4) {
                  currentClass[sub.detail.LabSchedule.Day][x + 2] = "    ";
                }
                for (let j = 0; j < currentClass.newProfessor[i]; j++) {
                  let professor = await context.dispatch(
                    "getProfessorObject",
                    sub.detail.Professors[j]
                  );
                  professor.detail[x.day][x.hour] =
                    sub.detail.Abbreviation +
                    " " +
                    classNames[k].substring(3) +
                    " Tutorial";
                  professor.detail[x.day][x.hour + 1] =
                    sub.detail.Abbreviation +
                    " " +
                    classNames[k].substring(3) +
                    " Tutorial";
                }
                break;
              } else {
                x = await context.dispatch("getRandomDayHour");
              }
            }
          }
        }
      }
    }
  },
  async assignClasses(context) {
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
      for (let k = 0; k < 8; k++) {
        let currentClass = this.state.allOddCycleClasses[classNames[k]];
        console.log(currentClass);
        let subjectStack = [];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          for (let j = 0; j < sub.detail.Credits.Theory; j++)
            subjectStack.push(i);
        }
        await context.dispatch("shuffleArray", subjectStack);

        //Approach 3
        for (let i = 0; i < subjectStack.length; i++) {
          let subNumber = subjectStack[i];
          let professor = await context.dispatch(
            "getProfessorObject",
            currentClass.subjects[subNumber].detail.Professors[0]
          );
          let isAllotted = false;
          for (let hour = 0; hour < 7; hour++) {
            let toBreak = false;
            for (let day = 0; day < 5; day++) {
              let x = await context.dispatch("getDay", day);
              if (
                professor.detail[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[day] ==
                  false &&
                currentClass[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isToggleChecked == false
              ) {
                currentClass.subjects[subNumber].detail.isDayDone[day] = true;
                currentClass[x][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation;
                professor.detail[x][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation +
                  " " +
                  currentClass.Semester +
                  currentClass.Section;
                toBreak = true;
                break;
              } else if (
                currentClass.subjects[subNumber].detail.isToggleChecked &&
                professor.detail[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[day] ==
                  false &&
                currentClass[x][hour] == ""
              ) {
                let secondProfessor = await context.dispatch(
                  "getProfessorObject",
                  currentClass.subjects[subNumber].detail.Professors[1]
                );
                if (secondProfessor.detail[x][hour] == "") {
                  currentClass.subjects[subNumber].detail.isDayDone[day] = true;
                  currentClass[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation;
                  professor.detail[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  secondProfessor.detail[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  toBreak = true;
                  break;
                }
              }
            }
            if (toBreak) {
              isAllotted = true;
              break;
            }
          }
          if (!isAllotted) {
            for (let hour = 0; hour < 7; hour++) {
              if (
                professor.detail["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[5] == false &&
                currentClass["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isToggleChecked == false
              ) {
                currentClass.subjects[subNumber].detail.isDayDone[5] = true;
                currentClass["Saturday"][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation;
                professor.detail["Saturday"][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation +
                  " " +
                  currentClass.Semester +
                  currentClass.Section;
                isAllotted = true;
                break;
              } else if (
                currentClass.subjects[subNumber].detail.isToggleChecked &&
                professor.detail["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[5] == false &&
                currentClass["Saturday"][hour] == ""
              ) {
                let secondProfessor = await context.dispatch(
                  "getProfessorObject",
                  currentClass.subjects[subNumber].detail.Professors[1]
                );
                if (secondProfessor.detail["Saturday"][hour] == "") {
                  currentClass.subjects[subNumber].detail.isDayDone[
                    "Saturday"
                  ] = true;
                  currentClass["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation;
                  professor.detail["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  secondProfessor.detail["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  break;
                }
              }
            }
          }
        }
      }
    } else {
      let classNames = ["sec4A", "sec4B", "sec4C", "sec6A", "sec6B", "sec6C"];
      for (let k = 0; k < 6; k++) {
        let currentClass = this.state.allOddCycleClasses[classNames[k]];
        console.log(currentClass);
        let subjectStack = [];
        for (let i = 0; i < currentClass.subjects.length; i++) {
          let sub = currentClass.subjects[i];
          for (let j = 0; j < sub.detail.Credits.Theory; j++)
            subjectStack.push(i);
        }
        await context.dispatch("shuffleArray", subjectStack);

        //Approach 3
        for (let i = 0; i < subjectStack.length; i++) {
          let subNumber = subjectStack[i];
          let professor = await context.dispatch(
            "getProfessorObject",
            currentClass.subjects[subNumber].detail.Professors[0]
          );
          let isAllotted = false;
          for (let hour = 0; hour < 7; hour++) {
            let toBreak = false;
            for (let day = 0; day < 5; day++) {
              let x = await context.dispatch("getDay", day);
              if (
                professor.detail[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[day] ==
                  false &&
                currentClass[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isToggleChecked == false
              ) {
                currentClass.subjects[subNumber].detail.isDayDone[day] = true;
                currentClass[x][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation;
                professor.detail[x][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation +
                  " " +
                  currentClass.Semester +
                  currentClass.Section;
                toBreak = true;
                break;
              } else if (
                currentClass.subjects[subNumber].detail.isToggleChecked &&
                professor.detail[x][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[day] ==
                  false &&
                currentClass[x][hour] == ""
              ) {
                let secondProfessor = await context.dispatch(
                  "getProfessorObject",
                  currentClass.subjects[subNumber].detail.Professors[1]
                );
                if (secondProfessor.detail[x][hour] == "") {
                  currentClass.subjects[subNumber].detail.isDayDone[day] = true;
                  currentClass[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation;
                  professor.detail[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  secondProfessor.detail[x][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  toBreak = true;
                  break;
                }
              }
            }
            if (toBreak) {
              isAllotted = true;
              break;
            }
          }
          if (!isAllotted) {
            for (let hour = 0; hour < 7; hour++) {
              if (
                professor.detail["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[5] == false &&
                currentClass["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isToggleChecked == false
              ) {
                currentClass.subjects[subNumber].detail.isDayDone[5] = true;
                currentClass["Saturday"][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation;
                professor.detail["Saturday"][hour] =
                  currentClass.subjects[subNumber].detail.Abbreviation +
                  " " +
                  currentClass.Semester +
                  currentClass.Section;
                isAllotted = true;
                break;
              } else if (
                currentClass.subjects[subNumber].detail.isToggleChecked &&
                professor.detail["Saturday"][hour] == "" &&
                currentClass.subjects[subNumber].detail.isDayDone[5] == false &&
                currentClass["Saturday"][hour] == ""
              ) {
                let secondProfessor = await context.dispatch(
                  "getProfessorObject",
                  currentClass.subjects[subNumber].detail.Professors[1]
                );
                if (secondProfessor.detail["Saturday"][hour] == "") {
                  currentClass.subjects[subNumber].detail.isDayDone[
                    "Saturday"
                  ] = true;
                  currentClass["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation;
                  professor.detail["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  secondProfessor.detail["Saturday"][hour] =
                    currentClass.subjects[subNumber].detail.Abbreviation +
                    " " +
                    currentClass.Semester +
                    currentClass.Section;
                  break;
                }
              }
            }
          }
        }
      }
    }
  },
  async automateTimetable(context) {
    console.log("automateTimeTable's context- " + context);
    //await context.dispatch("assignMathsClasses");
    //await context.dispatch("assignLabs");
    await context.dispatch("assignElectives");
    await context.dispatch("assignTutorials");
    await context.dispatch("assignClasses");
  },
};
