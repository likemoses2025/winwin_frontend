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
    .addCase("createProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("addProductImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteProductAndImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("createOrderRequest", (state) => {
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
    .addCase("createProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProductSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductAndImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("createOrderSuccess", (state, action) => {
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
    })
    .addCase("createProductFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProductFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addProductImageFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteProductImageFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteProductAndImageFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("createOrderFailure", (state, action) => {
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
