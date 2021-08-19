const state = {
  todoList: [
    {
      id: 1,
      title: "Make DoTo Web App Nuxt Project",
      status: "pending"
    },
    {
      id: 2,
      title: "Create github repo",
      status: "done"
    },
    {
      id: 3,
      title: "Prepare PWA capabilities",
      status: "pending"
    },
    {
      id: 4,
      title: "Make more commits",
      status: "done"
    },
    {
      id: 5,
      title: "Make UI commits",
      status: "pending"
    },
    {
      id: 6,
      title: "Walk the dog",
      status: "pending"
    },
    {
      id: 7,
      title: "Discord video meet",
      status: "pending"
    },
    {
      id: 8,
      title: "Take family out for dinner",
      status: "done"
    }
  ]
};

const mutations = {
  taskDone: (state, newTaskId) => {
    let stateTask = state.todoList.find(task => task.id == newTaskId);
    stateTask.status = "done";
  },
  addTask: (state, task) => {
    let lastIndex = state.todoList.length;
    let newTask = {
      id: lastIndex + 1,
      title: task,
      status: "pending"
    };
    state.todoList.push(newTask);
  }
};

const actions = {};
export default {
  state,
  mutations,
  actions
};
