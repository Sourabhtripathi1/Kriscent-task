import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Product 1", price: 19.99, img: "" },
    { id: 2, name: "Product 2", price: 29.99, img: "" },
    { id: 3, name: "Product 2", price: 29.99, img: "" },
    { id: 4, name: "Product 2", price: 29.99, img: "" },
    { id: 5, name: "Product 2", price: 29.99, img: "" },
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
