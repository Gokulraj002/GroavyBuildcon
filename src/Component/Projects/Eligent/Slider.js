import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Entrance from "./ElegantImages/entrance.png";
// import Park from "./ElegantImages/club.png";
import Rock from "./ElegantImages/park-change.png";
import swimming from "./ElegantImages/swimm.png";
import Gate from "./ElegantImages/swimming.png";
import Swim from "./ElegantImages/rock-change.png";
// import FullView from "./ElegantImages/twoo.png";
import ori from "../../../images/ori.png"
import house from "./ElegantImages/main2.png";
import "./css/slider.css";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const sliderImages = [
  ori,
  house,
  Entrance,
  Rock,
  // FullView,
  swimming,
  Swim,
  Gate,
];

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
        Explore Our FarmLand
      </h2>
      <div className=" pb-5">
        {/* <div className='location-zoom  '>
      <Zoom>
              <img src={house} alt="Explore-house" className="w-100" 
              
              />

        </Zoom>
      </div> */}
        <div className="container my-4">
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
