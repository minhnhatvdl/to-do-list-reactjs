import { combineReducers } from "redux";
// import reducer from tasks
import listTask from "./tasks";
import taskEditing from "./taskEditing";
import isAddTask from "./isAddTask";
import filterTask from "./filterTask";

const myReducers = combineReducers({
  listTask,
  taskEditing,
  isAddTask,
  filterTask
});

export default myReducers;
