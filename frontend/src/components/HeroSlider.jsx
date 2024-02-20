import React from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";

const HeroSlider = () => {
  const HeroSliders = useSelector((state) => state.HeroSlider.slides);

  return (
    <>
      <Carousel>
        {HeroSliders.map((slides, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slides.image}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>{slides.title}</h3>
              <p>{slides.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeroSlider;
