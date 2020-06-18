<template>
  <div class="semester">
    <div class="container">
      <div class="progress-bar">
        <div class="step" style="text-align: right;">
          <img
            src="../assets/Semester/semester.svg"
            alt="semester"
            v-bind:class="{'active-img':$store.state.progressCounter>1}"
          />
          <p v-bind:class="{'active-p':$store.state.progressCounter==1}">Class</p>
        </div>
        <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>1}"></div>
        <div class="step" style="text-align: center;">
          <img
            src="../assets/Semester/classroom.svg"
            alt="classroom"
            v-bind:class="{'active-img':$store.state.progressCounter>2}"
          />
          <p v-bind:class="{'active-p':$store.state.progressCounter==2}">Room</p>
        </div>
        <div class="line" v-bind:class="{'active-line':$store.state.progressCounter>2}"></div>
        <div class="step" style="text-align: left;">
          <img
            src="../assets/Semester/automated.svg"
            alt="automated"
            v-bind:class="{'active-img':$store.state.progressCounter>3}"
          />
          <p v-bind:class="{'active-p':$store.state.progressCounter==3}">Type</p>
        </div>
      </div>
      <div class="multiple-forms">
        <div class="card semester-section" v-if="$store.state.progressCounter==1">
          <h1>Semester & Section</h1>
          <img src="../assets/Semester/source/semester.svg" alt="semester" />
          <p>Select the semester and section of the class you want to schedule a new Timetable</p>
          <form action="#">
            <input list="semesters" name="semester" placeholder="Select Semester" />
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
            <input list="sections" name="section" placeholder="Select Sections" />
            <datalist id="sections">
              <option value="A"></option>
              <option value="B"></option>
              <option value="C"></option>
            </datalist>
          </form>
        </div>
        <div class="card classroom" v-if="$store.state.progressCounter==2">
          <h1>Classroom</h1>
          <img src="../assets/Semester/source/classroom.svg" alt="classroom" />
          <p>Choose a classroom</p>
          <input type="text" placeholder="Enter classroom name" />
        </div>
        <div class="card automated" v-if="$store.state.progressCounter==3">
          <h1>Manual or Automated ?</h1>
          <img src="../assets/Semester/source/automated.svg" alt="automated" />
          <div class="card-container">
            <div class="child-card">
              <h4>Automated</h4>
              <p>Create a new timetable for any semester automatically without any hassle.</p>
              <button>Create Automatically</button>
            </div>
            <div class="child-card">
              <h4>Manual</h4>
              <p>Create a new timetable for any semester manually without any hassle.</p>
              <button>Create Manually</button>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div
          class="btn"
          @click="$store.state.progressCounter-=1"
          v-if="$store.state.progressCounter!=1"
        >Back</div>
        <div
          class="btn"
          @click="$store.state.progressCounter+=1"
          v-if="$store.state.progressCounter!=3"
        >Next</div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Semester"
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/mediaQuery";

.semester {
  margin-top: 5.7rem;
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  .container {
    border-radius: 2rem;
    width: 85vw;
    min-height: 550px;
    display: grid;
    grid-template-rows: 20% 70% 10%;
    @include ipad-portrait {
      width: 100vw;
      // height: 850px;
    }
    .progress-bar {
      height: 100%;
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: top;
      .step {
        img,
        .active-img {
          width: 3.3rem;
          height: 3.3rem;
          border-radius: 50%;
          background-color: lightgray;
          transition: background-image 1s;
        }
        p {
          margin: 0;
          text-align: center;
          color: black;
          font-weight: lighter;
        }
        .active-p {
          color: $primary;
          font-weight: bold;
        }
      }
      .line,
      .active-line {
        width: 8rem;
        height: 3px;
        border: 1px solid $gradient-progress-bar;
        background: lightgray;
        margin-top: 1.6rem;
        transition: background-image 1s;
      }
      .active-img {
        transition: background-image 1s;
        background-image: $gradient;
      }
      .active-line {
        transition: background-image 1s;
        background-image: $gradient;
      }
    }
    .multiple-forms {
      padding: 0 7rem 0 7rem;
      .card {
        height: 100%;
        width: 100%;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
        text-align: center;
        h1 {
          margin: 0;
          text-align: center;
          padding: 1.5rem;
          background-image: $gradient;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          color: white;
          font-weight: 100;
        }
        img {
          width: 80px;
          height: 80px;
          margin: 1rem;
        }
        p {
          margin: 1rem;
          text-align: center;
          font-weight: bold;
        }
        input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 1rem 1rem;
        }
      }
      .semester-section {
        form {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
      .classroom {
        input {
          width: 70%;
        }
        input::placeholder {
          text-align: center;
        }
      }
      .automated {
        img {
          width: 65px;
          height: 65px;
          @include ipad-portrait {
            display: none;
          }
        }
        .card-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          @include ipad-portrait {
            margin: 1rem 1rem 3rem 1rem;
          }
          .child-card {
            width: 20rem;
            height: 10rem;
            border: 1px solid grey;
            border-radius: 0.5rem;
            margin: 0 1rem 1rem 1rem;
            h4 {
              margin: 0.8rem;
            }
            p {
              font-weight: lighter;
            }
            button {
              width: 100%;
              padding: 0.89rem;
              border-bottom-left-radius: 0.5rem;
              border-bottom-right-radius: 0.5rem;
              border: none;
              background-image: $gradient;
              cursor: pointer;
              color: white;
              font-size: 0.9rem;
            }
            button:active {
              transform: scale(1.01);
            }
            button:focus {
              outline: none;
            }
          }
        }
      }
    }
    nav {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      .btn {
        margin: 0.7rem;
        margin-top: 2rem;
        border-radius: 20px;
        border: 1px solid $primary-light;
        //background-color: $primary-light;
        background-image: $gradient;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
      }
      .btn:active {
        transform: scale(0.95);
      }
      .btn:focus {
        outline: none;
      }
    }
  }
}
</style>