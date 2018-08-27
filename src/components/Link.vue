<template lang="pug">
router-link(:to="`/pages/${destination}`") {{ text }}
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
