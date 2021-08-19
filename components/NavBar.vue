<template>
  <nav>
    <p class="dateTime">Wed 12/01/2021 17:51</p>
    <div class="filterGroup">
      <button>Dashboard</button>
      <button>Help</button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  @apply bg-myDeepBlue;
}
nav {
  @apply flex items-center justify-between bg-myBlueGreen p-4 font-customHand;
}
.dateTime {
  @apply text-xs font-bold tracking-wide;
}
.filterGroup {
  @apply flex gap-x-2;
}
.filterGroup button {
  @apply bg-myDeepBlue text-white px-4 uppercase;
}
</style>