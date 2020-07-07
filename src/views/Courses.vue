<template>
  <div class="professors">
    <div class="container">
      <div class="search-bar">
        <input type="search" placeholder="Search Courses" />
        <img
          src="../assets/Courses/add.svg"
          alt="add"
          title="Add New Course"
          @click="$store.state.showCourseModal = true"
        />
        <transition name="fade" appear>
          <AddCourse v-if="$store.state.showCourseModal" />
        </transition>
      </div>
      <div class="results">
        <div v-for="(course, index) in searchCourses" :key="index">
          <div v-if="!course.isEditing" class="card">
            <div class="actions">
              <img
                src="../assets/Common/edit.svg"
                alt="edit"
                title="Edit Course Details"
                @click="edit(course)"
              />
              <div class="semester">
                <img
                  src="../assets/Courses/three.svg"
                  alt="three"
                  v-if="course.detail.Semester == 3"
                />
                <img
                  src="../assets/Courses/four.svg"
                  alt="four"
                  v-else-if="course.detail.Semester == 4"
                />
                <img
                  src="../assets/Courses/five.svg"
                  alt="five"
                  v-else-if="course.detail.Semester == 5"
                />
                <img
                  src="../assets/Courses/six.svg"
                  alt="six"
                  v-else-if="course.detail.Semester == 6"
                />
                <img
                  src="../assets/Courses/seven.svg"
                  alt="seven"
                  v-else-if="course.detail.Semester == 7"
                />
                <img
                  src="../assets/Courses/eight.svg"
                  alt="eight"
                  v-else-if="course.detail.Semester == 8"
                />
              </div>
              <img
                src="../assets/Common/delete.svg"
                @click="removeCourse(course.id)"
                alt="delete"
                title="Delete Course"
              />
            </div>
            <div class="details">
              <h3>{{ course.detail.Name }}</h3>
              <h4>
                {{ course.detail.Code }} | {{ course.detail.Credits.Theory }}:{{
                  course.detail.Credits.Tutorial
                }}:{{ course.detail.Credits.Lab }} | {{ course.detail.Type }}
              </h4>
            </div>
          </div>
          <div v-else class="card">
            <div class="actions-edit">
              <img src="../assets/Common/edit.svg" alt="edit" />
              <div class="actions-group">
                <img
                  @click="saveDetails(course)"
                  src="../assets/Common/save.svg"
                  alt="save"
                  title="Save Edited Details"
                />
                <img
                  @click="course.isEditing = false"
                  src="../assets/Common/cancel.svg"
                  alt="cancel"
                  title="Cancel Editing"
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
                  style="width:2rem;"
                />
              </div>
              <div class="row">
                <label for="semester">Semester :</label>
                <input
                  list="semesters"
                  name="semester"
                  style="width: 3rem;"
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
                <label for="type">Type:</label>
                <input
                  list="type"
                  name="type"
                  v-model="type"
                  style="width: 5rem"
                />
                <datalist id="type">
                  <option value="Theory"></option>
                  <option value="Lab"></option>
                  <option value="Other"></option>
                </datalist>
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
    </div>
  </div>
</template>

<script>
import AddCourse from "../components/Modals/AddCourse.vue";

export default {
  components: {
    AddCourse,
  },
  data() {
    return {
      search: "",
      unsubscribe: null,
      name: "",
      code: "",
      type: "",
      semester: 0,
      theoryCredits: 0,
      tutorialCredits: 0,
      labCredits: 0,
    };
  },
  created() {
    this.$store.state.sidebarCounter = 5;
    localStorage.setItem("currentRoute", this.$route.path);
  },
  computed: {
    searchCourses: function() {
      return this.$store.getters.getCourseList.filter((course) => {
        let courseLowerCase = course.detail.Name.toLowerCase();
        return courseLowerCase.match(this.search.toLowerCase());
      });
    },
  },
  mounted() {
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
      this.$store
        .dispatch("removeCourse", id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    edit(course) {
      course.isEditing = true;
      this.name = course.detail.Name;
      this.code = course.detail.Code;
      this.type = course.detail.Type;
      this.semester = course.detail.Semester;
      this.theoryCredits = course.detail.Credits.Theory;
      this.tutorialCredits = course.detail.Credits.Tutorial;
      this.labCredits = course.detail.Credits.Lab;
    },
    saveDetails(course) {
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
        Type: this.type,
      };
      this.$store
        .dispatch("updateCourseDetails", data)
        .then(() => {
          this.name = "";
          this.code = "";
          this.type = "";
          this.semester = 0;
          this.theoryCredits = 0;
          this.tutorialCredits = 0;
          this.labCredits = 0;
          course.isEditing = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/searchBar";

.professors {
  margin-top: 4.5rem;
  margin-left: 5rem;
  .search-bar {
    input {
      background-image: url("../assets/Courses/search.svg");
    }
  }
  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    .card {
      width: 20rem;
      height: 12rem;
      margin: 0.6rem;
      background: white;
      border: 1px solid lightgray;
      border-radius: 1rem;
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
        height: 5rem;
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
    .card:hover {
      border: 1px solid gray;
    }
  }
}
</style>
