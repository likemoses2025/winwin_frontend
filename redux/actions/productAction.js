import axios from "axios";

const server = process.env.API_URL;

export const getAllProducts = (keyword, category) => async (dispatch) => {
  try {
    dispatch({ type: "getAllProductsRequest" });

    const { data } = await axios.get(
      `${server}/product/all?keyword=${keyword}`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "getAllProductsSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getNewProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getNewProductsRequest" });
    const { data } = await axios.get(`${server}/product/newproduct`, {
      withCredentials: true,
    });
    dispatch({ type: "getNewProductsSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "getNewProductsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminProductsRequest" });
    const { data } = await axios.get(`${server}/product/admin`, {
      withCredentials: true,
    });
    dispatch({ type: "getAdminProductsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getOrderProducts = () => async (dispatch) => {
  try {
    console.log("Working 1");
    dispatch({ type: "getOrderProductsRequest" });
    const { data } = await axios.get(`${server}/product/order`, {
      withCredentials: true,
    });
    console.log("Working 2" + JSON.stringify(data));

    dispatch({ type: "getOrderProductsSuccess", payload: data });
    console.log("Working 3");
  } catch (error) {
    console.log("Working error", error);
    dispatch({
      type: "getOrderProductsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getProductDetailsRequest" });
    const { data } = await axios.get(`${server}/product/single/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "getProductDetailsSuccess", payload: data.product });
  } catch (error) {
    dispatch({
      type: "getProductDetailsFailure",
      payload: error.response.data.message,
    });
  }
};
