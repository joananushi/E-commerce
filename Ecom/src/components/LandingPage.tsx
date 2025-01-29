import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="landing-page d-flex flex-column flex-lg-row align-items-center justify-content-between p-4">
      {/* Left Section */}
      <div className="left-section text-center text-lg-start">
        <h1 className="landing-title fw-bold display-4 mb-4">
          Find Your Favorite Products Here
        </h1>
        <p className="landing-description text-muted fs-5 mb-4">
          Explore a wide variety of high-quality products tailored to meet your
          needs. From electronics to fashion, we’ve got you covered.
        </p>
        <button className="btn btn-primary btn-lg rounded-pill px-4">
          Shop Now
        </button>
      </div>

      {/* Right Section - Carousel */}
      <div className="right-section mt-5">
  <Carousel className="product-carousel">
    <Carousel.Item>
      <img
        className="d-block w-100 rounded square-image"
        src="./1.png"
        alt="Product 1"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded square-image"
        src="./2.png"
        alt="Product 2"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded square-image"
        src="./3.png"
        alt="Product 3"
      />
    </Carousel.Item>
  </Carousel>
</div>

    </div>
  );
};

export default LandingPage;
