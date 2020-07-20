import { v4 as uuidv4 } from "uuid";
const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      const newTask = {
        id: uuidv4(),
        desc: action.payload,
        status: false,
      };
      return [newTask, ...state];
    default:
      return state;
  }
};
export default taskReducer;
