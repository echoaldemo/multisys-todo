const add = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export default {
  add,
};
