<template>
  <nav>
    <div class="filterGroup">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      <nuxt-link to="/help">Help</nuxt-link>
    </div>
    <p class="dateTime">
      <span class="date">{{ dateOnly }} </span>
    </p>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dayDate: Date().slice(0, 16),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };
  },
  computed: {
    dateOnly() {
      return this.dayDate;
    },
    timeOnly() {
      return `${this.hours}:${this.minutes}`;
    },
  },
};
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
  @apply flex items-center flex-col justify-evenly bg-myBlueGreen p-4 font-customHand gap-y-3;
}
.dateTime {
  @apply text-lg font-bold tracking-wide font-mono;
}
.date {
  @apply font-black;
}
.filterGroup {
  @apply flex;
}
.filterGroup button,
.filterGroup a {
  @apply bg-myDeepBlue text-white px-4 uppercase rounded-xl py-2 tracking-widest mx-1 font-customHand;
}
</style>