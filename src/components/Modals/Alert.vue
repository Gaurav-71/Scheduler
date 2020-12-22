<template>
  <div v-if="obj.isVisible" class="modal-container">
    <transition
      name="bounce"
      enter-active-class="animated bounceIn"
      :duration="500"
      appear
    >
      <div v-if="obj.isVisible" class="modal">
        <div class="message-container">
          <transition
            name="tada"
            enter-active-class="animated tada"
            leave-active-class="fade"
            appear
          >
            <img
              src="../../assets/Common/warning.svg"
              alt="warning"
              class="error"
            />
          </transition>
          <div class="message">
            <h2>Warning</h2>
            <h3>{{ obj.message }}</h3>
          </div>
        </div>
        <div class="line"></div>
        <div class="actions">
          <button @click="cancel()" class="btn transparent">Cancel</button>
          <button
            @click="action(obj.number)"
            class="btn red-btn"
            style="margin-left: 2rem"
          >
            {{ obj.button }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    obj: {
      isVisible: Boolean,
      message: String,
      button: String,
      number: Number,
    },
    path: Number,
    remove: Object,
  },
  methods: {
    cancel() {
      this.obj.isVisible = false;
    },
    action(type) {
      this.obj.isVisible = false;
      if (type == 1) {
        this.$store.state.isMapping = false;
        localStorage.setItem("createRouteTracker", "/timetable/create");
        this.$store.state.createRouteTracker = localStorage.getItem(
          "createRouteTracker"
        );
        this.$store.state.semester = null;
        this.$store.state.section = null;
        this.$store.state.cycle = null;
        this.$store.state.term = "";
        this.$store.state.department = "";
        if (this.path == 1) {
          this.$router.push("/timetable");
        } else if (this.path == 2) {
          this.$router.push(this.$store.state.createRouteTracker);
        } else if (this.path == 3) {
          //this.$router.push("");
          alert("Page not created yet !");
        } else if (this.path == 4) {
          this.$router.push("/timetable/professors");
        } else if (this.path == 5) {
          this.$router.push("/timetable/courses");
        } else if (this.path == 6) {
          this.$router.push("/settings");
        } else if (this.path == 7) {
          this.$router.push("/choice");
        }
      } else if (type == 2) {
        this.$store
          .dispatch("removeProfessor", this.remove.id)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      } else if (type == 3) {
        this.$store
          .dispatch("removeCourse", this.remove.id)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/modal";

.modal-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 4.5rem;
  bottom: 0;
  z-index: 101;
  background: rgba(lightgrey, 0.7);
  .modal {
    width: 50rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 2rem;
    @include ipad-portrait {
      width: 25rem;
    }
    .message-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      img {
        margin: 0 1rem 0 0;
        @include ipad-portrait {
          margin: 0;
        }
      }
      @include ipad-portrait {
        justify-content: center;
        margin: 0 3rem;
      }
      .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        margin-left: 1rem;
        @include ipad-portrait {
          align-items: center;
          margin-left: 0;
        }
        h2 {
          margin: 0;
          margin-bottom: 0.5rem;
          font-weight: bold;
          text-align: left;
          @include ipad-portrait {
            text-align: center;
          }
        }
        h3 {
          margin: 0;
          font-weight: lighter;
          color: #525a61;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: grey;
      margin: 1rem 0 0.5rem 0;
    }
    .actions {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @include ipad-portrait {
        justify-content: center;
      }
      .transparent {
        background-image: none;
        background: rgba($primary, 0.1);
        border-color: rgba($primary, 0.1);
        color: rgb(218, 55, 55);
      }
      .transparent:hover {
        background: rgba(21, 127, 135, 0.2);
      }
    }
  }
}

.red-btn {
  border-color: transparent !important;
  background-image: $gradient-red !important;
}
</style>