import * as types from "../Constants/actionType";
import ListTask from "../Data/InitTask";

// let initState = [{ listTask: ListTask.listTask }];
let listTaskJSON = JSON.parse(localStorage.getItem("listTask"));
let initState = listTaskJSON ? listTaskJSON : [];
// set reducer
let reducer = (state = initState, action) => {
  let res;
  switch (action.type) {
    case types.LIST_ALL_TASK:
      res = state;
      break;
    case types.INIT_ALL_TASK:
      localStorage.setItem("listTask", JSON.stringify(ListTask.listTask));
      window.location.reload();
      break;
    default:
      res = "";
      break;
  }
  return state;
};

export default reducer;
