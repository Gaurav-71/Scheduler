<template>
  <div class="modal-container">
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <transition name="custom-classes-transition" enter-active-class="animated zoomInUp" appear>
      <div class="modal">
        <img src="../../assets/Professors/add.svg" alt="add" />
        <div class="line"></div>
        <form class="form-data">
          <div class="field1">
            <label for="name">Professor name</label>
            <br />
            <input v-model="name" type="text" name="name" placeholder="Enter name" />
          </div>
          <div class="field2">
            <label for="designation">Designation</label>
            <br />
            <input
              v-model="designation"
              list="designation"
              name="designation"
              placeholder="Enter designation"
            />
            <datalist id="designation">
              <option value="Head Of Department"></option>
              <option value="Professor"></option>
              <option value="Associate Professor"></option>
              <option value="Assistant Professor"></option>
            </datalist>
          </div>
          <div class="field3">
            <div class="col1">
              <label>Gender</label>
              <form>
                <input type="radio" id="male" name="gender" value="M" v-model="gender" />
                <div class="custom-label">
                  <img src="../../assets/Professors/Modal/male.svg" alt="male" />
                  <label for="male">Male</label>
                </div>
                <input type="radio" id="female" name="gender" value="F" v-model="gender" />
                <div class="custom-label">
                  <img src="../../assets/Professors/Modal/female.svg" alt="male" />
                  <label for="female">Female</label>
                </div>
                <input type="radio" id="other" name="gender" value="O" v-model="gender" />
                <div class="custom-label">
                  <img src="../../assets/Professors/other.svg" alt="male" />
                  <label for="other">Other</label>
                </div>
              </form>
            </div>
            <div class="btn" @click="addProfessor">Save</div>
          </div>
        </form>
      </div>
    </transition>
    <img
      src="../../assets/Common/delete.svg"
      alt="cancel"
      @click="$store.state.showProfessorModal=false"
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
      gender: "",
      designation: "",
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
    addProfessor() {
      if (
        this.name.trim() == "" ||
        this.gender.trim() == "" ||
        this.designation.trim() == ""
      ) {
        this.error.isVisible = true;
      } else {
        this.$store.state.showProfessorModal = false;
        let data = {
          Name: this.name,
          Gender: this.gender,
          Designation: this.designation,
          Monday: ["", "", "", "", "", "", ""],
          Tuesday: ["", "", "", "", "", "", ""],
          Wednesday: ["", "", "", "", "", "", ""],
          Thursday: ["", "", "", "", "", "", ""],
          Friday: ["", "", "", "", "", "", ""],
          Saturday: ["", "", "", "", "", "", ""]
        };
        this.$store
          .dispatch("addProfessor", data)
          .then(() => {})
          .catch(err => {
            console.log(err);
          });
        this.name = "";
        this.gender = "";
        this.designation = "";
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
    .field1,
    .field2 {
      margin: 1rem 0;
      label {
        font-weight: bold;
        color: $primary-dark;
      }
      input {
        width: 95%;
        @include ipad-portrait {
          width: 88%;
        }
        background-image: url("../../assets/Professors/Modal/name.svg");
      }
    }
    .field2 {
      input {
        background-image: url("../../assets/Professors/Modal/designation.svg");
      }
    }
    .field3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      label {
        font-weight: bold;
        color: $primary-dark;
      }
      .col1 {
        form {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          @include ipad-portrait {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-right: 0;
            margin-left: 0;
          }
          .custom-label {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 2.1rem 0 0.3rem;
            img {
              width: 40px;
              height: 40px;
              margin: 0.3rem;
              @include ipad-portrait {
                width: 35px;
              }
              cursor: default;
            }
            label {
              font-weight: lighter;
            }
          }
        }
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