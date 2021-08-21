const state = {
  todoList: []
};

const mutations = {
  allTodos: (state, todos) => {
    state.todoList = todos;
  }
};

const actions = {
  async getAllTodos({ commit }) {
    let todos = await this.$axios.get("http://127.0.0.1:1337/todos");

    commit("allTodos", todos.data);
  },
  async taskDone({ dispatch }, taskID) {
    console.log(taskID);

    await this.$axios.put(`http://127.0.0.1:1337/todos/${taskID}`, {
      completed: true
    });
    dispatch("getAllTodos");
  }
};
export default {
  state,
  mutations,
  actions
};
