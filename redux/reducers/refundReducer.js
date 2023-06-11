import { createReducer } from "@reduxjs/toolkit";

export const refundReducer = createReducer({ refundItems: [] }, (builder) => {
  builder
    // Request
    .addCase("getMyRefundRequest", (state) => {
      state.loading = true;
      state.loadingDelete = true;
    })
    // Success
    .addCase("getMyRefundsSuccess", (state, action) => {
      state.loading = false;
      state.loadingDelete = false;
      state.message = action.payload.message;
      state.refunds = action.payload.refunds;
    })
    // Failure
    .addCase("getMyRefundsFailure", (state, action) => {
      state.loading = false;
      state.loadingDelete = false;
      state.error = action.payload;
    });
  builder.addCase("clearOrder", (state, action) => {
    state.refundItems = [];
  });
  builder.addCase("clearError", (state, action) => {
    state.error = null;
  });

  builder.addCase("clearMessage", (state, action) => {
    state.message = null;
  });
});
