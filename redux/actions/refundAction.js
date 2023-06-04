import axios from "axios";

const server = process.env.API_URL;

export const createRefund = (refundObj) => async (dispatch) => {
  try {
    dispatch({ type: "getMyRefundRequest" });

    const { data } = await axios.post(`${server}/refund/new`, refundObj, {
      withCredentials: true,
    });

    dispatch({
      type: "createOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "createOrderFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateOrder = (id, updateObj) => async (dispatch) => {
  try {
    dispatch({
      type: "updateOrderRequest",
    });
    const { data } = await axios.put(
      `${server}/order/update/${id}`,
      updateObj,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({
      type: "updateOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updateOrderFailure",
      payload: error?.response.data.message,
    });
  }
};

export const deleteMyOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteMyOrderRequest",
    });

    const { data } = await axios.delete(
      `${server}/order/delete/${id}`,

      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "deleteMyOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteMyOrderFailure",
      payload: error.response.data.message,
    });
  }
};
