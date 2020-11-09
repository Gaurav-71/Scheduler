export default {
  progressCounter: 1,

  sidebarCounter: 1,

  semester: null,

  section: null,

  cycle: null,

  createType: null,

  department: "",

  term: "",

  isLoading: false,

  showProfessorModal: false,

  showCourseModal: false,

  isLoggedIn: false,

  isLoggingIn: true,

  isMapping: false,

  isDownloading: false,

  postSubscription: null,

  user: JSON.parse(localStorage.getItem("loggedUser")),

  createRouteTracker: localStorage.getItem("createRouteTracker"),

  professorList: [],

  courseList: [],

  /*  allOddCycleClasses: {
    sec3A: {},
    sec3B: {},
    sec3C: {},

    sec5A: {},
    sec5B: {},
    sec5C: {},

    sec7A: {},
    sec7B: {},
  },
*/
  allEvenCycleClasses: {
    sec4A: {},
    sec4B: {},
    sec4C: {},

    sec6A: {},
    sec6B: {},
    sec6C: {},

    sec8A: {},
    sec8B: {},
  },

  /* oddCycleElectives: {
    sem5 : {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
    sem7: {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
  },


  oddCycleOpenElectives: {
    sem5: {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
    sem7: {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
  },*/

  evenCycleElectives: {
    sem6: {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
  },

  evenCycleOpenElectives: {
    sem6: {
      newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [],
    },
  },

  /*------------------------------------dummy data--------------------------------*/

  allOddCycleClasses: {
    sec3A: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [3, 1, 1, 1, 3, 2, 1],
      Semester: 3,
      Section: "A",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "dvx",
      mathClass: {
        TutorialClass: { Time: "9:00 AM", Day: "Saturday" },
        RegularClass1: { Time: "11:05 AM", Day: "Monday" },
        RegularClass2: { Time: "9:55 AM", Day: "Tuesday" },
        RegularClass3: { Time: "11:05 AM", Day: "Thursday" },
        Professors: ["zxvc", "zxv", "zxv"],
      },
      subjects: [
        {
          id: "6fdREvCtNDe9eF6rEAer",
          detail: {
            Name: "Object Oriented Programming Laboratory.",
            Code: "CSL37",
            Abbreviation: "OOP Lab",
            Semester: 3,
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Abbrevation: "OOPS Lab",
            LabSchedule: {
              Day: "Wednesday",
              Time: "11:05 AM",
              LabNumber: "zxv",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. Geetha J.",
              "Chandrika Prasad",
              "Lame Teacher 1",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "My7WOmlXzv12V0iDaXcO",
          detail: {
            Abbreviation: "DMS",
            Semester: 3,
            Code: "CS33",
            Name: "Discrete Mathematical Structures",
            Credits: { Tutorial: 0, Lab: 0, Theory: 4 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Srinidhi Hiriyannaiah", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NNmgMgMNwnQe7uERk3Un",
          detail: {
            Code: "CS36",
            Credits: { Tutorial: 0, Theory: 3, Lab: 0 },
            Semester: 3,
            Abbreviation: "OOP",
            Name: "Object Oriented Programming",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Geetha J.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NONWgSDYQwTyoCsS1RVn",
          detail: {
            Credits: { Theory: 3, Lab: 0, Tutorial: 1 },
            Code: "CS32",
            Name: "Data Structures",
            Abbreviation: "DS",
            Semester: 3,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Aparna R.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "mpU6YnuQqOQAwB8P1eP3",
          detail: {
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Code: "CSL38",
            Semester: 3,
            Name: "Data Structures Laboratory",
            Abbreviation: "DS Lab",
            LabSchedule: { Day: "Monday", Time: "2:40 PM", LabNumber: "zxv" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. Aparna R.",
              "Hanumantha Raju R.",
              "Sowmya B. J.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "pnzILu9yTrrpSLTyO7fp",
          detail: {
            Name: "Analog and Digital Design",
            Credits: { Lab: 1, Theory: 3, Tutorial: 0 },
            Abbreviation: "ADD",
            Semester: 3,
            Code: "CS35",
            LabSchedule: { Day: "Tuesday", Time: "2:40 PM", LabNumber: "zxzv" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: "2",
            Professors: ["Veena G.S.", "Dr. Mohana Kumar S", "", ""],
          },
          isEditing: false,
        },
        {
          id: "sWvIKHTlJ6IoqcWs4rjs",
          detail: {
            Name: "Theory of Computation",
            Credits: { Theory: 3, Tutorial: 1, Lab: 0 },
            Code: "CS34",
            Semester: 3,
            Abbreviation: "TOC",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Vandana Sudhakar Sardar", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec3B: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [3, 1, 1, 1, 3, 2, 1],
      Semester: 3,
      Section: "B",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "bnb",
      mathClass: {
        TutorialClass: { Time: "11:05 AM", Day: "Thursday" },
        RegularClass1: { Time: "9:00 AM", Day: "Monday" },
        RegularClass2: { Time: "11:05 AM", Day: "Wednesday" },
        RegularClass3: { Time: "12:00 PM", Day: "Friday" },
        Professors: ["zxv", "xzvxzv", "zvxzv"],
      },
      subjects: [
        {
          id: "6fdREvCtNDe9eF6rEAer",
          detail: {
            Name: "Object Oriented Programming Laboratory.",
            Code: "CSL37",
            Abbreviation: "OOP Lab",
            Semester: 3,
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Abbrevation: "OOPS Lab",
            LabSchedule: {
              Day: "Wednesday",
              Time: "2:40 PM",
              LabNumber: "jkbkj",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Hanumantha Raju R.",
              "Dr. Geetha J.",
              "Lame Teacher 1",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "My7WOmlXzv12V0iDaXcO",
          detail: {
            Abbreviation: "DMS",
            Semester: 3,
            Code: "CS33",
            Name: "Discrete Mathematical Structures",
            Credits: { Tutorial: 0, Lab: 0, Theory: 4 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Geetha J.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NNmgMgMNwnQe7uERk3Un",
          detail: {
            Code: "CS36",
            Credits: { Tutorial: 0, Theory: 3, Lab: 0 },
            Semester: 3,
            Abbreviation: "OOP",
            Name: "Object Oriented Programming",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Hanumantha Raju R.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NONWgSDYQwTyoCsS1RVn",
          detail: {
            Credits: { Theory: 3, Lab: 0, Tutorial: 1 },
            Code: "CS32",
            Name: "Data Structures",
            Abbreviation: "DS",
            Semester: 3,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr Parkavi A.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "mpU6YnuQqOQAwB8P1eP3",
          detail: {
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Code: "CSL38",
            Semester: 3,
            Name: "Data Structures Laboratory",
            Abbreviation: "DS Lab",
            LabSchedule: {
              Day: "Friday",
              Time: "9:00 AM",
              LabNumber: "jkbkjb",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr Parkavi A.",
              "Chandrika Prasad",
              "Mallegowda M.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "pnzILu9yTrrpSLTyO7fp",
          detail: {
            Name: "Analog and Digital Design",
            Credits: { Lab: 1, Theory: 3, Tutorial: 0 },
            Abbreviation: "ADD",
            Semester: 3,
            Code: "CS35",
            LabSchedule: { Day: "Saturday", Time: "9:00 AM", LabNumber: "kjb" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: "2",
            Professors: ["Dr. Mohana Kumar S", "Veena G.S.", "", ""],
          },
          isEditing: false,
        },
        {
          id: "sWvIKHTlJ6IoqcWs4rjs",
          detail: {
            Name: "Theory of Computation",
            Credits: { Theory: 3, Tutorial: 1, Lab: 0 },
            Code: "CS34",
            Semester: 3,
            Abbreviation: "TOC",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Jayalakshmi D. S", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec3C: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [3, 1, 1, 1, 4, 2, 1],
      Semester: 3,
      Section: "C",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "dgsd",
      mathClass: {
        TutorialClass: { Time: "2:40 PM", Day: "Monday" },
        RegularClass1: { Time: "9:00 AM", Day: "Tuesday" },
        RegularClass2: { Time: "1:45 PM", Day: "Wednesday" },
        RegularClass3: { Time: "12:00 PM", Day: "Thursday" },
        Professors: ["sdgdgs", "dgdsdg", "sdgsdg"],
      },
      subjects: [
        {
          id: "6fdREvCtNDe9eF6rEAer",
          detail: {
            Name: "Object Oriented Programming Laboratory.",
            Code: "CSL37",
            Abbreviation: "OOP Lab",
            Semester: 3,
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Abbrevation: "OOPS Lab",
            LabSchedule: { Day: "Tuesday", Time: "2:40 PM", LabNumber: "asfa" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Pramod Sunagar",
              "Lame Teacher 1",
              "Lame Teacher 2",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "My7WOmlXzv12V0iDaXcO",
          detail: {
            Abbreviation: "DMS",
            Semester: 3,
            Code: "CS33",
            Name: "Discrete Mathematical Structures",
            Credits: { Tutorial: 0, Lab: 0, Theory: 4 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. S. Seema", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NNmgMgMNwnQe7uERk3Un",
          detail: {
            Code: "CS36",
            Credits: { Tutorial: 0, Theory: 3, Lab: 0 },
            Semester: 3,
            Abbreviation: "OOP",
            Name: "Object Oriented Programming",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Pramod Sunagar", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "NONWgSDYQwTyoCsS1RVn",
          detail: {
            Credits: { Theory: 3, Lab: 0, Tutorial: 1 },
            Code: "CS32",
            Name: "Data Structures",
            Abbreviation: "DS",
            Semester: 3,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Mamatha Jadhav V.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "mpU6YnuQqOQAwB8P1eP3",
          detail: {
            Credits: { Theory: 0, Lab: 1, Tutorial: 0 },
            Code: "CSL38",
            Semester: 3,
            Name: "Data Structures Laboratory",
            Abbreviation: "DS Lab",
            LabSchedule: {
              Day: "Wednesday",
              Time: "11:05 AM",
              LabNumber: "dsg",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Mamatha Jadhav V.",
              "Chandrika Prasad",
              "Mallegowda M.",
              "Darshana A. Naik",
            ],
          },
          isEditing: false,
        },
        {
          id: "pnzILu9yTrrpSLTyO7fp",
          detail: {
            Name: "Analog and Digital Design",
            Credits: { Lab: 1, Theory: 3, Tutorial: 0 },
            Abbreviation: "ADD",
            Semester: 3,
            Code: "CS35",
            LabSchedule: {
              Day: "Wednesday",
              Time: "2:40 PM",
              LabNumber: "sdgs",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: "2",
            Professors: ["Dr. Anita Kanavalli", "Veena G.S.", "", ""],
          },
          isEditing: false,
        },
        {
          id: "sWvIKHTlJ6IoqcWs4rjs",
          detail: {
            Name: "Theory of Computation",
            Credits: { Theory: 3, Tutorial: 1, Lab: 0 },
            Code: "CS34",
            Semester: 3,
            Abbreviation: "TOC",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Monica R. Mundada", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec5A: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [4, 4, 1, 3, 1, 1, 1, 1],
      Semester: 5,
      Section: "A",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "asfasf",
      subjects: [
        {
          id: "6vhE1YOSF3FBFm0phIWG",
          detail: {
            Semester: 5,
            Name: "Computer Networks Laboratory",
            Code: "CSL59",
            Abbreviation: "CN Lab",
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            LabSchedule: {
              Day: "Thursday",
              Time: "11:05 AM",
              LabNumber: "sdvsdg",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Sanjeetha R.",
              "Dr. Shilpa Shashikant Chaudhari",
              "Shilpa H",
              "miniProject Teacher 1",
            ],
          },
          isEditing: false,
        },
        {
          id: "88njSSQcG0BSGezDu3uR",
          detail: {
            Name: "Java Programming Laboratory",
            Abbreviation: "JAVA Lab",
            Semester: 5,
            Credits: { Tutorial: 0, Lab: 1, Theory: 0 },
            Code: "CSL57",
            LabSchedule: {
              Day: "Thursday",
              Time: "2:40 PM",
              LabNumber: "dgsd",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Lame Teacher 2",
              "Dr. Geetha J.",
              "Sowmya B. J.",
              "Veena G.S.",
            ],
          },
          isEditing: false,
        },
        {
          id: "Gx0ygyIDnXiuhOHuTrt4",
          detail: {
            Abbreviation: "JAVA",
            Name: "Java Programming",
            Code: "CS54",
            Semester: 5,
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["miniProject Teacher 2", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "JtGftFU0BpvmGeYAszRV",
          detail: {
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            Abbreviation: "DBS Lab",
            Semester: 5,
            Code: "CSL58",
            Name: "Database Systems Laboratory",
            LabSchedule: {
              Day: "Monday",
              Time: "11:05 AM",
              LabNumber: "sdgsdg",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. Aparna R.",
              "Dr. Jayalakshmi D. S",
              "Dr. J Sangeetha",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "S1F5PThzDG4tr20r95Y9",
          detail: {
            Credits: { Tutorial: 0, Theory: 4, Lab: 0 },
            Semester: 5,
            Code: "CS53",
            Abbreviation: "CN",
            Name: "Computer Networks",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Sanjeetha R.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "SbmqFmK6g1MfyWX8rHk8",
          detail: {
            Code: "CS55",
            Abbreviation: "IPR",
            Name: "Intellectual Property Rights",
            Credits: { Theory: 2, Lab: 0, Tutorial: 0 },
            Semester: 5,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Jagadish S. Kallimani", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "SvwjwTfhSV9WHHAHfJ5a",
          detail: {
            Code: "CS51",
            Semester: 5,
            Credits: { Theory: 3, Lab: 0, Tutorial: 0 },
            Name: "Operating Systems",
            Abbreviation: "OS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Vandana Sudhakar Sardar", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "WL4MXTxm9A6VU8m0OIPS",
          detail: {
            Credits: { Lab: 0, Theory: 3, Tutorial: 1 },
            Code: "CS52",
            Name: "Database Systems",
            Semester: 5,
            Abbreviation: "DBS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Aparna R.", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec5B: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [3, 3, 1, 3, 1, 2, 1, 1],
      Semester: 5,
      Section: "B",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "mn mn",
      subjects: [
        {
          id: "6vhE1YOSF3FBFm0phIWG",
          detail: {
            Semester: 5,
            Name: "Computer Networks Laboratory",
            Code: "CSL59",
            Abbreviation: "CN Lab",
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            LabSchedule: {
              Day: "Thursday",
              Time: "1:45 PM",
              LabNumber: "bjhb",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Meeradevi A. K.",
              "Dr. Shilpa Shashikant Chaudhari",
              "Sanjeetha R.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "88njSSQcG0BSGezDu3uR",
          detail: {
            Name: "Java Programming Laboratory",
            Abbreviation: "JAVA Lab",
            Semester: 5,
            Credits: { Tutorial: 0, Lab: 1, Theory: 0 },
            Code: "CSL57",
            LabSchedule: {
              Day: "Tuesday",
              Time: "11:05 AM",
              LabNumber: "jbmn",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Pramod Sunagar",
              "Hanumantha Raju R.",
              "Lame Teacher 1",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "Gx0ygyIDnXiuhOHuTrt4",
          detail: {
            Abbreviation: "JAVA",
            Name: "Java Programming",
            Code: "CS54",
            Semester: 5,
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Pradeep Kumar D.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "JtGftFU0BpvmGeYAszRV",
          detail: {
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            Abbreviation: "DBS Lab",
            Semester: 5,
            Code: "CSL58",
            Name: "Database Systems Laboratory",
            LabSchedule: { Day: "Tuesday", Time: "2:40 PM", LabNumber: "jnj" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Mrs. Sini Anna Alex",
              "Ganeshayya Shidaganti",
              "Pradeep Kumar D.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "S1F5PThzDG4tr20r95Y9",
          detail: {
            Credits: { Tutorial: 0, Theory: 4, Lab: 0 },
            Semester: 5,
            Code: "CS53",
            Abbreviation: "CN",
            Name: "Computer Networks",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Meeradevi A. K.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "SbmqFmK6g1MfyWX8rHk8",
          detail: {
            Code: "CS55",
            Abbreviation: "IPR",
            Name: "Intellectual Property Rights",
            Credits: { Theory: 2, Lab: 0, Tutorial: 0 },
            Semester: 5,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: "2",
            Professors: [
              "Dr. Jagadish S. Kallimani",
              "Dr. T.N.R.Kumar",
              "",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "SvwjwTfhSV9WHHAHfJ5a",
          detail: {
            Code: "CS51",
            Semester: 5,
            Credits: { Theory: 3, Lab: 0, Tutorial: 0 },
            Name: "Operating Systems",
            Abbreviation: "OS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Chandrika Prasad", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "WL4MXTxm9A6VU8m0OIPS",
          detail: {
            Credits: { Lab: 0, Theory: 3, Tutorial: 1 },
            Code: "CS52",
            Name: "Database Systems",
            Semester: 5,
            Abbreviation: "DBS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Mrs. Sini Anna Alex", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec5C: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [3, 3, 1, 3, 1, 1, 1, 1],
      Semester: 5,
      Section: "C",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "vdv",
      subjects: [
        {
          id: "6vhE1YOSF3FBFm0phIWG",
          detail: {
            Semester: 5,
            Name: "Computer Networks Laboratory",
            Code: "CSL59",
            Abbreviation: "CN Lab",
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            LabSchedule: { Day: "Friday", Time: "11:05 AM", LabNumber: "dsd" },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Meeradevi A. K.",
              "Dr. Shilpa Shashikant Chaudhari",
              "Darshana A. Naik",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "88njSSQcG0BSGezDu3uR",
          detail: {
            Name: "Java Programming Laboratory",
            Abbreviation: "JAVA Lab",
            Semester: 5,
            Credits: { Tutorial: 0, Lab: 1, Theory: 0 },
            Code: "CSL57",
            LabSchedule: {
              Day: "Thursday",
              Time: "11:05 AM",
              LabNumber: "gsd",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. S. Rajarajeswari",
              "Dr. T.N.R.Kumar",
              "Pradeep Kumar D.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "Gx0ygyIDnXiuhOHuTrt4",
          detail: {
            Abbreviation: "JAVA",
            Name: "Java Programming",
            Code: "CS54",
            Semester: 5,
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. S. Rajarajeswari", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "JtGftFU0BpvmGeYAszRV",
          detail: {
            Credits: { Lab: 1, Theory: 0, Tutorial: 0 },
            Abbreviation: "DBS Lab",
            Semester: 5,
            Code: "CSL58",
            Name: "Database Systems Laboratory",
            LabSchedule: {
              Day: "Tuesday",
              Time: "11:05 AM",
              LabNumber: "dgsd",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Mamatha Jadhav V.",
              "Chandrika Prasad",
              "Sanjeetha R.",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "S1F5PThzDG4tr20r95Y9",
          detail: {
            Credits: { Tutorial: 0, Theory: 4, Lab: 0 },
            Semester: 5,
            Code: "CS53",
            Abbreviation: "CN",
            Name: "Computer Networks",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["miniProject Teacher 2", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "SbmqFmK6g1MfyWX8rHk8",
          detail: {
            Code: "CS55",
            Abbreviation: "IPR",
            Name: "Intellectual Property Rights",
            Credits: { Theory: 2, Lab: 0, Tutorial: 0 },
            Semester: 5,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. T.N.R.Kumar", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "SvwjwTfhSV9WHHAHfJ5a",
          detail: {
            Code: "CS51",
            Semester: 5,
            Credits: { Theory: 3, Lab: 0, Tutorial: 0 },
            Name: "Operating Systems",
            Abbreviation: "OS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Chandrika Prasad", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "WL4MXTxm9A6VU8m0OIPS",
          detail: {
            Credits: { Lab: 0, Theory: 3, Tutorial: 1 },
            Code: "CS52",
            Name: "Database Systems",
            Semester: 5,
            Abbreviation: "DBS",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Mamatha Jadhav V.", "", "", ""],
          },
          isEditing: false,
        },
      ],
    },
    sec7A: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [1, 1, 4, 1, 4],
      Semester: 7,
      Section: "A",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "bb",
      subjects: [
        {
          id: "UwSvBfPtK4cUlHBLJZbP",
          detail: {
            Abbreviation: "CNS",
            Semester: 7,
            Code: "CS71",
            Name: "Computer Network Security",
            Credits: { Tutorial: 0, Theory: 3, Lab: 0 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Meeradevi A. K.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "ZBQSjanDEP9heJhcHHwU",
          detail: {
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Semester: 7,
            Name: "High Performance Computing",
            Abbreviation: "HPC",
            Code: "CS72",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Mallegowda M.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "bbcbG2A3OWwNa182Kn2r",
          detail: {
            Credits: { Tutorial: 0, Lab: 1, Theory: 0 },
            Abbreviation: "DA Lab",
            Name: "Data Analytics Laboratory",
            Semester: 7,
            Code: "CSL75",
            LabSchedule: {
              Day: "Wednesday",
              Time: "9:00 AM",
              LabNumber: "nn,",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr Parkavi A.",
              "miniProject Teacher 1",
              "Meeradevi A. K.",
              "Darshana A. Naik",
            ],
          },
          isEditing: false,
        },
        {
          id: "f3A1UOjb6fy9pZvY4w7g",
          detail: {
            Code: "CS72",
            Credits: { Theory: 3, Tutorial: 1, Lab: 0 },
            Abbreviation: "DA",
            Name: "Data Analytics",
            Semester: 7,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr Parkavi A.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "mUZUAhzwQoUbl3WMqhU1",
          detail: {
            Semester: 7,
            Abbreviation: "HPC Lab",
            Credits: { Tutorial: 0, Theory: 0, Lab: 1 },
            Name: "High Performance Computing Laboratory",
            Code: "CSL74",
            LabSchedule: {
              Day: "Friday",
              Time: "11:05 AM",
              LabNumber: "knlkn",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Mallegowda M.",
              "Sowmya B. J.",
              "Dr. S. Rajarajeswari",
              "Shilpa H",
            ],
          },
          isEditing: false,
        },
      ],
    },
    sec7B: {
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      newProfessor: [1, 1, 3, 1, 3],
      Semester: 7,
      Section: "B",
      Monday: ["", "", "", "", "", "", ""],
      Tuesday: ["", "", "", "", "", "", ""],
      Wednesday: ["", "", "", "", "", "", ""],
      Thursday: ["", "", "", "", "", "", ""],
      Friday: ["", "", "", "", "", "", ""],
      Saturday: ["", "", "", "", "", "", ""],
      roomNumber: "bmb",
      subjects: [
        {
          id: "UwSvBfPtK4cUlHBLJZbP",
          detail: {
            Abbreviation: "CNS",
            Semester: 7,
            Code: "CS71",
            Name: "Computer Network Security",
            Credits: { Tutorial: 0, Theory: 3, Lab: 0 },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. J Sangeetha", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "ZBQSjanDEP9heJhcHHwU",
          detail: {
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Semester: 7,
            Name: "High Performance Computing",
            Abbreviation: "HPC",
            Code: "CS72",
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Divakar Harekal", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "bbcbG2A3OWwNa182Kn2r",
          detail: {
            Credits: { Tutorial: 0, Lab: 1, Theory: 0 },
            Abbreviation: "DA Lab",
            Name: "Data Analytics Laboratory",
            Semester: 7,
            Code: "CSL75",
            LabSchedule: { Day: "Tuesday", Time: "11:05 AM", LabNumber: "n," },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Pradeep Kumar D.",
              "Sowmya B. J.",
              "Dr. Jayalakshmi D. S",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "f3A1UOjb6fy9pZvY4w7g",
          detail: {
            Code: "CS72",
            Credits: { Theory: 3, Tutorial: 1, Lab: 0 },
            Abbreviation: "DA",
            Name: "Data Analytics",
            Semester: 7,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Pradeep Kumar D.", "", "", ""],
          },
          isEditing: false,
        },
        {
          id: "mUZUAhzwQoUbl3WMqhU1",
          detail: {
            Semester: 7,
            Abbreviation: "HPC Lab",
            Credits: { Tutorial: 0, Theory: 0, Lab: 1 },
            Name: "High Performance Computing Laboratory",
            Code: "CSL74",
            LabSchedule: {
              Day: "Thursday",
              Time: "11:05 AM",
              LabNumber: "n,n,",
            },
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. Divakar Harekal",
              "Darshana A. Naik",
              "Meeradevi A. K.",
              "",
            ],
          },
          isEditing: false,
        },
      ],
    },
  },

  oddCycleElectives: {
    sem5: {
      newProfessor: [3],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [
        {
          id: "semester 5 elective",
          detail: {
            Code: "CSE01",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "DM/AI",
            Name: "Data Mining/Artificial Intelligence",
            Semester: 5,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Dr. Monica R. Mundada",
              "Dr. Annapurna P. Patil",
              "Dr. S. Rajarajeswari",
              "",
            ],
          },
          isEditing: false,
        },
      ],
    },
    sem7: {
      newProfessor: [2, 2, 2],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [
        {
          id: "semester 7 elective group a",
          detail: {
            Code: "CSE21",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "CC",
            Name: "Cloud Computing G-A",
            Semester: 7,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Dr. Divakar Harekal", "Ganeshayya Shidaganti", ""],
          },
          isEditing: false,
        },
        {
          id: "semester 7 elective group b",
          detail: {
            Code: "CSE22",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "DL/DS",
            Name: "Deep Learning/Distributed Systems",
            Semester: 7,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: [
              "Srinidhi Hiriyannaiah",
              "Mrs. Sini Anna Alex",
              "",
              "",
            ],
          },
          isEditing: false,
        },
        {
          id: "semester 7 elective group c",
          detail: {
            Code: "CSE23",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "PMEE",
            Name: "PMEE Group C",
            Semester: 5,
            isDayDone: [false, false, false, false, false, false],
            noOfTheoryTeachers: 1,
            Professors: ["Veena G.S.", "Dr. T.N.R.Kumar", "", ""],
          },
          isEditing: false,
        },
      ],
    },
  },

  oddCycleOpenElectives: {
    sem5: {
      newProfessor: [2],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [
        {
          id: "Open Elective sem 5",
          detail: {
            Code: "CSOE51",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "OE5",
            Name: "Open Elective sem 5",
            Semester: 5,
            Professors: [
              "Hanumantha Raju R.",
              "Pramod Sunagar",
              "",
              "",
              "",
              "",
            ],
            classTimings: {
              RegularClass1: { Time: "9:00 AM", Day: "Saturday" },
              RegularClass2: { Time: "9:55 AM", Day: "Saturday" },
              RegularClass3: { Time: "11:05 AM", Day: "Saturday" },
            },
          },
          isEditing: false,
        },
      ],
    },
    sem7: {
      newProfessor: [2],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects: [
        {
          id: "Open Elective Sem 7",
          detail: {
            Code: "CSOE71",
            Credits: { Theory: 3, Tutorial: 0, Lab: 0 },
            Abbreviation: "OE7",
            Name: "Open Elective Sem 7",
            Semester: 7,
            Professors: [
              "Dr. Divakar Harekal",
              "Ganeshayya Shidaganti",
              "",
              "",
              "",
              "",
            ],
            classTimings: {
              RegularClass1: { Time: "9:00 AM", Day: "Saturday" },
              RegularClass2: { Time: "9:55 AM", Day: "Saturday" },
              RegularClass3: { Time: "11:05 AM", Day: "Saturday" },
            },
          },
          isEditing: false,
        },
      ],
    },
  },

  /*------------------------------------dummy data--------------------------------*/
};
