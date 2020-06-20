<template>
  <div class="mapping">
    <div class="container">
      <mappingTable
        v-if="$store.state.semester == 'Third Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec3a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Third Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec3b"
      />
      <mappingTable
        v-if="$store.state.semester == 'Third Semester' && $store.state.section == 'C'"
        :sectionObject="$store.state.sec3c"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fourth Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec4a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fourth Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec4b"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fourth Semester' && $store.state.section == 'C'"
        :sectionObject="$store.state.sec4c"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fifth Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec5a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fifth Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec5b"
      />
      <mappingTable
        v-if="$store.state.semester == 'Fifth Semester' && $store.state.section == 'C'"
        :sectionObject="$store.state.sec5c"
      />
      <mappingTable
        v-if="$store.state.semester == 'Sixth Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec6a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Sixth Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec6b"
      />
      <mappingTable
        v-if="$store.state.semester == 'Sixth Semester' && $store.state.section == 'C'"
        :sectionObject="$store.state.sec6c"
      />
      <mappingTable
        v-if="$store.state.semester == 'Seventh Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec7a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Seventh Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec7b"
      />
      <mappingTable
        v-if="$store.state.semester == 'Eight Semester' && $store.state.section == 'A'"
        :sectionObject="$store.state.sec8a"
      />
      <mappingTable
        v-if="$store.state.semester == 'Eight Semester' && $store.state.section == 'B'"
        :sectionObject="$store.state.sec8b"
      />
    </div>
    <div class="btn" @click="route()">next</div>
  </div>
</template>

<script>
import mappingTable from "../../../components/mappingTable";
export default {
  components: {
    mappingTable
  },
  created() {
    this.$store.state.progressCounter = 3;
    this.$store.state.progressSteps[2] = "Mapping";
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/table";
@import "../../../scss/create-cards";

.mapping {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    width: 85%;
    border-radius: 0.8rem;
    .data-input {
      padding: 0;
    }
  }
}
</style>