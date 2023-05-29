import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ orderedItems: [] }, (builder) => {
  builder
    // Request
    .addCase("getMyOrdersRequest", (state) => {
      state.loading = true;
    })
    // Success
    .addCase("getMyOrdersSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.orders = action.payload.orders;
    })
    // Failure
    .addCase("getMyOrdersFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  builder.addCase("clearOrder", (state, action) => {
    state.orderedItems = [];
  });
  builder.addCase("clearError", (state, action) => {
    state.error = null;
  });

  builder.addCase("clearMessage", (state, action) => {
    state.message = null;
  });
});
