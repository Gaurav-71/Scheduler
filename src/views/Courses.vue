<template>
  <div class="professors">
    <div class="container">
      <div class="search-bar">
        <input type="search" placeholder="Search Courses" />
        <img src="../assets/Courses/add.svg" alt="add" />
      </div>
      <div class="results">
        <div v-for="(course,index) in courses" :key="index">
          <div v-if="index!=4" class="card">
            <div class="actions">
              <img src="../assets/Professors/edit.svg" alt="edit" />
              <div class="semester">
                <img src="../assets/Courses/three.svg" alt="three" v-if="course.semester=='three'" />
                <img
                  src="../assets/Courses/four.svg"
                  alt="four"
                  v-else-if="course.semester=='four'"
                />
                <img
                  src="../assets/Courses/five.svg"
                  alt="five"
                  v-else-if="course.semester=='five'"
                />
                <img src="../assets/Courses/six.svg" alt="six" v-else-if="course.semester=='six'" />
                <img
                  src="../assets/Courses/seven.svg"
                  alt="seven"
                  v-else-if="course.semester=='seven'"
                />
                <img
                  src="../assets/Courses/eight.svg"
                  alt="eight"
                  v-else-if="course.semester=='eight'"
                />
              </div>
              <img src="../assets/Professors/delete (3).svg" alt="delete" />
            </div>
            <div class="details">
              <h3>{{course.name}}</h3>
              <h4>{{course.code}} | {{course.lecture}}:{{course.tutorial}}:{{course.practical}} | {{course.type}}</h4>
            </div>
          </div>
          <div v-else class="card">
            <div class="actions-edit">
              <img src="../assets/Professors/save.svg" alt="save" />
              <div class="semester">
                <img src="../assets/Courses/edit.svg" alt="edit" />
              </div>
              <img src="../assets/Professors/cancel.svg" alt="cancel" />
            </div>
            <div class="details-edit">
              <div class="row">
                <input type="text" v-model="course.name" style="width: 7rem" />
                <input type="text" v-model="course.code" style="width:2rem;" />
                <input list="type" v-model="course.type" style="width: 5rem" />
                <datalist id="type">
                  <option value="Theory"></option>
                  <option value="Lab"></option>
                  <option value="Other"></option>
                </datalist>
              </div>
              <div class="row">
                <label for="lecture">L:</label>
                <input
                  type="number"
                  id="lecture"
                  name="lecture"
                  min="0"
                  max="8"
                  step="1"
                  value="0"
                  style="width: 2rem"
                  v-model="course.lecture"
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
                  v-model="course.tutorial"
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
                  v-model="course.practical"
                />
                <input list="semesters" name="semester" style="width: 3rem;" v-model="course.semester"/>
                <datalist id="semesters">
                  <option value="First Semester"></option>
                  <option value="Second Semester"></option>
                  <option value="Third Semester"></option>
                  <option value="Fourth Semester"></option>
                  <option value="Fifth Semester"></option>
                  <option value="Sixth Semester"></option>
                  <option value="Seventh Semester"></option>
                  <option value="Eight Semester"></option>
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          name: "Engineering Mathematics-IV",
          code: "CS41",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "three"
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "six"
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "eight"
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Design and Analysis of Algorithms",
          code: "CS42",
          lecture: 3,
          tutorial: 1,
          practical: 0,
          type: "Theory",
          semester: "four"
        },
        {
          name: "Microprocessors and Microcontrollers",
          code: "CS43",
          lecture: 3,
          tutorial: 0,
          practical: 1,
          type: "Theory",
          semester: "four"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/common";

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
        background: rgba(128, 128, 128, 0.5);
        img {
          border: 2px solid white;
          border-radius: 50%;
        }
      }
      .details-edit {
        .row {
          display: flex;
          justify-content: center;
          align-items: center;
          input {
            margin: 0.5rem 0.3rem;
            padding: 0.45rem;
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