import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { productReducer } from "./reducers/productReducer";
import { orderReducer } from "./reducers/orderReducer";
import { refundReducer } from "./reducers/refundReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    other: otherReducer,
    product: productReducer,
    order: orderReducer,
    refund: refundReducer,
  },
});
