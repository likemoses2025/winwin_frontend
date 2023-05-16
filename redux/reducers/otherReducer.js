import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder
    // Request
    .addCase("changePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePicRequest", (state) => {
      state.loading = true;
    })
    // Success
    .addCase("changePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    // Failure
    .addCase("changePasswordFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePicFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  // ETC
  builder.addCase("clearError", (state, action) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state, action) => {
    state.message = null;
  });
});
