import axios from "axios";
const server = process.env.API_URL;

export const createOrder = (cartItems) => async (dispatch) => {
  try {
    dispatch({ type: "createOrderRequest" });

    const { data } = await axios.post(`${server}/order/new`, cartItems, {
      withCredentials: true,
    });

    dispatch({
      type: "createOrderSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "createOrderFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserOrders = () => async (dispatch) => {
  try {
    console.log("Working 1");
    dispatch({ type: "getUserOrdersRequest" });

    const { data } = await axios.get(`${server}/order/userOrder`, {
      withCredentials: true,
    });
    console.log("Working 2");

    dispatch({
      type: "getUserOrdersSuccess",
      payload: data.message,
    });
    console.log("Working 3");
  } catch (error) {
    console.log("Working Error");
    console.log(error);
    dispatch({
      type: "getUserOrdersFailure",
      payload: error.response.data.message,
    });
  }
};
