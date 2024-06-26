import React from "react";
// import { Carousel } from "react-bootstrap";
import house from "./ElegantImages/sliderelegant1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
// import house1 from "./ElegantImages/Groavy-Home.png";
import logo from "./ElegantImages/eligent logo.png";
import "./css/eligenthome.css";
import banner from "./ElegantImages/Eligant-video.mp4";
import "./css/amine.css";

const CarouselComponent = () => {
  return (
    <div className="position-relative ">
      <div className="aos">
        <picture className="w-100 ">
          {/* <source
            srcSet={house1}
            media="(max-width: 699px)"
            className="effect"
          /> */}
          <img  src={house} alt="about-banner" className="w-100 effect d-none d-md-block"/>
          <video
            autoPlay
            muted
            // loop
            src={banner}
            alt="background"
            className="w-100 d-block d-md-none"
          ></video>
        </picture>
      </div>
     
      <div className="position-absolute pos translate-middle">
        <img className="mx-auto d-block imggg" src={logo} alt="circle logo" />

        <p className="text-center text-white gap-0" id="head1">
          {/* Invest in Our Premium Farm Lands and Villas Project */}
          <FontAwesomeIcon
            icon={faTree}
            className="icon-before animated-icon"
          />
          Discover the Future of Luxury Living <br></br>Invest Wisely, Live
          Lavishly{" "}
          <FontAwesomeIcon icon={faTree} className="icon-after animated-icon" />
        </p>
      </div>
    </div>
  );
};

export default CarouselComponent;
