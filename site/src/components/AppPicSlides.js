import React from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";

export default function AppPickSlides() {
  return (
    <div style={{}}>
      <Carousel style={{}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://user-images.githubusercontent.com/42984214/64983893-96985780-d88f-11e9-9ad5-61490af4d474.png"
            alt="First slide"
            size="contain"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://user-images.githubusercontent.com/42984214/64983895-97c98480-d88f-11e9-9246-f0ac636ab4a2.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://user-images.githubusercontent.com/42984214/64983892-95672a80-d88f-11e9-811e-1711c5870bb0.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
