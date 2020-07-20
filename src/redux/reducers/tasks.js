import { v4 as uuidv4 } from "uuid";

const initialState = [
  { id: uuidv4(), desc: "Go for a jog.", status: false },
  { id: uuidv4(), desc: "Go to the market.", status: false },
  { id: uuidv4(), desc: "Bathe the dogs.", status: true },
];

const taskReducer = (state = initialState, action) => {
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
