import { createStore } from "redux";

const initialState = {
  tasks: [],
};

const actions = {
  addTask: (task) => {
    return {
      type: "ADD_TASK",
      task,
    };
  },
  updateTask: (task) => {
    return {
      type: "UPDATE_TASK",
      task,
    };
  },
  deleteTask: (id) => {
    return {
      type: "DELETE_TASK",
      id,
    };
  },
};

const reducers = {
  tasks: (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return {
          ...state,
          tasks: [...state.tasks, action.task],
        };
      case "UPDATE_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (task.id === action.task.id) {
              return action.task;
            }
            return task;
          }),
        };
      case "DELETE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.id),
        };
      default:
        return state;
    }
  },
};
// For some reason configureStore, the recommended method is unavailable,
// could not get it to work so used create store, wich throws a runtime error 
// Uncaught Error: Expected the root reducer to be a function. Instead, received: ''
const store = createStore(reducers); 
export default { store, actions };
