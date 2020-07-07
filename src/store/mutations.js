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
    state.professorList = [];
    state.professorList = items;
    console.log(state.professorList);
  }
};
