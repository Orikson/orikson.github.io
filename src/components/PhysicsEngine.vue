<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="2D and 3D Physics Engine"
    style="margin: 20px"
  >
    <p class="p">
      Check out the
      <a
        href="https://github.com/Orikson/Custom-2D-Physics-Engine"
        target="_blank"
      >
        <span class="r"> 2D engine </span>
      </a>
      and
      <a
        href="https://github.com/Orikson/Custom-3D-Physics-Engine"
        target="_blank"
        ><span class="b">3D engine</span></a
      >
    </p>
    <p class="p">
      The 2D and 3D physics engines are simple physics engines that implement
      the Euler method for rigid body dynamics with spring and distance
      constraints. Both are written in C++ and use OpenGL for rendering. The 3D
      engine also features raymarching for more advanced rendering.
    </p>
    <div style="width: 100%; text-align: center">
      <figure>
        <img style="width: 60%" src="./physicsRender.gif" />
        <figcaption>
          Demo with
          <a
            href="https://user-images.githubusercontent.com/42471346/162111780-6dc39cea-dceb-414c-9b81-fd9f8f57fbe2.png"
            target="_blank"
            ><span class="y">lossy compression</span></a
          >
        </figcaption>
      </figure>
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "PhysicsEngine",
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
