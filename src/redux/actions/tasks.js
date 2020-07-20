const add = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

const update = (payload) => {
  return {
    type: "UPDATE",
    payload,
  };
};

export default {
  add,
  update,
};
