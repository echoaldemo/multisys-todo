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

const editSelected = (payload) => {
  return {
    type: "EDIT_TASK",
    payload,
  };
};

export default {
  setTask,
  clear,
  editSelected,
};
