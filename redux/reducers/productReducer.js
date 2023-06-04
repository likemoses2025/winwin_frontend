import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer(
  { products: [], product: {}, orderProducts: [] },
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
      .addCase("getOrderProductsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getProductDetailsRequest", (state) => {
        state.loading = true;
      })
      .addCase("getRefundProductsRequest", (state) => {
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
      .addCase("getOrderProductsSuccess", (state, action) => {
        state.loading = false;
        state.orderProducts = action.payload.products;
      })
      .addCase("getProductDetailsSuccess", (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase("getRefundProductsSuccess", (state, action) => {
        state.loading = false;
        state.refundProducts = action.payload.products;
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
      .addCase("getOrderProductsFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getProductDetailsFailure", (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase("getRefundProductsFailure", (state, action) => {
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
