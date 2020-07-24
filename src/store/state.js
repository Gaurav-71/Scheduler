export default {
  progressCounter: 1,
  
  sidebarCounter: 1,

  semester: null,

  section: null,

  cycle: null,

  createType: null,

  department: "",

  term: "",  

  showProfessorModal: false,

  showCourseModal: false,  
  
  isLoggedIn: false,

  isLoggingIn: true,
  
  isMapping: false,  

  isDownloading: false, 

  postSubscription: null,
  
  user: JSON.parse(localStorage.getItem("loggedUser")),

  currentUser: localStorage.getItem("currentUser"),

  createRouteTracker: localStorage.getItem("createRouteTracker"),

  professorList: [],

  courseList: [],
  
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

  oddCycleElectives: {
    5 : {newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects:[]},
    7 : {newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects:[]} 
  },

  evenCycleElectives: {
    6: {newProfessor: [],
      getProfessors: function(index) {
        return this.newProfessor[index];
      },
      incrementNewProfessors: function(index) {
        return this.newProfessor[index] + 1;
      },
      decrementNewProfessors: function(index) {
        return this.newProfessor[index] - 1;
      },
      subjects:[]}
  }
};
