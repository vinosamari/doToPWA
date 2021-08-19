<template>
  <section>
    <div class="titleStatus">
      <span class="todoStatusPending" v-if="todoStatus === 'pending'"></span>
      <span class="todoStatusDone" v-else></span>
      <h2 class="todoTitle">{{ todoItem.title }}</h2>
    </div>

    <button class="doneBtn" @click="doneTask()" v-if="todoStatus === 'pending'">
      Done
    </button>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["todoItem"],
  computed: {
    todoStatus() {
      return this.todoItem.status;
    },
  },
  methods: {
    ...mapMutations(["taskDone"]),
    doneTask() {
      this.taskDone(this.todoItem.id);
      this.$swal("Task Completed! Great Job!");
    },
  },
};
</script>

<style scoped>
section {
  @apply bg-myDeepBlue  md:w-2/4 mx-2 my-6 md:mx-auto py-3 px-8 md:text-center flex gap-x-3 rounded-xl justify-between items-center text-left shadow-2xl font-customHand tracking-widest;
}
.titleStatus {
  @apply flex gap-2 items-center;
}
.todoTitle {
  @apply md:text-xl capitalize text-myLightBlue text-xs;
}
.todoStatusPending {
  @apply bg-myBeeYellow p-2 rounded-full text-xs h-2 mr-3;
}
.todoStatusDone {
  @apply bg-green-600 p-2 rounded-full text-xs h-2 mr-3;
}
.doneBtn {
  @apply bg-green-700 py-1  px-3 text-myLightBlue rounded-md text-xs uppercase font-customMono;
}
</style>