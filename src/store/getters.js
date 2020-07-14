export default {
  getProfessorList: (store) => {
    return store.professorList;
  },
  getCourseList: (store) => {
    return store.courseList;
  },
  getProfessorName: (store) =>{
    let names = []
    store.professorList.forEach((professor) => {
      names.push(professor.detail.Name);
    });
    return names;
  },
  getSubjectList : (store,semester) => {
    let courseList = store.courseList;
    let subjects = []
    courseList.forEach((subject)=>{
      if(subject.detail.Semester == semester)
        subjects.push(subject);
    });
    return subjects;
  },
}