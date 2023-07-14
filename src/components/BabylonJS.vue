<template>
  <canvas ref="bjsCanvas" width="1vw" height="1vh" />
</template>

<script lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "@/ts/setup";
import store from "@/store";

export default {
  name: "BabylonJS",
  setup() {
    const bjsCanvas = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        const { engine } = createScene(bjsCanvas.value as HTMLCanvasElement);

        store.commit("setEngine", engine);
      }
    });

    return {
      bjsCanvas,
    };
  },
};
</script>

<style lang="css">
canvas {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>
