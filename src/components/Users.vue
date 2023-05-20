<template>
  <v-list three-line>
    <v-subheader v-if="listTitle">{{ listTitle }}</v-subheader>

    <Transition v-for="(item, index) in filteredUsers" :key="index">
      <User
        :avatar="item.avatar"
        :title="item.title"
        :subtitle="item.subtitle"
        :country="item.country"
        :city="item.address.city"
        :street="item.address.street"
        :house="item.address.house"
      />
    </Transition>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
import User from "@/components/User.vue";

export default {
  components: { User },
  name: "Users",
  props: {
    users: {
      type: Array,
      required: true,
    },
    listTitle: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters("filters", ["getCountry", "getScore"]),
    filteredUsers() {
      return this.users
        .filter((user) =>
          this.getCountry ? user.country === this.getCountry : true
        )
        .filter((user) =>
          this.getScore ? this.stringToLogical(this.getScore, user.score) : true
        );
    },
  },
  methods: {
    stringToLogical(expression, value) {
      const expressionArray = expression.split(" ");
      switch (expressionArray[0]) {
        case ">":
          return value > expressionArray[1];
        case "<":
          return value < expressionArray[1];
        case "=":
          return value === expressionArray[1];
        case ">=":
          return value >= expressionArray[1];
        case "<=":
          return value <= expressionArray[1];
        default:
          throw new Error();
      }
    },
  },
};
</script>

<style lang="css" scoped>
.v-enter-active {
  transform: translate(100px, 0px);
  transition: 0.5s ease;
}
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-to {
  opacity: 1;
  transform: translate(0px, 0px);
}
.v-leave-from {
  opacity: 1;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(100px, 0px);
}
</style>
