import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import house from "./ElegantImages/full-change1.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./css/slider.css";
import Home from "./ElegantImages/onee.png";
import Home1 from "./ElegantImages/two.png";
import Home3 from "./ElegantImages/three.png";
import Home4 from "./ElegantImages/four.png";
import SwimRest from "./ElegantImages/five.png";
import Home2 from "./ElegantImages/six.png";
import ori from "../../../images/ori1.png";

const sliderImages = [ori, Home, Home1, Home3, Home2, SwimRest, Home4, ];

const SliderComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h2 className="font11  text-center my-4 " style={{ color: "#3A6958" }}>
        Explore Our Luxury Club House
      </h2>
      <div className="bg pb-5">
        {/* <img src={house} alt="Explore-house" className="w-100" /> */}

        <div className="container my-md-5 my-4 pt-5">
          <Carousel
            indicators={false}
            prevIcon={<CustomPrevIcon onClick={handlePrevClick} />}
            nextIcon={<CustomNextIcon onClick={handleNextClick} />}
            activeIndex={selectedImageIndex}
          >
            {sliderImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="d-flex justify-content-center mt-3">
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`small-image mx-1 ${
                  index === selectedImageIndex ? "selected" : ""
                }`}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const CustomPrevIcon = ({ onClick }) => (
  <FaArrowLeft
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

const CustomNextIcon = ({ onClick }) => (
  <FaArrowRight
    className="custom-carousel-icon bg-white rounded-circle text-dark fs-2 p-2"
    onClick={onClick}
  />
);

export default SliderComponent;
