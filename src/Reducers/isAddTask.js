import * as types from "../Constants/actionType";
// state isAddTask: type boolean
let initState = true;
// set reducer
let reducer = (state = initState, action) => {
  let res = state;
  switch (action.type) {
    case types.CONVERT_IS_ADD_TASK_TO_FALSE:
      console.log("set isAddState false");
      res = false;
      break;
    case types.CONVERT_IS_ADD_TASK_TO_TRUE:
      console.log("set isAddState true");
      res = true;
      break;
    default:
      res = state;
      break;
  }
  return res;
};

export default reducer;
