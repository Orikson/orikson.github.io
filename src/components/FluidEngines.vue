<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="2D and 3D Fluid Engines"
    style="margin: 20px"
  >
    <p class="p">
      Implements Stam's stable fluids algorithm for 2D and 3D fluids. The
      <a
        href="https://github.com/OpenGL-GPU-Gems-Implementations/GG1-C38-Fast-Fluid-Dynamics-on-the-GPU"
        target="_blank"
        ><span class="r"> 2D engine </span></a
      >
      is written in C++ and uses OpenGL for rendering. The
      <a href="https://playground.babylonjs.com/#SKPYC3#39" target="_blank"
        ><span class="b"> 3D engine </span></a
      >
      is written in Typescript and uses raymarching for rendering.
    </p>
    <p class="p">
      All fluid kernels are written in GLSL, and are parallelized by computing
      on 2D or 3D textures.
    </p>
    <div style="width: 100%; text-align: center">
      <video controls style="width: 75%">
        <source src="./fluidRender.mp4" type="video/mp4" />
      </video>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "FluidEngines",
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
