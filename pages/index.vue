<template>
  <main>
    <add-todo></add-todo>
    <h1 class="taskStatus pending">Pending</h1>
    <todo-item
      v-for="todo in pendingTodos"
      :key="todo.id"
      :todoItem="todo"
    ></todo-item>
    <div class="doneTasksSection">
      <h1 class="taskStatus completed">Completed</h1>
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
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: { AddTodo },
  methods: {},
  computed: {
    pendingTodos() {
      let pendingItems = this.todoList.filter(
        (todo) => todo.status == "pending"
      );
      return pendingItems.reverse();
    },
    doneTodos() {
      let doneItems = this.todoList.filter((todo) => todo.status == "done");
      return doneItems;
    },
    ...mapState(["todoList"]),
  },
};
</script>
<style>
main {
  @apply bg-gradient-to-br from-myDeepBlue via-myBlueGreen to-myMaroon pb-4;
}
.taskStatus {
  @apply mx-auto md:text-2xl font-customMono font-black uppercase tracking-widest text-center mt-4 bg-myBlueGreen md:w-1/4 w-1/2 py-1 text-myDeepBlue mb-8 shadow-2xl;
}
.pending {
  @apply bg-myBeeYellow mt-7;
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
</style>