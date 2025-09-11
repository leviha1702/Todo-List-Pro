const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + payload.count };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
