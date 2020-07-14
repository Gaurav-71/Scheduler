export default {
  progressCounter: 1,
  sidebarCounter: 1,
  semester: null,
  section: null,
  showProfessorModal: false,
  showCourseModal: false,
  cycle: null,
  isLoggedIn: false,
  isLoggingIn: true,
  postSubscription: null,
  user: JSON.parse(localStorage.getItem("loggedUser")),
  currentUser: localStorage.getItem("currentUser"),
  createRouteTracker: localStorage.getItem("createRouteTracker"),
  professorList: [],
  courseList: [],
  courses: [
    {
      name: "Engineering Mathematics-IV",
      code: "CS41",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "three",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "six",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "eight",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "four",
    },
  ],
  tempCourses: [
    {
      name: "Engineering Mathematics-IV",
      code: "CS41",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "three",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "six",
    },
    {
      name: "Data Communication",
      code: "CS44",
      lecture: 4,
      tutorial: 0,
      practical: 0,
      type: "Theory",
      semester: "eight",
    },
    {
      name: "Computer Organization",
      code: "CS45",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Software Engineering",
      code: "CS46",
      lecture: 3,
      tutorial: 0,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Algorithms Lab",
      code: "CSL47",
      lecture: 0,
      tutorial: 0,
      practical: 1,
      type: "Lab",
      semester: "four",
    },
    {
      name: "Python Lab",
      code: "CSL48",
      lecture: 0,
      tutorial: 0,
      practical: 1,
      type: "Lab",
      semester: "four",
    },
  ],
  tempCoursesLab: [
    {
      name: "Engineering Mathematics-IV",
      code: "CS41",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS42",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "three",
    },
    {
      name: "Microprocessors and Microcontrollers",
      code: "CS43",
      lecture: 3,
      tutorial: 0,
      practical: 1,
      type: "Theory",
      semester: "six",
    },
    {
      name: "Computer Organization",
      code: "CS45",
      lecture: 3,
      tutorial: 1,
      practical: 0,
      type: "Theory",
      semester: "four",
    },
    {
      name: "Algorithms Lab",
      code: "CSL47",
      lecture: 0,
      tutorial: 0,
      practical: 1,
      type: "Lab",
      semester: "four",
    },
    {
      name: "Python Lab",
      code: "CSL48",
      lecture: 0,
      tutorial: 0,
      practical: 1,
      type: "Lab",
      semester: "four",
    },
  ],
  sec3a: {
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
  },
  sec3b: {
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
  },
  sec3c: {
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
  },
  sec4a: {
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
  },
  sec4b: {
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
  },
  sec4c: {
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
  },
  sec5a: {
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
  },
  sec5b: {
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
  },
  sec5c: {
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
  },
  sec6a: {
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
  },
  sec6b: {
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
  },
  sec6c: {
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
  },
  sec7a: {
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
  },
  sec7b: {
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
  },
  sec8a: {
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
  },
  sec8b: {
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
  },

  allOddCycleClasses: {
    sec3A: {},
    sec3B: {},
    sec3C: {},

    sec5A: {},
    sec5B: {},
    sec5C: {},
    
    sec7A: {},
    sec7B: {},
  },

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
};
