import { combineReducers } from "redux";
// import reducer from tasks
import listTask from "./tasks";
import taskEditing from "./taskEditing";
import isAddTask from "./isAddTask";

const myReducers = combineReducers({
  listTask,
  taskEditing,
  isAddTask
});

export default myReducers;
