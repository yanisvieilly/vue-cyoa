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
  color: #333;
  font-family: "Lato", sans-serif;
  font-size: 1.125rem;
  margin: 40px auto;
  max-width: 640px;
}

.title {
  font-family: "Permanent Marker", cursive;
  line-height: 1.2;
}
</style>
