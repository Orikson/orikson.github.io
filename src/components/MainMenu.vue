<template>
  <div
    style="position: absolute; width: 47.5%; height: 80%; margin: 5%"
    class="d-flex flex-column"
  >
    <v-card
      persistent
      title="Eron Ristich"
      subtitle="Computer Science Junior @ ASU"
      style="margin: 20px"
    >
    </v-card>
    <v-card persistent style="margin: 20px">
      <v-toolbar color="rgb(20,20,20)" density="compact"> </v-toolbar>
      <div>...</div>
    </v-card>

    <v-spacer></v-spacer>

    <v-col style="flex-grow: 0" align="center">
      <v-btn icon color="rgba(0, 0, 0, 0)" href="https://github.com/Orikson">
        <v-icon>custom:GithubIcon</v-icon>
      </v-btn>

      <v-btn icon color="rgba(0, 0, 0, 0)" href="https://gitlab.com/Orikson">
        <v-icon>custom:GitlabIcon</v-icon>
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
export default {
  name: "MainMenu",
  setup() {
    return {};
  },
  components: {},
};
</script>

<style lang="css"></style>
