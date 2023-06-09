import axios from "axios";
import { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux";
import {
  getAdminProducts,
  getOrderProducts,
} from "../redux/actions/productAction";
import { loadUser } from "../redux/actions/userAction";
import { getMyOrders } from "../redux/actions/orderAction";
import { getMyRefunds } from "../redux/actions/refundAction";

const server = process.env.API_URL;

export const useMessageAndErrorUser = (
  dispatch,
  navigation,
  navigateTo = "login"
) => {
  const { loading, message, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
      dispatch(loadUser());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      console.log(error);

      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });

      navigateTo && navigation.navigate(navigateTo);

      func && dispatch(func());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${server}/product/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
      });
  }, [isFocused]);
};

export const useAdminProduct = (dispatch, isFocused) => {
  const { products, inStock, outOfStock, error, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: error });
      dispatch({ type: "clearError" });
    }

    dispatch(getAdminProducts());
  }, [dispatch, isFocused, error]);

  return { products, inStock, outOfStock, loading };
};

export const useGetOrderProducts = (dispatch, isFocused) => {
  const { orderProducts, error, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: error });
      dispatch({ type: "clearError" });
    }
    dispatch(getOrderProducts());
  }, [dispatch, isFocused, error]);

  return { orderProducts, loading };
};

export const useGetTeamOrders = (isFocused, isAdmin = false) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/order/${isAdmin ? "admin" : "my"}`)
      .then((res) => {
        setOrders(res.data.orders);
        setLoading(false);
      })
      .catch((e) => {
        Toast.show({ type: "error", text1: e.response.data.message });
        setLoading(false);
      });
  }, [isFocused]);

  return { loading, orders };
};

export const useGetOrders = (dispatch, isFocused) => {
  const { orders, loading, error } = useSelector((state) => state.order);
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: error });
      dispatch({ type: "clearError" });
    }
    dispatch(getMyOrders());
  }, [dispatch, isFocused, error]);

  return { orders, loading };
};

export const useGetRefunds = (dispatch, isFocused) => {
  const { refunds, loading, error } = useSelector((state) => state.refund);
  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: error });
      dispatch({ type: "clearError" });
    }
    dispatch(getMyRefunds());
  }, [dispatch, isFocused, error]);

  return { refunds, loading };
};

export const useGetRefundProducts = (dispatch, isFocused) => {
  const { expiredProducts, error, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      Toast.show({ type: "error", text1: error });
      dispatch({ type: "clearError" });
    }
    dispatch(getRefundProducts());
  }, [dispatch, isFocused, error]);

  return { expiredProducts, loading };
};
