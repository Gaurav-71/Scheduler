<template>
  <div class="modal-container">
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomInUp"
      appear
    >
      <div class="modal">
        <img src="../../assets/Professors/add.svg" alt="add" />
        <div class="line"></div>
        <form class="form-data">
          <div class="flex">
            <div class="field field1">
              <label for="name">Student name</label>
              <br />
              <input
                v-model="name"
                type="text"
                name="name"
                class="name"
                placeholder="Enter name"
              />
            </div>
            <div style="margin-left: auto" class="field field1">
              <label for="name">University Seat Number</label>
              <br />
              <input
                v-model="usn"
                type="text"
                name="name"
                class="name"
                placeholder="Enter USN"
              />
            </div>
          </div>
          <div class="flex">
            <div class="field">
              <label for="name">Phone Number</label>
              <br />
              <input
                v-model="phNo"
                type="text"
                name="name"
                class="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="field">
              <label for="name">Batch Number</label>
              <br />
              <input
                v-model="batch"
                type="number"
                name="batch"
                class="batch"
                placeholder="Enter Batch Number"
              />
            </div>
          </div>
          <div class="flex">
            <div class="field">
              <label for="designation">Semester</label>
              <br />
              <input
                v-model="semester"
                list="sem"
                name="sem"
                class="sem"
                placeholder="Enter Semester"
              />
              <datalist id="sem">
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
              </datalist>
            </div>
            <div class="field">
              <label for="designation">Section</label>
              <br />
              <input
                v-model="section"
                list="section"
                name="section"
                class="sem"
                placeholder="Enter Section"
              />
              <datalist id="section">
                <option value="A"></option>
                <option value="B"></option>
                <option value="C"></option>
              </datalist>
            </div>
          </div>
        </form>
        <div
          class="btn"
          style="margin-bottom: 2rem; margin-top: 0"
          @click="addStudent"
        >
          Save
        </div>
      </div>
    </transition>
    <img
      src="../../assets/Common/delete.svg"
      alt="cancel"
      @click="$store.state.showStudentModal = false"
      class="cancel"
    />
  </div>
</template>

<script>
/* eslint-disable */
import Error from "./Error";

export default {
  components: {
    Error,
  },
  data() {
    return {
      name: "",
      usn: "",
      section: "",
      phNo: "",
      batch: null,
      semester: null,
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: "Please fill all data fields",
        },
      },
    };
  },
  methods: {
    addStudent() {
      if (
        this.name.trim() == "" ||
        this.semester.trim() == "" ||
        this.usn.trim() == "" ||
        this.phNo.trim() == "" ||
        this.batch == null ||
        this.section.trim() == ""
      ) {
        this.error.isVisible = true;
      } else {
        this.$store.state.showStudentModal = false;
        let data = {
          name: this.name,
          section :this.section,
          phNo: this.phNo,
          usn: this.usn,
          batch: this.batch,
          semester: this.semester 
        };
        this.$store
          .dispatch("addStudent", data)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          })
        this.name = "";
        this.usn = "";
        this.batch = "";
        this.semester = "";
        this.phNo = "";
        this.section = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/modal";
.modal {
  form {
    width: 90%;
    text-align: left;
    margin: 1rem;
    .flex {
      width: 100%;
      display: grid;
      grid-template-columns: 50% 50%;
      .field {
        width: 100%;
        margin: 1rem 0;
        label {
          font-weight: bold;
          color: $primary-dark;
        }
        input {
          width: 88%;
          @include ipad-portrait {
            width: 88%;
          }
        }
        .name {
          background-image: url("../../assets/Professors/Modal/name.svg");
        }
        .batch {
          background-image: url("../../assets/Students/skills.svg");
        }
        .phone {
          background-image: url("../../assets/Students/phone.svg");
        }
        .sem {
          background-image: url("../../assets/Courses/Modal/semester.svg");
        }
      }
    }
  }
}
</style>