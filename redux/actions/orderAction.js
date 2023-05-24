import axios from "axios";
const server = process.env.API_URL;

export const getUserOrders = () => async (dispatch) => {
  try {
    console.log("Working 11");
    dispatch({ type: "getUserOrdersRequest" });

    const { data } = await axios.get(`${server}/order/userOrder`, {
      withCredentials: true,
    });
    console.log("Working 22", data);

    dispatch({
      type: "getUserOrdersSuccess",
      payload: data,
    });
    console.log("Working 33");
  } catch (error) {
    console.log("Working Error");
    console.log(error);
    dispatch({
      type: "getUserOrdersFailure",
      payload: error.response.data.message,
    });
  }
};
