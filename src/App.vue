<template>
  <div id="app">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css" />
    <router-view />
  </div>
</template>

<script>
//import Sidebar from "@/components/Sidebar.vue";
//import Sidebar from "@/views/Semester.vue";

export default {
  components: {
    //  Sidebar
  }
};
</script>

<style lang="scss">
@import "scss/colors";

::-webkit-scrollbar {
  width: 0.35rem;
  //height: 0.35rem;
}

::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 74%);
  //height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 3rem;
}

body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  background-image: $background;
  //background: red;
  background-position: center;
  background-repeat: no-repeat;
  letter-spacing: 1px;
}
</style>

