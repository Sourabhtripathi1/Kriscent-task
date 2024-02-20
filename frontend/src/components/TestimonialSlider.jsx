// TestimonialSlider.js
import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux";

export const TestimonialSlider = () => {

  const testimonials=useSelector((state)=>state.testimonials.testimonials)

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {testimonials.map((testimonial) => (
        <Carousel.Item key={testimonial.id}>
          <div className="card">
            <div className="testimonial-container">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                roundedCircle
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
