const setTask = (payload) => {
  return {
    type: "CHANGE_TASK",
    payload,
  };
};

export default {
  setTask,
};
