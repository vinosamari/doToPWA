<template>
  <nav>
    <p class="dateTime"><span class="date">Wed 12/01/2021 </span>17:51</p>
    <div class="filterGroup">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/help">Help</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  @apply flex items-center flex-col justify-evenly bg-myBlueGreen p-4 font-customHand gap-y-3;
}
.dateTime {
  @apply text-lg font-bold tracking-wide font-mono;
}
.date {
  @apply font-black;
}
.filterGroup {
  @apply flex gap-x-2;
}
.filterGroup button,
.filterGroup a {
  @apply bg-myDeepBlue text-white px-4 uppercase rounded-xl py-2 tracking-widest mx-1;
}
</style>