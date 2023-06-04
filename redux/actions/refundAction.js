import axios from "axios";
const server = process.env.API_URL;

export const getMyRefunds = () => async (dispatch) => {
  try {
    dispatch({ type: "getMyRefundRequest" });

    const { data } = await axios.get(`${server}/refund/my`, {
      withCredentials: true,
    });

    dispatch({ type: "getMyRefundsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getMyRefundsFailure",
      payload: error.response.data.message,
    });
  }
};
