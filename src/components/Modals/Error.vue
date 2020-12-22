<template>
  <div v-if="obj.isVisible" class="modal-container">
    <transition
      name="bounce"
      enter-active-class="animated bounceIn"
      :duration="500"
      appear
    >
      <div v-if="obj.isVisible" class="modal">
        <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          appear
        >
          <transition
            name="tada"
            enter-active-class="animated tada"
            leave-active-class="fade"
            appear
          >
            <img src="../../assets/Common/error.svg" alt="add" class="error" />
          </transition>
        </transition>
        <div class="message">
          <h2>{{ obj.message.code }}</h2>
          <h3>{{ obj.message.message }}</h3>
        </div>
      </div>
    </transition>
    <img
      src="../../assets/Common/delete.svg"
      alt="cancel"
      @click="handleError"
      class="cancel"
    />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    obj: {
      isVisible: Boolean,
      message: Object,
    },
    emptyStr: Boolean,
  },
  methods: {
    handleError() {
      this.obj.isVisible = false;
      if (this.emptyStr) {
        this.obj.message.message = "";
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
    width: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem 2rem;
    img {
      margin: 0 1rem 0 0;
    }
    @media (max-width: 768px) {
      justify-content: center;
      margin: 0 3rem;
    }
    .message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      @media (max-width: 768px) {
        align-content: center;
      }
      margin-left: 1rem;
      h2 {
        margin: 0;
        margin-bottom: 0.5rem;
        font-weight: bold;
        text-align: left;
        color: #3b4145;
        @media (max-width: 768px) {
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
}
</style>