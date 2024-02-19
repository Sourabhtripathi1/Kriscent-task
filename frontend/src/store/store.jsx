import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import testimonialsReducer from "./testimonialSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    testimonials: testimonialsReducer,
    userAuth: authSlice,
    userCart: cartSlice,
  },
});

export default store;
