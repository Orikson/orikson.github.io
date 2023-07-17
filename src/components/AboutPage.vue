<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="About Me"
    style="margin: 20px"
  >
    <p class="p">Hi! <span>👋</span></p>
    <p class="p">
      I am an <span class="w">undergraduate</span> at ASU studying
      <span class="w">computer science</span>. I have an interest in
      <span class="r">computer graphics</span>,
      <span class="g">computational physics and fluid dynamics</span>,
      <span class="b">high performance computing</span>, and, recently,
      <span class="y">quantum computing</span>.
    </p>

    <p class="p">Here are a few technologies I've been working with:</p>
    <ul>
      <li>C/C++</li>
      <li>Julia</li>
      <li>OpenGL</li>
      <li>OpenCL</li>
      <li>CUDA</li>
      <li>Typescript</li>
      <li>WebAssembly</li>
      <li>WebGL</li>
    </ul>

    <p class="p" style="margin-top: 50px">
      To navigate this page, use the terminal to the left.
    </p>
    <p class="p">
      Try using the command <span class="w h">help</span> to view available
      commands, and <span class="w h">help [command]</span> on any of those
      commands to view more information about them
    </p>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "AboutPage",
  setup() {
    return {};
  },
  components: {},
};
</script>

<style lang="css">
ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  overflow: hidden;
  list-style: none;
}

li::before {
  content: "▹ ";
  left: 0px;
}

.p {
  margin: 10px 5px;
  color: rgb(180, 180, 180);
}
.b {
  cursor: pointer;
  color: rgb(175, 175, 255);
}
.b:hover {
  color: rgb(125, 125, 200);
}
.r {
  cursor: pointer;
  color: rgb(255, 175, 175);
}
.r:hover {
  color: rgb(200, 125, 125);
}
.g {
  cursor: pointer;
  color: rgb(175, 255, 175);
}
.g:hover {
  color: rgb(125, 200, 125);
}
.y {
  cursor: pointer;
  color: rgb(255, 255, 175);
}
.y:hover {
  color: rgb(200, 200, 125);
}
.w {
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.w:hover {
  color: rgb(150, 150, 150);
}

.h {
  background: rgb(50, 50, 50);
}
</style>
