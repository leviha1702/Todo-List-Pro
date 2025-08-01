const Type = {
  inCrement: "INCREMENT",
  deCrement: "DECREMENT",
};

export const DigPiReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
