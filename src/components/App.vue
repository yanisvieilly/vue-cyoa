<template lang="pug">
.container
  h1.title L'anniversaire dont vous êtes l'héroïne

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
.container {
  margin: auto;
  max-width: 640px;
}

.title {
  line-height: 1.2;
}
</style>
