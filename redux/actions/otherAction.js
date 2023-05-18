import axios from "axios";

const server = process.env.API_URL;

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "changePasswordRequest" });

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          //   WithCredentials:true 를 통해서 쿠키를 백엔드로 보낼 수 있다.
          //   없다면 로그인을 안한것으로 백엔드에서 판단한다.
          withCredentials: true,
        }
      );

      dispatch({ type: "changePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "changePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const updateProfile =
  (
    team,
    channel,
    email,
    userName,
    sapCode,
    storeName,
    storeAddress,
    phoneNumber
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });

      const { data } = await axios.put(
        `${server}/user/updateprofile`,
        {
          team,
          channel,
          email,
          userName,
          sapCode,
          storeName,
          storeAddress,
          phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFail",
        payload: error.response.data.message,
      });
    }
  };

export const updatePic = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "updatePicRequest" });

    const { data } = await axios.put(`${server}/user/updatepic`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({
      type: "updatePicSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "updatePicFailure",
      payload: error.response.data.message,
    });
  }
};

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createProductRequest" });

    const { data } = await axios.post(`${server}/product/new`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    });

    dispatch({
      type: "createProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "createProductFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateProduct =
  (id, no, name, code, price, category) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProductRequest",
      });

      const { data } = await axios.put(
        `${server}/product/single/${id}`,
        {
          id,
          no,
          name,
          code,
          price,
          category,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "updateProductSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProductFailure",
        payload: error?.response.data.message,
      });
    }
  };

export const addProductImage = (productId, formData) => async (dispatch) => {
  try {
    dispatch({ type: "addProductImageRequest" });

    const { data } = await axios.post(
      `${server}/product/images/${productId}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      }
    );

    dispatch({
      type: "addProductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addProductImageFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteProductImage = (productId, imageId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteProductImageRequest" });

    const { data } = await axios.delete(
      `${server}/product/images/${productId}?id=${imageId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductImageFailure",
      payload: error.response.data.message,
    });
  }
};

export const deleteProductAndImage = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteProductAndImageRequest" });

    const { data } = await axios.delete(`${server}/product/single/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "deleteProductAndImageSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductAndImageFailure",
      payload: error.response.data.message,
    });
  }
};
