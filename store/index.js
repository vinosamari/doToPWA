const url = "http://127.0.0.1:1337/todos";
const jokeUrl = "https://dad-jokes.p.rapidapi.com/random/joke";
const state = {
  todoList: [],
  joke: ""
};

const mutations = {
  allTodos: (state, todos) => {
    state.todoList = todos;
  },
  fetchJoke: (state, joke) => {
    state.joke = joke;
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
  },
  // GET JOKES
  async fetchRandomJoke({ commit }) {
    let joke = await this.$axios.get(jokeUrl, {
      headers: {
        "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
        "x-rapidapi-key": "35118d8d31msh198772385ae1327p1376c4jsn401cb7b9034d"
      }
    });
    commit("fetchJoke", joke.data);
  }
};
export default {
  state,
  mutations,
  actions
};
