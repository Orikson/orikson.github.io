<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="Streamline CFD"
    style="margin: 20px"
  >
    <p class="p">
      Streamline is a computational fluid dynamics (CFD) software package that
      is built in C++ and OpenCL. Designed for computer graphics applications,
      it is capable of simulating smoke, fire, and other fluid phenomena in
      realtime.
    </p>
    <div style="width: 100%; text-align: center">
      <img style="width: 60%" src="./collisionGif.gif" />
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "StreamlineCFD",
  setup() {
    return {};
  },
  components: {},
};
</script>

<style lang="css">
a {
  text-decoration: none;
}
</style>
