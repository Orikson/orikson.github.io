<template>
  <v-app theme="dark" style="overflow: hidden !important">
    <v-main style="height: 100vh">
      <div
        style="
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            600px at 50% 50%,
            rgba(29, 78, 216, 0.15),
            transparent 90%
          );
        "
      >
        <BabylonJS v-resize="onResize" style="height: 100%; width: 100%" />
      </div>
      <v-col>
        <MainMenu></MainMenu>
        <ContentsPage></ContentsPage>
      </v-col>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BabylonJS from "./components/BabylonJS.vue";
import MainMenu from "./components/MainMenu.vue";
import ContentsPage from "./components/ContentsPage.vue";

export default defineComponent({
  name: "App",

  components: {
    BabylonJS,
    MainMenu,
    ContentsPage,
  },

  data() {
    return {
      //
    };
  },

  methods: {
    onResize() {
      //store.commit("resizeEngine", {
      //  width: window.innerWidth,
      //  height: window.innerHeight,
      //});
    },
  },
});
</script>

<style>
body {
  font-family: "Cascadia Code", monospace;
}
</style>
