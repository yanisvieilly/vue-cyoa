<template lang="pug">
.container
  h1 L'anniversaire dont vous êtes l'héroïne

  Page
</template>

<script>
import Page from "./Page";

export default {
  components: {
    Page
  }
};
</script>

<style lang="scss" scoped>
@media (min-width: 640px) {
  .container {
    margin: auto;
    max-width: 640px;
  }
}
</style>
