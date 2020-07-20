const initialState = {
  task: "",
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TASK":
      return { ...state, task: action.payload };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};
export default inputReducer;
