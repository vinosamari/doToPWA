<template>
  <div>
    <nav-two></nav-two>
    <nuxt />
  </div>
</template>

<script>
export default {
  transition: "dashlayout",
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