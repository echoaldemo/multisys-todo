const initialState = {
  task: "",
  selected: null,
  edit: false,
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TASK":
      return { ...state, task: action.payload };
    case "CLEAR":
      return initialState;
    case "EDIT_TASK":
      return {
        task: action.payload.desc,
        selected: action.payload,
        edit: true,
      };
    default:
      return state;
  }
};
export default inputReducer;
