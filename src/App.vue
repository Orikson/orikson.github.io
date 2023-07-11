<template>
  <v-app style="overflow: hidden !important">
    <v-main style="height: 100vh">
      <BabylonJS v-resize="onResize" style="height: 100%; width: 100%" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BabylonJS from "./components/BabylonJS.vue";
import store from "@/store";

export default defineComponent({
  name: "App",

  components: {
    BabylonJS,
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
