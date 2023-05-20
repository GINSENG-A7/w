<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="avatar" @click.native="toggleAddress"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <template v-if="!addressIsShown">
        <v-list-item-title class="text-capitalize">{{
          title
        }}</v-list-item-title>
        <v-list-item-subtitle
          v-html="subtitle"
          class="text-capitalize"
        ></v-list-item-subtitle>
      </template>

      <template v-else>
        <v-list-item-title>
          <span class="pe-2 text-capitalize">{{ country }}</span>
          <span class="pw-2 text-capitalize">{{ city }}</span>
        </v-list-item-title>

        <v-list-item-subtitle>
          <span class="pe-2">{{ house }}</span>
          <span class="pw-2 text-capitalize">{{ street }}</span>
        </v-list-item-subtitle>
      </template>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "User",

  props: {
    avatar: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    house: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      addressIsShown: false,
    };
  },
  methods: {
    toggleAddress() {
      this.addressIsShown = !this.addressIsShown;
    },
  },
};
</script>

<style></style>
