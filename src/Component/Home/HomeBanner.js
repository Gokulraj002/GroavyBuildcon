import React from "react";
import video from "../../images/video.mp4";
import banner from "../../images/home-video.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const HomeBanner = () => {
  return (
    <>
      <div>
        <div className=" position-relative">
          <video
            autoPlay
            muted
            loop
            src={video}
            alt="background"
            className="w-100 d-none d-md-block"
          ></video>
          <div className="aos">
            {/* <img className="d-block d-md-none w-100 effect" src={banner} alt='Banner'/> */}
            <video
              autoPlay
              muted
              // loop
              src={banner}
              alt="background"
              className="w-100 d-block d-md-none"
            ></video>
          </div>
          <div className=" position-absolute translate-middle hero-content text-center">
            <h2 id="head">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Find Your Dream Land By <br></br>
              Groavy Buildcon{" "}
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2>
            <p className="font fw-bold">
              embark on a journey to own your perfect piece of earth, where
              dreams bloom and possibilities grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
