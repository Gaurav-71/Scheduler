export default {
  signin: (state, user) => {
    state.user = user;
    state.isLoggedIn = true;
    localStorage.setItem("loggedUser", JSON.stringify(user));
  },
  logout: (state) => {
    state.user = "";
    state.isLoggedIn = false;
  },
  signup: (state, user) => {
    state.user = user;
    state.isLoggedIn = true;
    localStorage.setItem("loggedUser", JSON.stringify(user));
  },
  loadProfessorList: (state,items) => {     
    state.professorList = items;    
  },
  loadCourseList: (state,items) => {     
    state.courseList = items;    
  },
  toggleState: (state,payload) => {
    console.log(payload);
    let section = "sec" + payload.semester + payload.section;
    if(state.cycle == "Odd")
    {
      state.allOddCycleClasses[section].subjects[payload.index].detail.isToggleChecked = payload.truthValue;
    }
    else
    {
      state.allEvenCycleClasses[section].subjects[payload.index].detail.isToggleChecked = payload.truthValue;
    }
  },
  changeLoading: (state) => {
    state.isLoading = !(state.isLoading);
  }
};
