<template>
  <div
    style="position: absolute; width: 45%; height: 80%; right: 0%; margin: 5%"
  >
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
        <li>OpenGL</li>
        <li>OpenCL</li>
        <li>CUDA</li>
        <li>Typescript</li>
        <li>WebAssembly</li>
        <li>WebGL</li>
      </ul>
    </v-card>
  </div>
</template>

<script lang="ts">
export default {
  name: "ContentsPage",
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
</style>
