export default {
  progressCounter: 1,
  
  sidebarCounter: 1,

  semester: null,

  section: null,
<<<<<<< HEAD

  department: '',

  term: '',

  showProfessorModal: false,

  showCourseModal: false,

  cycle: null,

=======
  cycle: null,
  department: "",
  term: "",  
  showProfessorModal: false,
  showCourseModal: false,  
>>>>>>> pooh
  isLoggedIn: false,

  isLoggingIn: true,
<<<<<<< HEAD

  postSubscription: null,

  isDownloading: false,

=======
  isMapping: false,  
  isDownloading: false,  
  postSubscription: null,
>>>>>>> pooh
  user: JSON.parse(localStorage.getItem("loggedUser")),

  currentUser: localStorage.getItem("currentUser"),

  createRouteTracker: localStorage.getItem("createRouteTracker"),

  professorList: [],

  courseList: [],
<<<<<<< HEAD

=======
>>>>>>> pooh
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
