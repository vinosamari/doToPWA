<template>
  <section>
    <!-- ABOUT SECTION -->
    <div class="aboutSection">
      <h1 class="aboutHeader">About</h1>
      <p class="aboutSummary">
        <span class="appName">Do-To Task Manager</span> is a web app showcasing
        <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>,
        <a target="_blank" href="https://strapi.io/">Strapi</a>, and a few other
        amazing
        <a target="_blank" href="https://www.javascripting.com/"
          >Javascript libraries</a
        >
      </p>
    </div>
    <!-- HELP SECTION -->
    <div class="helpSection">
      <h1 class="helpHeader">Help or Suggestions?</h1>
      <p class="helpSummary">
        If you have any ideas you can
        <a href="mailto:sapwavino@karmafullstack.com">email me </a>or
        <a href="#">clone the Github repo</a>.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  @apply grid grid-rows-2 text-center gap-y-10 text-white font-customMono;
}
h1 {
  @apply font-bold tracking-widest text-xl p-4 uppercase mt-4 border mx-4 font-customHand;
}
p {
  @apply p-4 text-lg capitalize  leading-9;
}
a {
  @apply text-myBlueGreen;
}
.appName {
  @apply font-black uppercase;
}
</style>