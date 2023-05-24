import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ orderedItems: [] }, (builder) => {
  builder
    // Request
    .addCase("getUserOrdersRequest", (state) => {
      state.loading = true;
    })

    // Success
    .addCase("getUserOrdersSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.userOrders = action.payload.userOrders;
    })

    // Failure
    .addCase("getUserOrdersFailure", (state, action) => {
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
