<template>
  <div class="courses">
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
      <AddCourse v-if="$store.state.showCourseModal" />
    </transition>
    <Heading :obj="headingObj" />
    <transition v-if="!$store.state.isLoadingCourses" name="fade" appear>
      <div class="container" id="search-courses">
        <div class="search-bar">
          <input type="search" placeholder="Search Courses" v-model="search" />
          <img
            src="../../assets/Courses/add.svg"
            alt="add"
            title="Add New Course"
            @click="$store.state.showCourseModal = true"
            class="shake"
          />
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInUp"
          appear
        >
          <div class="results">
            <div v-for="(course, index) in searchCourses" :key="index">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated flipInY"
                leave-active-class="animated flipOutY"
                v-on:afterLeave="afterLeave"
              >
                <div v-if="!course.isEditing" class="card grow">
                  <div class="actions">
                    <img
                      src="../../assets/Common/edit.svg"
                      alt="edit"
                      title="Edit Course Details"
                      @click="edit(course)"
                      class="grow-btn"
                    />
                    <div class="semester">
                      <img
                        src="../../assets/Courses/three.svg"
                        alt="three"
                        v-if="course.detail.Semester == 3"
                      />
                      <img
                        src="../../assets/Courses/four.svg"
                        alt="four"
                        v-else-if="course.detail.Semester == 4"
                      />
                      <img
                        src="../../assets/Courses/five.svg"
                        alt="five"
                        v-else-if="course.detail.Semester == 5"
                      />
                      <img
                        src="../../assets/Courses/six.svg"
                        alt="six"
                        v-else-if="course.detail.Semester == 6"
                      />
                      <img
                        src="../../assets/Courses/seven.svg"
                        alt="seven"
                        v-else-if="course.detail.Semester == 7"
                      />
                      <img
                        src="../../assets/Courses/eight.svg"
                        alt="eight"
                        v-else-if="course.detail.Semester == 8"
                      />
                    </div>
                    <img
                      src="../../assets/Common/delete.svg"
                      @click="removeCourse(course)"
                      alt="delete"
                      title="Delete Course"
                      class="grow-btn"
                    />
                  </div>
                  <div class="details">
                    <h3>{{ course.detail.Name }}</h3>
                    <h4>
                      {{ course.detail.Code }} |
                      {{ course.detail.Credits.Theory }}:{{
                        course.detail.Credits.Tutorial
                      }}:{{ course.detail.Credits.Lab }} |
                      {{ course.detail.Abbreviation }}
                    </h4>
                  </div>
                </div>
              </transition>
              <div v-if="showEditing">
                <div v-if="course.isEditing" class="card grow">
                  <div class="actions-edit">
                    <img src="../../assets/Common/edit.svg" alt="edit" />
                    <div class="actions-group">
                      <img
                        @click="saveDetails(course)"
                        src="../../assets/Common/save.svg"
                        alt="save"
                        title="Save Edited Details"
                        class="grow-btn"
                      />
                      <img
                        @click="cancelEdit(course)"
                        src="../../assets/Common/cancel.svg"
                        alt="cancel"
                        title="Cancel Editing"
                        class="grow-btn"
                      />
                    </div>
                  </div>
                  <div class="details-edit">
                    <div class="row">
                      <label for="name">Name :</label>
                      <input
                        type="text"
                        name="name"
                        v-model="name"
                        style="width: 7rem"
                      />
                      <label for="code">Code :</label>
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        style="width: 2rem"
                      />
                    </div>
                    <div class="row">
                      <label for="semester">Sem :</label>
                      <input
                        list="semesters"
                        name="semester"
                        style="width: 1.5rem"
                        v-model="semester"
                      />
                      <datalist id="semesters">
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                      </datalist>
                      <label for="type">Abbreviation:</label>
                      <input
                        list="text"
                        name="abbreviation"
                        v-model="abbreviation"
                        style="width: 5rem"
                      />
                    </div>
                    <div class="row">
                      <label for="lecture">Credits : L:</label>
                      <input
                        type="number"
                        id="lecture"
                        name="lecture"
                        min="0"
                        max="8"
                        step="1"
                        value="0"
                        style="width: 2rem"
                        v-model="theoryCredits"
                      />
                      <label for="tutorial">T:</label>
                      <input
                        type="number"
                        id="lecture"
                        name="tutorial"
                        min="0"
                        max="8"
                        step="1"
                        value="0"
                        style="width: 2rem"
                        v-model="tutorialCredits"
                      />
                      <label for="practical">P:</label>
                      <input
                        type="number"
                        id="lecture"
                        name="practical"
                        min="0"
                        max="8"
                        step="1"
                        value="0"
                        style="width: 2rem"
                        v-model="labCredits"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchCourses.length == 0" class="error">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated bounceInUp"
                appear
              >
                <img src="../../assets/Common/error.svg" alt="error" />
              </transition>
              <h2>Sorry, we could'nt find any course named {{ search }}</h2>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <Loading v-else :message="'Fetching Department Courses'" />
  </div>
</template>

<script>
import AddCourse from "../../components/Modals/AddCourse.vue";
import Heading from "../../components/Design/Heading";
import Alert from "../../components/Modals/Alert";
import Error from "../../components/Modals/Error";
import Loading from "../../components/Loading/Pulse";

export default {
  components: {
    AddCourse,
    Heading,
    Alert,
    Error,
    Loading,
  },
  data() {
    return {
      headingObj: {
        h1: "Courses",
        h4:
          "A list of all courses taught by the department. Add, Modify or Delete a course at will",
        src: "books.svg",
      },
      warning: {
        isVisible: false,
        message: "Are you sure you want to delete this course permanently ?",
        button: "Delete Course",
        number: 3,
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
      code: "",
      abbreviation: "",
      semester: 0,
      theoryCredits: 0,
      tutorialCredits: 0,
      labCredits: 0,
      showEditing: false,
    };
  },
  created() {
    localStorage.setItem("currentRoute", this.$route.path);
  },
  computed: {
    searchCourses: function () {
      return this.$store.getters.getCourseList.filter((course) => {
        let courseLowerCase = course.detail.Name.toLowerCase();
        return courseLowerCase.match(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.state.isLoadingCourses = true;
    this.$store
      .dispatch("loadCourseList")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });
  },
  methods: {
    removeCourse(id) {
      this.warningRemoveObj = id;
      this.warning.isVisible = true;
    },
    edit(course) {
      course.isEditing = true;
      this.name = course.detail.Name;
      this.code = course.detail.Code;
      this.abbreviation = course.detail.Abbreviation;
      this.semester = course.detail.Semester;
      this.theoryCredits = course.detail.Credits.Theory;
      this.tutorialCredits = course.detail.Credits.Tutorial;
      this.labCredits = course.detail.Credits.Lab;
    },
    saveDetails(course) {
      this.error.isVisible = false;
      if (
        this.name.trim() == "" ||
        this.code.trim() == "" ||
        this.semester == 0 ||
        this.abbreviation.trim() == ""
      ) {
        this.error.isVisible = true;
      } else {
        let data = {
          id: course.id,
          Name: this.name,
          Code: this.code,
          Semester: this.semester,
          Credits: {
            Theory: this.theoryCredits,
            Tutorial: this.tutorialCredits,
            Lab: this.labCredits,
          },
          Abbreviation: this.abbreviation,
        };
        this.$store
          .dispatch("updateCourseDetails", data)
          .then(() => {
            this.name = "";
            this.code = "";
            this.abbreviation = "";
            this.semester = 0;
            this.theoryCredits = 0;
            this.tutorialCredits = 0;
            this.labCredits = 0;
            course.isEditing = false;
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
      console.log(el, done);
    },
  },
  beforeDestroy() {
    this.unsubscribe();
    this.$store.state.courseList = [];
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/searchBar";
@import "../../scss/custom-animations";

.courses {
  margin-top: 4.5rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .search-bar {
    input {
      background-image: url("../../assets/Courses/search.svg");
    }
  }
  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    .card {
      width: 21rem;
      height: 14rem;
      margin: 0.8rem;
      background: white;
      border: 1px solid lightgray;
      border-radius: 1rem;
      display: block;
      cursor: default;
      .actions,
      .actions-edit {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: $gradient;
        border-top-left-radius: 0.9rem;
        border-top-right-radius: 0.9rem;
        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        img:active {
          transform: scale(0.95);
        }
        .semester {
          img {
            width: 70px;
            height: 70px;
            margin: 0.5rem 1.3rem;
            border: 2px solid white;
            border-radius: 50%;
            cursor: auto;
          }
          img:active {
            transform: none;
          }
        }
      }
      .details {
        height: 6.5rem;
        text-align: center;
        display: grid;
        grid-template-rows: auto auto;
        align-items: center;
        h3,
        h4 {
          padding: 0;
          margin: 0;
          font-weight: lighter;
        }
        h3 {
          margin: 0.7rem;
          color: $primary-dark;
        }
        h4 {
          margin-left: 0.7rem;
          color: black;
        }
      }
      .actions-edit {
        background: lightgray;
        justify-content: space-between;
        padding: 0 0.2rem;
        img {
          margin: 0.5rem;
          cursor: auto;
        }
        img:active {
          transform: none;
        }
        .actions-group {
          img {
            cursor: pointer;
          }
          img:active {
            transform: scale(0.95);
          }
        }
      }
      .details-edit {
        font-size: smaller;
        .row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          label {
            color: $primary-dark;
            font-weight: bold;
          }
          input {
            margin: 0.5rem 0.3rem;
            padding: 0.35rem;
            border: none;
            border-bottom: 1px solid black;
            font-size: small;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
