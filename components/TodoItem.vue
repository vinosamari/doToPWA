<template>
  <section class="todoSection">
    <div class="titleStatus">
      <span
        class="todoStatusPending"
        v-if="completedTodoStatus === false"
      ></span>
      <span class="todoStatusDone" v-else></span>
      <h2 class="todoTitle">{{ todoItem.title }}</h2>
    </div>

    <div class="buttonGroupGrid">
      <div class="buttonClass">
        <!-- DONE BUTTON -->
        <button
          class="doneBtn"
          @click="doneTask"
          v-if="completedTodoStatus === false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="1.3rem"
            fill="#FFB703"
          >
            <path
              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
            />
          </svg>
        </button>
        <!-- DELETE BUTTON -->
        <button
          class="doneBtn"
          @click="removeTask()"
          v-if="completedTodoStatus === false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="1.3rem"
            fill="#FFB703"
          >
            <path
              d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
            />
          </svg>
        </button>
      </div>
      <div class="buttonClass">
        <!-- EDIT BUTTON -->
        <button
          class="doneBtn"
          @click="doneTask()"
          v-if="completedTodoStatus === false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height="1.3rem"
            fill="#FFB703"
          >
            <path
              d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["todoItem"],
  computed: {
    completedTodoStatus() {
      return this.todoItem.completed;
    },
  },
  methods: {
    ...mapActions(["taskDone"]),
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
  @apply md:text-xl capitalize text-myLightBlue text-customSize mr-2;
}
.todoStatusPending {
  @apply bg-myBeeYellow p-2 rounded-full text-xs h-2 mr-2;
}
.todoStatusDone {
  @apply bg-green-600 p-2 rounded-full text-xs h-2 mr-2;
}
.buttonGroupGrid {
  @apply grid grid-rows-2 gap-y-5 my-1;
}
.buttonClass {
  @apply flex gap-5 items-center justify-center;
}
button {
  @apply mx-auto;
}
</style>