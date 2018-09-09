<template lang="pug">
div.page
  p {{ text }}

  div(v-if="gameOver")
    p.game-over Game over!
    Link(destination=1 text="Retourner au début de l'histoire")
  
  ul(v-else)
    li(v-for="link in links")
      Link(v-bind="link")
</template>

<script>
import { mapGetters } from "vuex";

import Link from "./Link";

const VICTORY_PAGE_ID = "27";

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
      return this.links.length === 0 && this.id !== VICTORY_PAGE_ID;
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  line-height: 1.6;
}

.game-over {
  font-weight: bold;
}
</style>
