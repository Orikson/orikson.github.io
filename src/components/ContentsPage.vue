<template>
  <div
    style="position: absolute; width: 45%; height: 80%; right: 0%; margin: 5%"
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
      <AboutPage
        style="position: absolute; top: 0px"
        v-show="page === 2"
      ></AboutPage>
    </v-slide-y-transition>
    <v-slide-y-transition>
      <AboutPage
        style="position: absolute; top: 0px"
        v-show="page === 3"
      ></AboutPage>
    </v-slide-y-transition>
  </div>
</template>

<script lang="ts">
import AboutPage from "./AboutPage.vue";
import ExperiencePage from "./ExperiencePage.vue";
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
  components: { AboutPage, ExperiencePage },
});
</script>

<style lang="css">
.p {
  margin: 10px 5px;
  color: rgb(180, 180, 180);
}
</style>
