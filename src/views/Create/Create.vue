<template>
  <div class="create">
    <ProgressBar />
    <Mapping />
  </div>
</template>

<script>
import ProgressBar from "../../components/ProgressBar.vue";
import Mapping from "../Create/Mapping.vue";

export default {
  components: {
    ProgressBar,
    Mapping
  }
};
</script>

<style lang="scss" scoped>
.create {
  margin-top: 6rem;
  margin-left: 5rem;
  height: calc(100vh - 6rem);
}
</style>