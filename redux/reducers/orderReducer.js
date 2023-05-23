import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ orderedItems: [] }, (builder) => {
  builder
    // Request
    .addCase("getOrderRequest", (state) => {
      state.loading = true;
    })

    // Success
    .addCase("getOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    })

    // Failure
    .addCase("getOrderFailure", (state, action) => {
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
