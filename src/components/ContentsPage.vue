<template>
  <div
    style="
      position: absolute;
      width: 45%;
      height: 80%;
      right: 0%;
      margin: 5%;
      overflow-y: scroll;
    "
  >
    <v-slide-y-transition>
      <AboutPage
        style="position: absolute; top: 0px"
        v-show="page === 0"
      ></AboutPage>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <ExperiencePage
        style="position: absolute; top: 0px"
        v-show="page === 1"
      ></ExperiencePage>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <StreamlineCFD
        style="position: absolute; top: 0px"
        v-show="page === 2"
      ></StreamlineCFD>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <QuibbitJL
        style="position: absolute; top: 0px"
        v-show="page === 3"
      ></QuibbitJL>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <PhysicsEngine
        style="position: absolute; top: 0px"
        v-show="page === 4"
      ></PhysicsEngine>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <FluidEngines
        style="position: absolute; top: 0px"
        v-show="page === 5"
      ></FluidEngines>
    </v-slide-y-transition>
  </div>
</template>

<script lang="ts">
import AboutPage from "./AboutPage.vue";
import ExperiencePage from "./ExperiencePage.vue";
import StreamlineCFD from "./StreamlineCFD.vue";
import QuibbitJL from "./QuibbitJL.vue";
import PhysicsEngine from "./PhysicsEngine.vue";
import FluidEngines from "./FluidEngines.vue";
import { terminal } from "./CommandLine.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ContentsPage",
  data() {
    return {
      page: 0,
    };
  },
  setup() {
    return {};
  },
  mounted() {
    terminal.pageObservables.push((page: number) => {
      this.page = page;
    });
  },
  components: {
    AboutPage,
    ExperiencePage,
    StreamlineCFD,
    QuibbitJL,
    PhysicsEngine,
    FluidEngines,
  },
});
</script>

<style lang="css">
.p {
  margin: 10px 5px;
  color: rgb(180, 180, 180);
}
</style>
