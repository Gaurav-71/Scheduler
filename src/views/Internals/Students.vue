<template>
  <div class="students">
    <transition name="fade" appear>
      <Alert
        v-if="warning.isVisible"
        :obj="warning"
        :remove="warningRemoveObj"
      />
    </transition>
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <transition name="fade" appear>
      <AddStudent v-if="$store.state.showStudentModal" />
    </transition>
    <Heading :obj="headingObj" />
    <transition v-if="!$store.state.isLoadingStudents" name="fade" appear>
      <div class="container">
        <div class="search-bar">
          <input
            type="search"
            placeholder="Search Students"
            v-model="search"
            class="sp"
          />
          <img
            src="../../assets/Professors/add.svg"
            alt="add"
            title="Add New Student"
            @click="$store.state.showStudentModal = true"
            class="shake"
          />
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInUp"
          appear
        >
          <div class="results">
            <div v-for="(student, index) in searchStudents" :key="index">
              <transition
                name="flip"
                enter-active-class="animated flipInY"
                leave-active-class="animated flipOutY"
                v-on:afterLeave="afterLeave"
              >
                <div v-if="!student.isEditing" class="card-container grow">
                  <div class="card">
                    <img
                      src="../../assets/Students/3.svg"
                      alt="three"
                      v-if="student.sem == 3"
                    />
                    <img
                      src="../../assets/Students/4.svg"
                      alt="four"
                      v-else-if="student.sem == 4"
                    />
                    <img
                      src="../../assets/Students/5.svg"
                      alt="five"
                      v-else-if="student.sem == 5"
                    />
                    <img
                      src="../../assets/Students/6.svg"
                      alt="six"
                      v-else-if="student.sem == 6"
                    />
                    <img
                      src="../../assets/Students/7.svg"
                      alt="seven"
                      v-else-if="student.sem == 7"
                    />
                    <img
                      src="../../assets/Students/8.svg"
                      alt="eight"
                      v-else-if="student.sem == 8"
                    />
                    <div class="details">
                      <h3 style="margin: 0.5rem 0">{{ student.name }}</h3>
                      <div class="flex">
                        <h5>{{ student.sem }}{{ student.section }}</h5>
                        <h5 style="margin: 0 0.5rem">|</h5>
                        <h5>{{ student.usn }}</h5>
                        <h5 style="margin: 0 0.5rem">|</h5>
                        <h5>{{ student.phNo }}</h5>
                      </div>
                    </div>
                  </div>
                  <div class="actions">
                    <h5>Batch Number : {{ student.batch }}</h5>
                    <div class="act">
                      <img
                        src="../../assets/Common/edit.svg"
                        alt="edit"
                        title="Edit Student Details"
                        @click="edit(student)"
                        class="grow-btn"
                      />
                      <img
                        src="../../assets/Common/delete.svg"
                        @click="removeStudent(student)"
                        alt="delete"
                        title="Delete Student"
                        class="grow-btn"
                      />
                    </div>
                  </div>
                </div>
              </transition>
              <div v-if="showEditing">
                <div v-if="student.isEditing" class="card-container grow">
                  <div class="card">
                    <img src="../../assets/Common/edit.svg" alt="edit-mode" />
                    <div class="details-wrapper">
                      <div class="details-edit">
                        <input
                          type="text"
                          placeholder="Enter name"
                          v-model="student.name"
                        />
                        <input
                          type="text"
                          placeholder="Enter USN"
                          v-model="student.usn"
                        />
                      </div>
                      <div class="details-edit">
                        <input
                          type="text"
                          placeholder="Enter Phone Number"
                          v-model="student.phNo"
                        />
                        <input
                          type="text"
                          placeholder="Enter Batch"
                          v-model="student.batch"
                        />
                      </div>
                      <div class="details-edit">
                        <input
                          type="text"
                          placeholder="Enter Semester"
                          v-model="student.sem"
                        />
                        <input
                          type="text"
                          placeholder="Enter Section"
                          v-model="student.section"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="actions-edit">
                    <img
                      @click="saveDetails(student)"
                      src="../../assets/Common/save.svg"
                      alt="save"
                      title="Save Edited Details"
                      class="grow-btn"
                    />
                    <img
                      @click="cancelEdit(student)"
                      src="../../assets/Common/cancel.svg"
                      alt="cancel"
                      title="Cancel Editing"
                      class="grow-btn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchStudents.length == 0" class="error">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                appear
              >
                <img src="../../assets/Common/error.svg" alt="error" />
              </transition>
              <h2>Sorry, we could'nt find any student named {{ search }}</h2>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <Loading v-else :message="'Fetching Department Students'" />
  </div>
</template>

<script>
/* eslint-disable */
import AddStudent from "../../components/Modals/AddStudent.vue";
import Heading from "../../components/Design/Heading";
import Alert from "../../components/Modals/Alert";
import Error from "../../components/Modals/Error";
import Loading from "../../components/Loading/Pulse";

export default {
  components: {
    AddStudent,
    Heading,
    Alert,
    Error,
    Loading,
  },
  data() {
    return {
      headingObj: {
        h1: "Students",
        h4:
          "A list of all students in the department. Add, Modify or Delete a students data",
        src: "student.svg",
      },
      warning: {
        isVisible: false,
        message: "Are you sure you want to delete this student permanently ?",
        button: "Delete Student",
        number: 2,
      },
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: "Please fill all data fields",
        },
      },
      warningRemoveObj: null,
      search: "",
      unsubscribe: null,
      name: "",
      usn: "",
      showEditing: false,
    };
  },
  created() {
    localStorage.setItem("currentRoute", this.$route.path);
  },
  methods: {
    removeStudent(id) {
      this.warningRemoveObj = id;
      this.warning.isVisible = true;
    },
    edit(student) {
      student.isEditing = true;
      this.name = student.Name;
      this.designation = student.Designation;
      this.gender = student.Gender;
    },
    saveDetails(student) {
      if (
        this.name.trim() == "" ||
        this.designation.trim() == "" ||
        this.gender.trim() == ""
      ) {
        this.error.isVisible = true;
      } else {
        let data = {
          id: student.id,
          Name: this.name,
          Designation: this.designation,
          Gender: this.gender,
        };
        this.$store
          .dispatch("updateStudentBio", data)
          .then(() => {
            this.name = "";
            this.designation = "";
            this.gender = "";
            student.isEditing = false;
            this.showEditing = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    cancelEdit(course) {
      course.isEditing = false;
      this.showEditing = false;
    },
    afterLeave(el, done) {
      this.showEditing = !this.showEditing;
      //console.log(el, done);
    },
  },
  computed: {
    searchStudents: function () {
      return this.$store.getters.getStudentList;
      /*
      return this.$store.getters.getStudentList.filter((student) => {
        let studentLowerCase = student.Name.toLowerCase();
        return studentLowerCase.match(this.search.toLowerCase());
      });*/
    },
  },
  mounted() {
    /*this.$store.state.isLoadingStudents = true;
    this.$store
      .dispatch("loadStudentList")
      .then((repsonse) => {
        this.unsubscribe = repsonse;
      })
      .catch((err) => {
        console.log(err);
      });*/
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/searchBar";
@import "../../scss/custom-animations";

.students {
  margin-top: 4.5rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .results {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    overflow-y: scroll;
    .card-container {
      width: 23.5rem;
      //height: 12rem;
      overflow: hidden;
      margin: 0.8rem;
      display: grid;
      grid-template-rows: 75% 25%;
      background: white;
      border: 1px solid lightgray;
      border-radius: 1rem;
      cursor: default;
      .card {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 1.5rem;
        img {
          width: 80px;
          height: 80px;
        }
        .details {
          padding: 0 1rem;
          h3,
          h5 {
            padding: 0;
            margin: 0;
          }
          h3 {
            font-weight: 500;
            color: $primary;
          }
          h5 {
            padding-top: 0.2rem;
            font-weight: lighter;
          }
        }
      }
      .actions,
      .actions-edit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: $gradient;
        padding: 0.6rem;
        border-bottom-left-radius: 0.9rem;
        border-bottom-right-radius: 0.9rem;
        padding-left: 1.5rem;
        color: white;
        .act {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 0.5rem;
          img {
            width: 30px;
            height: 30px;
            margin: 0 0.5rem;
            cursor: pointer;
          }
          img:active {
            transform: scale(0.95);
          }
        }
      }
      .actions-edit {
        background: lightgray;
        justify-content: flex-end;

        img {
          width: 30px;
          height: 30px;
          margin: 0 0.5rem;
          cursor: pointer;
        }
        img:active {
          transform: scale(0.95);
        }
      }
      .details-wrapper {
        display: flex;
        flex-direction: column;
        .details-edit {
          display: flex;
          justify-content: space-around;
          align-items: center;
          input {
            margin: 0.3rem;
            padding: 0.5rem;
            width: 50%;
          }
        }
      }
    }
    .error {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 150px;
        height: 150px;
      }
      h2 {
        font-weight: lighter;
      }
    }
  }
}

.sp {
  background-image: url("../../assets/Professors/s.svg");
}

.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
