<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="Streamline CFD"
    style="margin: 20px"
  >
    <p class="p">
      Streamline is a computational fluid dynamics (CFD) software application
      that is built in C++ and OpenCL, and uses a UI created in Qt5. Intended
      for computer graphics applications, it implements various SIGGRAPH fluid
      dynamics papers from over the years.
    </p>
    <div style="width: 100%; text-align: center">
      <figure>
        <img style="width: 60%" src="./collisionGif.gif" />
        <figcaption>
          Implementation of
          <a
            href="http://www.cs.columbia.edu/cg/surfaceliquids/droplets.pdf"
            target="_blank"
          >
            <span class="y">Da et. al, 2016</span>
          </a>
        </figcaption>
      </figure>
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
