<template>
  <section>
    <div class="pillWrapper">
      <div class="taskMarker">
        <h2 class="taskNumber">{{ this.totalTodos }}</h2>
        <h4 class="taskText">All Tasks</h4>
      </div>
    </div>
    <div class="pillWrapper">
      <div class="taskMarker done">
        <h2 class="taskNumber">{{ doneNum }}</h2>
        <h4 class="taskText">Done</h4>
      </div>
    </div>
    <div class="pillWrapper">
      <div class="taskMarker due">
        <h2 class="taskNumber">{{ undoneNum }}</h2>
        <h4 class="taskText">Due</h4>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doneTodos", "pendingTodos", "totalTodos"]),
    doneNum() {
      return this.doneTodos.length;
    },
    undoneNum() {
      return this.pendingTodos.length;
    },
  },
};
</script>

<style scoped>
section {
  @apply grid grid-rows-3;
}
.pillWrapper {
  @apply bg-myBlueGreen border-2 border-myDeepBlue rounded-3xl p-2 my-4;
}
.taskMarker {
  @apply flex flex-col items-center justify-center py-4 px-8 bg-myDeepBlue m-3 rounded-xl text-center shadow-customShadow;
}
.taskNumber {
  @apply text-5xl font-bold font-customMono mb-4;
}
.taskText {
  @apply text-lg font-bold tracking-widest;
}
.done {
  @apply bg-green-900;
}
.due {
  @apply bg-mySweetOrange text-myDeepBlue;
}
</style>