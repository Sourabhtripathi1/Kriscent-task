import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials: [
    { id: 1, user: "User 1", comment: "Great product!" },
    { id: 2, user: "User 2", comment: "Excellent service  1 !" },
  ],
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setTestimonials: (state, action) => {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialSlice.actions;
export const selectTestimonials = (state) => state.testimonial.testimonials;
export default testimonialSlice.reducer;
