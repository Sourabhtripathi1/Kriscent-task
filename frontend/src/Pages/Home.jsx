import React from "react";
import MyNavbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";
import { TestimonialSlider } from "../components/TestimonialSlider";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export const Home = () => {
  return (
    <>
      <MyNavbar />

      <HeroSlider />

      <section className="pt-5">
        <div className="container">
          <ProductSlider />
        </div>
      </section>


      <section
        className="container"
        style={{ width: "90vw", maxWidth: "600px" }}>
        <TestimonialSlider />
      </section>

      <section
        className="container"
        style={{ width: "90vw", maxWidth: "600px" }}>
        <ContactForm />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};
