<template>
  <div class="modal-container">
    <div class="modal">
      <img src="../assets/Courses/add.svg" alt="add" />
      <div class="line"></div>
      <form>
        <div class="row">
          <div class="field">
            <label for="name">Course name</label>
            <input type="text" name="name" placeholder="Enter name" class="name" />
          </div>
          <div class="field">
            <label for="code">Course code</label>
            <input type="text" name="code" placeholder="Enter code" class="code" />
          </div>
        </div>
        <div class="row">
          <div class="field">
            <label for="semester">Semester</label>
            <input list="semesters" name="semester" placeholder="Enter semester" class="sem" />
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
          <div class="field">
            <label for="type">Course type</label>
            <input list="type" name="type" placeholder="Enter course type" class="type" />
            <datalist id="type">
              <option value="Theory"></option>
              <option value="Lab"></option>
              <option value="Other"></option>
            </datalist>
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
                />
                <label for="practicals">Practicals</label>
              </div>
            </div>
          </div>
          <div class="btn" @click="$store.state.showCourseModal=false">Save</div>
        </div>
      </form>
    </div>
    <img src="../assets/Common/delete.svg" alt="cancel" @click="$store.state.showCourseModal=false" />
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/modal";
.modal {
  form {
    width: 90%;
    text-align: left;
    margin: 1rem;
    .row {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .field {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        margin: 1rem 0;
        label {
          margin: 0 0 0 2.5rem;
          width: 100%;
          height: 100%;
          font-weight: bold;
          color: $primary-dark;
        }
        input {
          width: 80%;
          text-indent: 34px;
        }
        .name {
          background-image: url("../assets/Courses/Modal/name.svg");
        }
        .code {
          background-image: url("../assets/Courses/Modal/id.svg");
        }
        .sem {
          background-image: url("../assets/Courses/Modal/semester.svg");
        }
        .type {
          background-image: url("../assets/Courses/Modal/type.svg");
        }
      }
    }
    .row1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 1.3rem 1rem 1.3rem;
      .field1 {
        label {
          width: 100%;
          height: 100%;
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
              background-image: url("../assets/Courses/Modal/lecture.svg");
            }
            .tutorial {
              background-image: url("../assets/Courses/Modal/tutorial.svg");
            }
            .lab {
              background-image: url("../assets/Courses/Modal/lab.svg");
            }
          }
        }
      }
      .btn {
        margin-right: 2.5rem;
      }
    }
  }
}
</style>