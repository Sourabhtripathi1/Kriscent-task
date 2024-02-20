import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonials:  [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "../images/testis.jpg", 
    },
    {
      id: 2,
      name: "lorem Smith",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "../images/testis (2).jpg",
    },
    {
      id: 2,
      name: "lorem Smith",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "../images/testis3.jpg", 
    }
   
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
