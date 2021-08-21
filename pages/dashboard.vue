<template>
  <section>welcome to your dashboard</section>
</template>

<script>
export default {
  layout: "dashlayout",
  transition: "dashlayout",
};
</script>

<style scoped>
section {
  @apply flex flex-col items-center justify-center text-white text-4xl;
}
</style>