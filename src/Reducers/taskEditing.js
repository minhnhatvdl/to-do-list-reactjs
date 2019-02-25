import * as types from "../Constants/actionType";
// randomId
var randomId = require("random-id");
// set state taskEditing: type Task
let initState = {
  id: randomId(5, "aA0"),
  name: "",
  labelArr: [],
  priority: 3, // Low
  memberIdArr: [],
  status: 1, // Not yet started
  description: ""
};
// set reducer
let reducer = (state = initState, action) => {
  let res = state;
  switch (action.type) {
    case types.EDIT_TASK:
      res = action.taskEditing;
      console.log("edit a task");
      console.log(action.taskEditing);
      break;
    case types.CLEAR_FORM:
      console.log("clear form");
      res = {
        id: randomId(5, "aA0"),
        name: "",
        labelArr: [],
        priority: 3, // Low
        memberIdArr: [],
        status: 1, // Not yet started
        description: ""
      };
      break;
    default:
      break;
  }
  return res;
};

export default reducer;
