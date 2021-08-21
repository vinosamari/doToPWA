<template>
  <form>
    <input type="text" name="addTodo" id="addTodo" v-model="newTodo" />
    <button type="submit" @click.prevent="addNewTask">Add Task</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    addNewTask() {
      if (!this.newTodo) {
        this.$swal("Please enter a task");
      } else {
        this.addTask(this.newTodo);
        this.$swal(`Great! Remind Me To Remind You To ${this.newTodo}`);
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