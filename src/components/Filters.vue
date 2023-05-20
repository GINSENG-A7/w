<template>
  <div class="container">
    <v-select
      :value="selectedCountryFilter"
      :items="countryFilters"
      clearable
      label="Filter by country"
      class="text-capitalize"
      @change="(v) => setCountry(v)"
    ></v-select>

    <v-select
      :value="selectedScoreFilter"
      :items="scoreFilters"
      clearable
      label="Filter by score"
      @change="(v) => setScore(v)"
    ></v-select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Filters",
  props: {
    countryFilters: {
      type: Array,
      required: false,
      default: () => {
        return undefined;
      },
    },
    scoreFilters: {
      type: Array,
      required: false,
      default: () => {
        return undefined;
      },
    },
  },
  data: () => {
    return {
      selectedCountryFilter: "",
      selectedScoreFilter: "",
    };
  },
  methods: {
    ...mapActions("filters", ["setCountry", "setScore"]),
  },
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
}
::v-deep .v-list-item__title {
  text-transform: capitalize;
}
</style>
