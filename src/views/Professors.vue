<template>
  <div class="professors">
    <div class="container">
      <div class="search-bar">
        <input type="search" placeholder="Search Professors" v-model="search" />
        <img
          src="../assets/Professors/add.svg"
          alt="add"
          title="Add New Professor"
          @click="$store.state.showProfessorModal = true"
        />
        <transition name="fade" appear>
          <AddProfessor v-if="$store.state.showProfessorModal" />
        </transition>
      </div>
      <div class="results">
        <div v-for="(professor, index) in searchProfessors" :key="index">
          <div v-if="!professor.isEditing" class="card">
            <div class="card-container">
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
                @click="edit(professor)"
                src="../assets/Common/edit.svg"
                alt="edit"
                title="Edit Professor Details"
              />
              <img
                src="../assets/Common/delete.svg"
                @click="removeProfessor(professor.id)"
                alt="delete"
                title="Delete Professor"
              />
            </div>
          </div>
          <div v-else class="card">
            <div class="card-container">
              <img src="../assets/Common/edit.svg" alt="edit-mode" />
              <div class="details-edit">
                <input type="text" v-model="name" />
                <input type="text" v-model="designation" />
              </div>
            </div>
            <div class="actions-edit">
              <form>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="M"
                  v-model="gender"
                />
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="F"
                  v-model="gender"
                />
                <label for="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="O"
                  v-model="gender"
                />
                <label for="other">Other</label>
              </form>
              <img
                @click="saveDetails(professor)"
                src="../assets/Common/save.svg"
                alt="save"
                title="Save Edited Details"
              />
              <img
                @click="professor.isEditing = false"
                src="../assets/Common/cancel.svg"
                alt="cancel"
                title="Cancel Editing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddProfessor from "../components/Modals/AddProfessor.vue";
export default {
  components: {
    AddProfessor,
  }, 
  data() {
    return {
      search: "",
      unsubscribe: null,
      name: "",
      designation: "",
      gender: "",
    };
  },
  created() {
    this.$store.state.sidebarCounter = 4;
    localStorage.setItem("currentRoute", this.$route.path);
  },
  methods: {
    removeProfessor(id) {
      this.$store
        .dispatch("removeProfessor", id)
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    },
    edit(professor) {
      professor.isEditing = true;
      this.name = professor.detail.Name;
      this.designation = professor.detail.Designation;
      this.gender = professor.detail.Gender;
    },
    saveDetails(professor) {
      let data = {
        id: professor.id,
        Name: this.name,
        Designation: this.designation,
        Gender: this.gender,
      };
      this.$store
        .dispatch("updateProfessorBio", data)
        .then(() => {
          this.name = "";
          this.designation = "";
          this.gender = "";
          professor.isEditing = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    searchProfessors: function() {
      return this.$store.getters.getProfessorList.filter((professor) => {
        let professorLowerCase = professor.detail.Name.toLowerCase();
        return professorLowerCase.match(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store
      .dispatch("loadProfessorList")
      .then((resp) => {
        this.unsubscribe = resp;
      })
      .catch((err) => {
        alert(err);
      });
  },
  beforeDestroy() {
    this.unsubscribe();
    this.$store.state.professorList = [];
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/searchBar";

.professors {
  margin-top: 4.5rem;
  margin-left: 5rem;
  .results {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: scroll;
    .card {
      width: 20rem;
      margin: 0.8rem;
      background: white;
      border: 1px solid lightgray;
      border-radius: 1rem;
      cursor: default;
      .card-container {
        display: flex;
        padding: 1.5rem;
        padding-bottom: 1.1rem;
        img {
          width: 80px;
          height: 80px;
        }
        .details {
          padding: 1.4rem 0 0 1rem;
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
        // background: $primary-light;
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
    .card:hover {
      border: 1px solid gray;
    }
  }
}
</style>
