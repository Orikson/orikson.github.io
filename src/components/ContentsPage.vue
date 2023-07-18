<template>
  <div
    style="position: absolute; width: 45%; height: 80%; right: 0%; margin: 5%"
  >
    <AboutPage></AboutPage>
  </div>
</template>

<script lang="ts">
import AboutPage from "./AboutPage.vue";

export default {
  name: "ContentsPage",
  setup() {
    return {};
  },
  components: { AboutPage },
};
</script>

<style lang="css"></style>
