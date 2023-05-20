<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" md="4">
        <Filters :country-filters="items[0]" :score-filters="items[1]" />
      </v-col>

      <v-col cols="12" md="4">
        <v-card max-width="450" class="mx-auto">
          <Users :users="pureUsers" :list-title="users[0].header" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Users from "@/components/Users.vue";
import Filters from "@/components/Filters.vue";
export default {
  components: { Users, Filters },
  name: "ContentBlock",

  data: () => ({
    items: [
      ["russia", "usa"],
      ["> 20", "< 10"],
    ],
    variant: "default",
    users: [
      { header: "List" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        country: "russia",
        score: 22,
        address: {
          city: "moscow",
          street: "malaya bronnaya",
          house: "10",
        },
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        country: "usa",
        score: 24,
        address: {
          city: "new-york",
          street: "wall street",
          house: "122",
        },
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        country: "russia",
        score: 9,
        address: {
          city: "kostroma",
          street: "moskovskaya",
          house: "4",
        },
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        country: "usa",
        score: 8,
        address: {
          city: "detroit",
          street: "5 avenu",
          house: "44",
        },
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        country: "usa",
        score: 15,
        address: {
          city: "los-angeles",
          street: "7 avenu",
          house: "3/4",
        },
      },
    ],
  }),
  computed: {
    pureUsers() {
      return this.users.filter(
        (user) => !("divider" in user) && !("header" in user)
      );
    },
  },
};
</script>
