<template>
  <nav>
    <div class="filterGroup">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/help">Help</nuxt-link>
    </div>
    <p class="dateTime">
      <span class="date">{{ dateOnly }}</span>
    </p>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dayDate: Date().slice(0, 16),
      // hours: new Date().getHours(),
      // minutes: new Date().getMinutes(),
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
nav {
  @apply flex items-center flex-col justify-evenly bg-myBlueGreen p-4 font-customHand gap-y-3;
}
.dateTime {
  @apply text-xl font-bold font-mono;
}
.date {
  @apply mr-4 font-extrabold;
}
.filterGroup {
  @apply flex gap-x-2;
}
.filterGroup button,
.filterGroup a {
  @apply bg-myDeepBlue text-white px-4 uppercase rounded-xl py-2 tracking-widest mx-1;
}
</style>