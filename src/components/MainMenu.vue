<template>
  <div
    style="position: absolute; width: 45%; height: 80%; margin: 5%"
    class="d-flex flex-column"
  >
    <v-card
      persistent
      flat
      color="transparent"
      title="Eron Ristich"
      subtitle="Computer Science Junior @ ASU"
      style="margin-top: 20px; margin-left: 20px; height: 100px"
    >
    </v-card>
    <v-card persistent style="margin: 20px; height: 100%">
      <v-toolbar color="rgb(20,20,20)" density="compact">
        <v-btn icon density="compact" size="small">
          <v-icon color="red">mdi-circle-medium</v-icon>
        </v-btn>

        <v-btn icon density="compact" size="small">
          <v-icon color="yellow">mdi-circle-medium</v-icon>
        </v-btn>

        <v-btn icon density="compact" size="small">
          <v-icon color="green">mdi-circle-medium</v-icon>
        </v-btn>
      </v-toolbar>
      <CommandLine></CommandLine>
    </v-card>

    <v-spacer></v-spacer>

    <v-col style="flex-grow: 0" align="center">
      <v-btn icon color="rgba(0, 0, 0, 0)" href="https://github.com/Orikson">
        <v-icon>custom:GithubIcon</v-icon>
      </v-btn>

      <v-btn icon color="rgba(0, 0, 0, 0)" href="https://gitlab.com/Orikson">
        <v-icon>custom:GitlabIcon</v-icon>
      </v-btn>

      <v-btn icon color="rgba(0, 0, 0, 0)" href="mailto:eristich@asu.edu">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn
        icon
        color="rgba(0, 0, 0, 0)"
        href="https://www.linkedin.com/in/eristich/"
      >
        <v-icon>custom:LinkedinIcon</v-icon>
      </v-btn>

      <v-btn
        icon
        color="rgba(0, 0, 0, 0)"
        href="https://www.instagram.com/orikson.black/"
      >
        <v-icon>custom:InstagramIcon</v-icon>
      </v-btn>
    </v-col>
  </div>
</template>

<script lang="ts">
import CommandLine from "./CommandLine.vue";

export default {
  name: "MainMenu",
  setup() {
    return {};
  },
  components: { CommandLine },
};
</script>

<style lang="css"></style>
