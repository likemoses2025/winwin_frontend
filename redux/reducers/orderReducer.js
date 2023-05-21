import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({ orderedItems: [] }, (builder) => {
  builder
    // Request
    .addCase("orderRequest", (state) => {
      state.loading = true;
    })

    // Success
    .addCase("orderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.orderedItems = [];
    })

    // Failure
    .addCase("orderFailure", (state, action) => {
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
