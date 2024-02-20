import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slides: [
    {
      image: "../images/Frame 2.png",
      title: "First",
      desc: "This is a sample description for the first slide.",
    },
    {
      image: "../images/Frame 3.png",
      title: "Second",
      desc: "This is a sample description for the first slide.",
    },
    {
      image: "../images/Frame 4.png",
      title: "third",
      desc: "This is a sample description for the first slide.",
    },
    {
      image: "../images/Frame 5.png",
      title: "fourth",
      desc: "This is a sample description for the first slide.",
    },
  ],
};

const HeroSlice = createSlice({
  name: "heroSlice",
  initialState,
  reducers: {},
});

export default HeroSlice.reducer;
