<template>
  <div id="app">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/views/Login.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import "scss/colors";

::-webkit-scrollbar {
  width: 0.35rem;
}

::-webkit-scrollbar-track {
  background: none;
}

::-webkit-scrollbar-thumb {
  background-color: #08e1ae;
  background-image: linear-gradient(315deg, #08e1ae 0%, #98de5b 74%);
  border-radius: 3rem;
}

body {
  padding: 0;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
  background: $background;
  letter-spacing: 1px;
}
</style>

