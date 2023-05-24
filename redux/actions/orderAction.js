import axios from "axios";
const server = process.env.API_URL;

export const getDealerOrders = () => async (dispatch) => {
  try {
    console.log("Working 1");
    dispatch({ type: "getDealerOrdersRequest" });

    console.log("Working 2");
    const { data } = await axios.get(`${server}/order/dealer`, {
      withCredentials: true,
    });

    console.log("Working 3");
    dispatch({ type: "getDealerOrdersSuccess", payload: data });
  } catch (error) {
    console.log("Working Error: " + error);
    dispatch({
      type: "getDealerOrdersFailure",
      payload: error.response.data.message,
    });
  }
};
