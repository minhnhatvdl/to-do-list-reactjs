import * as types from "../Constants/actionType";
import ListTask from "../Data/InitTask";
// state listTask: type array of object
let listTaskJSON = JSON.parse(localStorage.getItem("listTask"));
let initState = listTaskJSON ? listTaskJSON : [];
// set reducer
let reducer = (state = initState, action) => {
  let res = state;
  switch (action.type) {
    case types.LIST_ALL_TASK:
      res = state;
      break;
    case types.INIT_ALL_TASK:
      console.log("init list of tasks from localStorage");
      localStorage.setItem("listTask", JSON.stringify(ListTask.listTask));
      window.location.reload();
      break;
    case types.ADD_NEW_TASK:
      console.log("add a new task");
      res = [...res, action.newTask];
      localStorage.setItem("listTask", JSON.stringify(res));
      break;
    case types.UPDATE_TASK:
      console.log("update a task");
      const index = res.findIndex(task => task.id === action.taskUpdating.id);
      res[index] = action.taskUpdating;
      localStorage.setItem("listTask", JSON.stringify(res));
      break;
    default:
      res = state;
      break;
  }
  return res;
};

export default reducer;
