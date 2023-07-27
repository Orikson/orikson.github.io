<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="Work Experience"
    style="margin: 20px"
  >
    <p class="p" style="font-size: larger">
      <a href="https://www.forum8.co.jp/english/index.html" target="_blank">
        <span class="b">FORUM8 - Miyazaki, Japan</span>
      </a>
    </p>
    <p class="p"><span class="w">Virtual Reality Development Group</span></p>
    <ol style="color: rgb(180, 180, 180)">
      <li style="margin-bottom: 5px">
        Develop and deploy an npm package for rendering and interacting with
        massive point cloud datasets with up to billions of points on the web
        and in VR
      </li>
      <li>
        Collaborated with teams in the Netherlands and Japan to build demos that
        integrate with their software
      </li>
    </ol>
    <p class="p">
      Check out this
      <a
        href="https://f8vps-pointcloud.forum8.co.jp/#/scene/castle"
        target="_blank"
      >
        <span class="g">demo</span>
      </a>
      I made for FORUM8's international VR summer workshop
    </p>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "ExperiencePage",
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
