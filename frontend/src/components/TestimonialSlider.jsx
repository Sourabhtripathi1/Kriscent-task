// TestimonialSlider.js
import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";

export const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://placekitten.com/200/200", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://placekitten.com/201/201", // Replace with actual image URL
    },
    // Add more testimonials as needed
  ];

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
