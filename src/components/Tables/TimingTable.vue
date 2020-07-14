<template></template>

<script>
export default {
  props: {
    timingObject: {
      type: Object
    },
    position: Number
  },
  data() {
    return {
      labs: []
    };
  },
  mounted() {
    for (var i = 0; i < this.timingObject.subjects.length; i++) {
      if (this.timingObject.subjects[i].detail.Credits.Lab > 0) {
        this.labs.push(false);
        this.labs.push(false);
        this.labs.push(false);
      }
    }
  },
  methods: {
    makeTrue(x) {
      this.labs[x] = true;
    }
  },
  beforeDestroy() {
    console.log(this.labs);
    if (false in this.labs) {
      if (this.state.cycle == "Odd") {
        this.$emit("changeOddTiming", {
          index: this.position,
          trueValue: false
        });
      } else {
        this.$emit("changeEvenTiming", {
          index: this.position,
          trueValue: false
        });
      }
    } else {
      if (this.state.cycle == "Odd") {
        this.$emit("changeOddTiming", {
          index: this.position,
          trueValue: true
        });
      } else {
        this.$emit("changeEvenTiming", {
          index: this.position,
          trueValue: true
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/table";
</style>
