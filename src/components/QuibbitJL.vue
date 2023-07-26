<template>
  <v-card
    persistent
    flat
    color="transparent"
    title="Quibbit.jl"
    style="margin: 20px"
  >
    <p class="p"><span class="w">Currently a work in progress</span></p>
    <p class="p">
      Quibbit is a Julia package for simulating quantum circuits. It is
      parallelized on the GPU, and provides tools to render and design circuits.
      There are 12 built in gates, including the Pauli gates, the Hadamard gate,
      and the Toffoli gate. Controlled versions of gates is also supported.
    </p>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "QuibbitJL",
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
