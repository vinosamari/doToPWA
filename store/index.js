const url = "http://127.0.0.1:1337/todos";

const state = {
  todoList: []
};

const mutations = {
  allTodos: (state, todos) => {
    state.todoList = todos;
  }
};

// ACTIONS
const actions = {
  // FETCH ALL
  async getAllTodos({ commit }) {
    let todos = await this.$axios.get(url);

    commit("allTodos", todos.data);
  },
  // ADD NEW TASK
  async addNewTask({ dispatch }, taskTitle) {
    await this.$axios.post(`${url}`, {
      title: taskTitle
    });
    dispatch("getAllTodos");
  },
  // SET COMPLETED TASK
  async taskDone({ dispatch }, taskID) {
    console.log(taskID);

    await this.$axios.put(`${url}/${taskID}`, {
      completed: true
    });
    dispatch("getAllTodos");
  },
  // DELETE TASK
  async deleteTask({ dispatch }, taskID) {
    await this.$axios.delete(`${url}/${taskID}`);
    dispatch("getAllTodos");
  },
  // EDIT TASK
  async editTask({ dispatch }, taskID, taskTitle) {
    await this.$axios.put(`${url}/${taskID}`, {
      title: taskTitle
    });
    dispatch("getAllTodos");
  }
};

const getters = {
  doneTodos: state => {
    return state.todoList.filter(todo => todo.completed === true);
  },
  pendingTodos: state => {
    return state.todoList.filter(todo => todo.completed === false);
  },
  totalTodos: state => {
    return state.todoList.length;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
