let initialState = {
  task: "",
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TASK":
      return { ...state, task: action.payload };
    default:
      return state;
  }
};
export default inputReducer;
