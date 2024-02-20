import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { user: "", cart: [] };

export const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload.user;
      state.cart = action.payload.cart;
    },
    add_to_cart: (state, action) => {
      state.cart.push({
        prod_id: action.payload._id,
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    },
    remove_from_cart: (state, action) => {
      state.cart = state.cart.filter((dat) => dat.prod_id != action.payload);
    },
  },
});

export const { add_to_cart, remove_from_cart } = cartSlice.actions;

export default cartSlice.reducer;
