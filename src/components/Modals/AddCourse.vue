<template>
  <div class="modal-container">
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <div class="modal">
      <img src="../../assets/Courses/add.svg" alt="add" class="add-course" />
      <div class="line"></div>
      <form class="form-data">
        <div class="row">
          <div class="field">
            <label for="name">Course name</label>
            <input type="text" name="name" placeholder="Enter name" class="name" v-model="name" />
          </div>
          <div class="field">
            <label for="code">Course code</label>
            <input type="text" name="code" placeholder="Enter code" class="code" v-model="code" />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label for="semester">Semester</label>
            <input
              list="semesters"
              name="semester"
              placeholder="Enter semester"
              class="sem"
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
          </div>
          <div class="field">
            <label for="type">Course Abbreviation</label>
            <input name="type" placeholder="Enter abbreviation" class="type" v-model="type" />
          </div>
        </div>
        <div class="row1">
          <div class="field1">
            <label>Credits</label>
            <div class="data">
              <div class="data-field">
                <input
                  type="number"
                  name="lecture"
                  min="0"
                  max="8"
                  step="1"
                  value="0"
                  class="lecture"
                  v-model="theoryCredits"
                />
                <label for="lecture">Lecture</label>
              </div>
              <div class="data-field">
                <input
                  type="number"
                  name="tutorial"
                  min="0"
                  max="8"
                  step="1"
                  value="0"
                  class="tutorial"
                  v-model="tutorialCredits"
                />
                <label for="tutorial">Tutorial</label>
              </div>
              <div class="data-field">
                <input
                  type="number"
                  name="practicals"
                  min="0"
                  max="8"
                  step="1"
                  value="0"
                  class="lab"
                  v-model="labCredits"
                />
                <label for="practicals">Practicals</label>
              </div>
            </div>
          </div>
          <div class="btn" @click="addCourse">Save</div>
        </div>
      </form>
    </div>
    <img
      src="../../assets/Common/delete.svg"
      alt="cancel"
      @click="$store.state.showCourseModal=false"
      class="cancel"
    />
  </div>
</template>

<script>
import Error from "./Error";

export default {
  components: {
    Error
  },
  data() {
    return {
      name: "",
      code: "",
      type: "",
      semester: null,
      theoryCredits: 0,
      tutorialCredits: 0,
      labCredits: 0,
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: "Please fill all data fields"
        }
      }
    };
  },
  methods: {
    addCourse() {
      if (
        this.name.trim() == "" ||
        this.code.trim() == "" ||
        this.type.trim() == "" ||
        this.semester == null
      ) {
        this.error.isVisible = true;
      } else {
        this.$store.state.showCourseModal = false;
        let data = {
          Name: this.name,
          Code: this.code,
          Semester: this.semester,
          Credits: {
            Theory: this.theoryCredits,
            Tutorial: this.tutorialCredits,
            Lab: this.labCredits
          },
          Type: this.type
        };
        this.$store
          .dispatch("addCourse", data)
          .then(() => {})
          .catch(err => {
            console.log(err);
          });
        this.name = "";
        this.code = "";
        this.type = "";
        this.semester = 0;
        this.theoryCredits = 0;
        this.tutorialCredits = 0;
        this.labCredits = 0;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../scss/modal";
.modal {
  form {
    width: 90%;
    text-align: left;
    margin: 1rem;
    .row {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .field {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        margin: 0.7rem 0;
        label {
          margin: 0 0 0 2.5rem;
          width: 100%;
          font-weight: bold;
          color: $primary-dark;
        }
        input {
          width: 80%;
          text-indent: 34px;
        }
        .name {
          background-image: url("../../assets/Courses/Modal/name.svg");
        }
        .code {
          background-image: url("../../assets/Courses/Modal/id.svg");
        }
        .sem {
          background-image: url("../../assets/Courses/Modal/semester.svg");
        }
        .type {
          background-image: url("../../assets/Courses/Modal/type.svg");
        }
      }
    }
    .row1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 1.3rem 1rem 1.3rem;
      .field1 {
        label {
          width: 100%;
          font-weight: bold;
          color: $primary-dark;
        }
        .data {
          display: flex;
          justify-content: left;
          .data-field {
            display: flex;
            flex-direction: column;
            margin: 0 1.2rem 0 0;
            label {
              font-weight: lighter;
            }
            input {
              text-indent: 34px;
            }
            .lecture {
              background-image: url("../../assets/Courses/Modal/lecture.svg");
            }
            .tutorial {
              background-image: url("../../assets/Courses/Modal/tutorial.svg");
            }
            .lab {
              background-image: url("../../assets/Courses/Modal/lab.svg");
            }
          }
        }
      }
      .btn {
        margin-right: 2.8rem;
      }
      @include ipad-portrait {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}
</style>