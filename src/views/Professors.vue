<template>
  <div class="professors">
    <transition name="fade" appear>
      <Alert v-if="warning.isVisible" :obj="warning" :remove="warningRemoveObj" />
    </transition>
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <transition name="fade" appear>
      <AddProfessor v-if="$store.state.showProfessorModal" />
    </transition>
    <Heading :obj="headingObj" />
    <transition v-if="!$store.state.isLoadingProfessors" name="fade" appear>
      <div class="container">
        <div class="search-bar">
          <input type="search" placeholder="Search Professors" v-model="search"/>
          <img
            src="../assets/Professors/add.svg"
            alt="add"
            title="Add New Professor"
            @click="$store.state.showProfessorModal = true"
            class="shake"
          />
        </div>
        <transition
          name="custom-classes-transition"
          enter-active-class="animated bounceInUp"
          appear
        >
          <div class="results">
            <div v-for="(professor, index) in searchProfessors" :key="index">
              <transition
                name="flip"
                enter-active-class="animated flipInY"
                leave-active-class="animated flipOutY"
                v-on:afterLeave="afterLeave"
              >
                <div v-if="!professor.isEditing" class="card-container grow">
                  <div class="card">
                    <img
                      src="../assets/Professors/male.svg"
                      alt="male"
                      v-if="professor.detail.Gender == 'M'"
                    />
                    <img
                      src="../assets/Professors/female.svg"
                      alt="female"
                      v-else-if="professor.detail.Gender == 'F'"
                    />
                    <img
                      src="../assets/Professors/other.svg"
                      alt="male"
                      v-else-if="professor.detail.Gender == 'O'"
                    />
                    <div class="details">
                      <h3>{{ professor.detail.Name }}</h3>
                      <h5>{{ professor.detail.Designation }}</h5>
                    </div>
                  </div>
                  <div class="actions">
                    <img
                      src="../assets/Common/edit.svg"
                      alt="edit"
                      title="Edit Professor Details"
                      @click="edit(professor)"
                      class="grow-btn"
                    />
                    <img
                      src="../assets/Common/delete.svg"
                      @click="removeProfessor(professor)"
                      alt="delete"
                      title="Delete Professor"
                      class="grow-btn"
                    />
                  </div>
                </div>
              </transition>
              <div v-if="showEditing">
                <div v-if="professor.isEditing" class="card-container grow">
                  <div class="card">
                    <img src="../assets/Common/edit.svg" alt="edit-mode" />
                    <div class="details-edit">
                      <input type="text" v-model="name" />
                      <input type="text" v-model="designation" />
                    </div>
                  </div>
                  <div class="actions-edit">
                    <form>
                      <input type="radio" id="male" name="gender" value="M" v-model="gender" />
                      <label for="male">Male</label>
                      <input type="radio" id="female" name="gender" value="F" v-model="gender" />
                      <label for="female">Female</label>
                      <input type="radio" id="other" name="gender" value="O" v-model="gender" />
                      <label for="other">Other</label>
                    </form>
                    <img
                      @click="saveDetails(professor)"
                      src="../assets/Common/save.svg"
                      alt="save"
                      title="Save Edited Details"
                      class="grow-btn"
                    />
                    <img
                      @click="cancelEdit(professor)"
                      src="../assets/Common/cancel.svg"
                      alt="cancel"
                      title="Cancel Editing"
                      class="grow-btn"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchProfessors.length == 0" class="error">
              <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                appear
              >
                <img src="../assets/Common/error.svg" alt="error" />
              </transition>
              <h2>Sorry, we could'nt find any professor named {{search}}</h2>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <Loading v-else :message="'Fetching Department Professors'" />
  </div>
</template>

<script>
import AddProfessor from "../components/Modals/AddProfessor.vue";
import Heading from "../components/Design/Heading";
import Alert from "../components/Modals/Alert";
import Error from "../components/Modals/Error";
import Loading from "../components/Loading/Pulse";

export default {
  components: {
    AddProfessor,
    Heading,
    Alert,
    Error,
    Loading
  },
  data() {
    return {
      headingObj: {
        h1: "Professors",
        h4:
          "A list of all professors in the department. Add, Modify or Delete a professor at will",
        src: "professors.svg"
      },
      warning: {
        isVisible: false,
        message: "Are you sure you want to delete this professor permanently ?",
        button: "Delete Professor",
        number: 2
      },
      error: {
        isVisible: false,
        message: {
          code: "Missing-information",
          message: "Please fill all data fields"
        }
      },
      warningRemoveObj: null,
      search: "",
      unsubscribe: null,
      name: "",
      designation: "",
      gender: "",
      showEditing: false
    };
  },
  created() {
    this.$store.state.sidebarCounter = 4;
    localStorage.setItem("currentRoute", this.$route.path);
  },
  methods: {
    removeProfessor(id) {
      this.warningRemoveObj = id;
      this.warning.isVisible = true;
    },
    edit(professor) {
      professor.isEditing = true;
      this.name = professor.detail.Name;
      this.designation = professor.detail.Designation;
      this.gender = professor.detail.Gender;
    },
    saveDetails(professor) {
      if (
        this.name.trim() == "" ||
        this.designation.trim() == "" ||
        this.gender.trim() == ""
      ) {
        this.error.isVisible = true;
      } else {
        let data = {
          id: professor.id,
          Name: this.name,
          Designation: this.designation,
          Gender: this.gender
        };
        this.$store
          .dispatch("updateProfessorBio", data)
          .then(() => {
            this.name = "";
            this.designation = "";
            this.gender = "";
            professor.isEditing = false;
            this.showEditing = false;
          })
          .catch(err => {
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
    }
  },
  computed: {
    searchProfessors: function() {
      return this.$store.getters.getProfessorList.filter(professor => {
        let professorLowerCase = professor.detail.Name.toLowerCase();
        return professorLowerCase.match(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    this.$store.state.isLoadingProfessors = true;
    this.$store
      .dispatch("loadProfessorList")
      .then(repsonse => {
        this.unsubscribe = repsonse;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/searchBar";
@import "../scss/custom-animations";

.professors {
  margin-top: 4.5rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;  
  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    .card-container {
      width: 20rem;
      height: 12rem;
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
        justify-content: flex-end;
        background-image: $gradient;
        padding: 0.6rem;
        border-bottom-left-radius: 0.9rem;
        border-bottom-right-radius: 0.9rem;
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
      .actions-edit {
        background: lightgray;
        justify-content: flex-end;
        form {
          margin-right: 0.6rem;
          input {
            margin: 0.3rem;
            vertical-align: middle;
          }
          label {
            font-size: small;
            vertical-align: middle;
          }
        }
      }
      .details-edit {
        form {
          display: flex;
        }
        input {
          margin: 0.3rem;
          padding: 0.5rem;
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
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
