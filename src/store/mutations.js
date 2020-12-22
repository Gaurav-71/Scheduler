/* eslint-disable */

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
  setCode: (state, code) => {
    state.code = code;
  },
  updateDisplayName: (state, user) => {
    state.user = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
    };
    localStorage.setItem("loggedUser", JSON.stringify(state.user));
  },
  loadProfessorList: (state, items) => {
    state.professorList = items;
    state.isLoadingProfessors = false;
  },
  loadCourseList: (state, items) => {
    state.courseList = items;
    state.isLoadingCourses = false;
  },
  toggleState: (state, payload) => {
    console.log(payload);
    let section = "sec" + payload.semester + payload.section;
    if (state.cycle == "Odd") {
      state.allOddCycleClasses[section].subjects[
        payload.index
      ].detail.isToggleChecked = payload.truthValue;
    } else {
      state.allEvenCycleClasses[section].subjects[
        payload.index
      ].detail.isToggleChecked = payload.truthValue;
    }
  },
};
