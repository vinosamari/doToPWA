<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  @apply bg-myDeepBlue antialiased;
}
</style>