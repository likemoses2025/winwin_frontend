import axios from "axios";
const server = process.env.API_URL;

export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyOrdersRequest" });

    const { data } = await axios.get(`${server}/order/my`, {
      withCredentials: true,
    });

    dispatch({ type: "getMyOrdersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getMyOrdersFailure",
      payload: error.response.data.message,
    });
  }
};
