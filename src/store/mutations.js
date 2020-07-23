export default {
  signin: (state, user) => {
    state.user = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,            
    };
    state.isLoggedIn = true;
    localStorage.setItem("loggedUser", JSON.stringify(state.user));
  },
  logout: (state) => {
    state.user = "";
    state.isLoggedIn = false;
  },
  signup: (state, user) => {
    state.user = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,            
    };
    state.isLoggedIn = true;
    localStorage.setItem("loggedUser", JSON.stringify(state.user));
  },
  updateDisplayName: (state,user) => {    
    state.user = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,            
    };
    localStorage.setItem("loggedUser", JSON.stringify(state.user));
  },
  loadProfessorList: (state, items) => {
    state.professorList = items;
  },
  loadCourseList: (state, items) => {
    state.courseList = items;
  },
};
