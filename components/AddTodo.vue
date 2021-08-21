<template>
  <form>
    <input type="text" name="addTodo" id="addTodo" v-model="newTodo" />
    <button type="submit" @click.prevent="addTask">Add Task</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapActions(["addNewTask"]),
    addTask() {
      if (!this.newTodo) {
        this.$swal("Please enter a task");
      } else {
        this.addNewTask(this.newTodo);
        this.$swal(
          `Great! Remind Me To Remind You To ${this.newTodo.toUpperCase()}`.toUpperCase()
        );
        this.newTodo = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  @apply flex justify-evenly items-center py-4  mx-auto bg-gradient-to-tl from-myBlueGreen  to-myDeepBlue  text-white text-center w-screen shadow-2xl;
}
input {
  @apply rounded-md bg-myLightBlue border-0 font-bold font-customMono text-black md:w-3/4;
}
button {
  @apply bg-gradient-to-br from-myBlueGreen  to-myDeepBlue px-4 py-2 rounded-md uppercase text-white  font-customMono font-black text-sm;
}
</style>