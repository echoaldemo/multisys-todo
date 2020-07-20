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

const remove = (payload) => {
  return {
    type: "REMOVE",
    payload,
  };
};

export default {
  add,
  update,
  remove,
};
