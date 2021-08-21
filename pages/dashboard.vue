<template>
  <section>
    <dash-pill></dash-pill>
  </section>
</template>

<script>
import DashPill from "~/components/DashPill.vue";
export default {
  components: { DashPill },
  layout: "dashlayout",
};
</script>

<style scoped>
section {
  @apply text-white text-4xl;
}
</style>