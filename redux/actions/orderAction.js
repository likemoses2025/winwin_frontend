import axios from "axios";
const server = process.env.API_URL;

export const createOrder = (cartItems) => async (dispatch) => {
  try {
    dispatch({ type: "orderRequest" });

    const { data } = await axios.post(`${server}/order/new`, cartItems, {
      withCredentials: true,
    });

    dispatch({
      type: "orderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "orderFailure",
      payload: error.response.data.message,
    });
  }
};
