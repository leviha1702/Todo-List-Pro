import axios from "axios";

export const increment = (payload) => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  dispatch({
    type: "INCREMENT",
    payload,
  });
};
export const decrement = () => ({ type: "DECREMENT" });
export const reset = () => ({ type: "RESET" });
