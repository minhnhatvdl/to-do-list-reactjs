import * as types from "../Constants/actionType";
// state filterType and filterValue: type string
let initState = {
  filterType: "",
  filterValue: ""
};
// set reducer
let reducer = (state = initState, action) => {
  let res = state;
  switch (action.type) {
    case types.FILTER_TASK:
      const { filterType, filterValue } = action;
      console.log(`filter ${filterType} by ${filterValue}`);
      res = {
        filterType,
        filterValue
      };
      break;
    default:
      res = state;
      break;
  }
  return res;
};

export default reducer;
