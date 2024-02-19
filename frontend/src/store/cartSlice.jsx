import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    add_to_cart: (state, action) => {
      state.cart.push({
        id: nanoid(),
        name: action.payload.name,
        price: action.payload.price,
        quantity: 1,
      });
    },
    remove_from_cart: (state, action) => {
      state.cart = state.cart.filter((dat) => dat.id != action.payload);
    },
  },
});

export const { add_to_cart, remove_from_cart } = cartSlice.actions;

export default cartSlice.reducer;
