<template lang="pug">
div
  h2 Page {{ id }}
  p {{ text }}

  ul
    li(v-for="link in links")
      Link(v-bind="link")
</template>

<script>
import { mapGetters } from "vuex";

import Link from "./Link";

export default {
  components: {
    Link
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapGetters(["getPageById"]),
    text() {
      return this.getPageById(this.id).text;
    },
    links() {
      return this.getPageById(this.id).links;
    }
  }
};
</script>
