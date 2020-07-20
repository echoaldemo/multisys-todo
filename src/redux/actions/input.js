const setTask = (payload) => {
  return {
    type: "CHANGE_TASK",
    payload,
  };
};
const clear = () => {
  return {
    type: "CLEAR",
  };
};
export default {
  setTask,
  clear,
};
