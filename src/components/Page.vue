<template lang="pug">
div
  p {{ text }}

  p(v-if="gameOver") Game over
  
  ul(v-else)
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
    },
    gameOver() {
      return this.links.length === 0;
    }
  }
};
</script>
