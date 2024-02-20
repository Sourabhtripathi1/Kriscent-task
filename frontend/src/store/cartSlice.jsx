import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { user: "", cart: [] };

export const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    set_cart: (state, action) => {
      state.user = action.payload.user;
      state.cart = action.payload.cart;
    },
    remove_cart: (state, action) => {
      state.cart = [];
    },
    add_to_cart: (state, action) => {
      state.user = action.payload.user;

      const existingItemIndex = state.cart.findIndex(
        (item) => item.prod_id === action.payload.product._id
      );

      if (existingItemIndex !== -1) {
        // If item with the same prod_id exists, increment quantity
        state.cart[existingItemIndex].quantity += 1;
      } else {
        // If not, add a new item to the cart
        state.cart.push({
          prod_id: action.payload.product._id,
          name: action.payload.product.name,
          price: action.payload.product.price,
          quantity: 1,
        });
      }
    },
    remove_from_cart: (state, action) => {
      const productIdToRemove = action.payload;

      state.cart = state.cart.map((item) => {
        if (item.prod_id === productIdToRemove) {
          // If quantity is greater than 1, decrement it; otherwise, remove the item
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            // Remove the item if the quantity is 1
            return null;
          }
        }
        return item;
      });

      // Filter out null values after the map
      state.cart = state.cart.filter((item) => item !== null);
    },
  },
});

export const { set_cart, add_to_cart, remove_from_cart ,remove_cart} = cartSlice.actions;

export default cartSlice.reducer;
