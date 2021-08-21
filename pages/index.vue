<template>
  <main>
    <!-- ADD NEW TODO COMPONENT -->
    <add-todo></add-todo>
    <!-- DONE TASKS SECTION -->
    <!-- PENDING STATUS INDICATOR -->
    <h1 class="taskStatus pending">Pending</h1>
    <h3 class="noPendingTasks" v-if="noPendingTodos">All Done!</h3>
    <todo-item
      v-for="todo in pendingTodos"
      :key="todo.id"
      :todoItem="todo"
    ></todo-item>
    <!-- DONE TASKS SECTION -->
    <div class="doneTasksSection">
      <h1 class="taskStatus completed">Completed</h1>
      <!-- COMPLETED TODO COMPONENTS -->
      <todo-item
        class="completedTodo"
        v-for="todo in doneTodos"
        :key="todo.id"
        :todoItem="todo"
      ></todo-item>
    </div>
  </main>
</template>

<script>
import AddTodo from "~/components/AddTodo.vue";
import { mapState, mapActions } from "vuex";
import TodoItem from "~/components/TodoItem.vue";

export default {
  data() {
    return {};
  },
  components: { AddTodo, TodoItem },
  methods: {
    ...mapActions(["getAllTodos"]),
  },
  computed: {
    ...mapState(["todoList", "joke"]),
    pendingTodos() {
      let pendingItems = this.todoList.filter(
        (todo) => todo.completed == false
      );
      return pendingItems.reverse();
    },
    doneTodos() {
      let doneItems = this.todoList.filter((todo) => todo.completed == true);
      return doneItems;
    },
    noPendingTodos() {
      let pendingItems = this.todoList.filter(
        (todo) => todo.completed == false
      );
      if (pendingItems.length === 0) {
        return true;
      }
    },
  },
  mounted() {
    this.getAllTodos();
  },
};
</script>
<style>
main {
  @apply bg-gradient-to-br from-myDeepBlue via-myBlueGreen to-myMaroon pb-4 min-h-screen;
}
.taskStatus {
  @apply mx-auto md:text-2xl font-customMono font-black uppercase tracking-widest text-center mt-4 bg-myBlueGreen md:w-1/4 w-1/2 py-1 text-myDeepBlue mb-4 shadow-2xl;
}
.pending {
  @apply bg-myBeeYellow mt-7;
}
.noPendingTasks {
  @apply text-center mx-auto text-3xl text-myDeepBlue uppercase font-bold tracking-wider py-8;
}
.completed {
  @apply bg-green-600;
}
.doneTasksSection {
  @apply mt-10;
}
.doneTasksSection .completedTodo {
  @apply opacity-80;
}
#swal2-title {
  @apply text-xl text-white font-customHand;
}
.swal2-popup,
.swal2-modal,
.swal2-show {
  @apply bg-myDeepBlue p-8;
}
.swal2-confirm,
.swal2-styled {
  @apply bg-myBlueGreen;
}
</style>