import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import testimonialsReducer from "./testimonialSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import HeroSlice from "./HeroSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    testimonials: testimonialsReducer,
    userAuth: authSlice,
    userCart: cartSlice,
    HeroSlider: HeroSlice,
  },
});

export default store;
