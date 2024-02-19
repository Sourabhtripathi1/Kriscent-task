// Footer.js

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1500);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    // Add your custom logic here
    alert("Button Clicked!");
  };

  const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <footer className="bg-dark text-light p-3 " style={{ height: "250px" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Footer Content</h5>
            <p>Some text here...</p>
          </Col>
          <Col md={6} className="text-md-right">
            <Button variant="primary" onClick={handleButtonClick}>
              Click me
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="mb-0">
              Current Time: {currentTime.toLocaleTimeString()}
            </p>
          </Col>
          <Col className="text-md-right">
            <p className="mb-0 " style={{ height: "50px" }}>
              "{randomQuote}"
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
