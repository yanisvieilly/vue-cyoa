<template lang="pug">
router-link(:to="`/pages/${destination}`" class="link") {{ text }}
</template>

<script>
export default {
  props: {
    destination: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  color: #ff4c73;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
