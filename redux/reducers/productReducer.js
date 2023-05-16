import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  { products: [], product: {} },
  (builder) => {
    builder
      // Request
      .addCase("getAllProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getNewProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getAdminProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getProductDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("createProductRequest", (state) => {
        state.loading = true;
      })
      .addCase("updateProductRequest", (state) => {
        state.loading = true;
      })
      // Success
      .addCase("getAllProductsSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase("getNewProductsSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase("getAdminProductsSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })
      .addCase("getProductDetailsSuccess", (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase("createProductSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.inStock = action.payload.inStock;
        state.outOfStock = action.payload.outOfStock;
      })
      .addCase("updateProductSuccess", (state, action) => {
        state.loading = false;
        state.product = action.payload.product;
      })
      // Failure
      .addCase("getAllProductsFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getNewProductsFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getAdminProductsFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getProductDetailsFailure", (state, action) => {
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
      });

    builder.addCase("clearError", (state, action) => {
      state.error = null;
    });

    builder.addCase("clearMessage", (state, action) => {
      state.message = null;
    });
  }
);
