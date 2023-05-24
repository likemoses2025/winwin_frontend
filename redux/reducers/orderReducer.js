import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ orderedItems: [] }, (builder) => {
  builder
    // Request
    .addCase("getDealerOrdersRequest", (state) => {
      state.loading = true;
    })
    // Success
    .addCase("getDealerOrdersSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.dealerOrders = action.payload.dealerOrders;
    })
    // Failure
    .addCase("getDealerOrdersFailure", (state, action) => {
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
