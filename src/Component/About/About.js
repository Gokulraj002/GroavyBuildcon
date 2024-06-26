import React from "react";
import image from "../../images/About-Banner.png";
import image1 from "../../images/mob-about.png";
import about from "../../images/about.jpg";
import './about.css';
import Mision from "../../images/Mision3.jpg";
import Vision from "../../images/Vision.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
    <div className="position-relative">
      {/* <div className="img">

      </div> */}
      <picture className="w-100">
  <source srcSet={image1} media="(max-width: 699px)"/>
  <img src={image} alt="about-banner" className="w-100" height={'380px'}/>
</picture>
      
    {/* <img src={image} alt="about-banner" className="w-100" />  */}
  <div className="position-absolute top-50 start-50 translate-middle">
    {/* <div className="text-center"> */}
    {/* <p className="para-color font text-white text-center">grow together</p> */}

    <h2 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Grow Together
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2>
            <p className="para-color font text-white text-center">the best way to predict the future is to create it together.</p>

    </div>
    </div>
      <div className="container-fluid bg" style={{ backgroundColor: "#3a6958" }}>
        <div className="container ">
          <div className="row  pb-3 aos py-3 para-color2">
            <div className="col-12 col-lg-6 " >
              <h2 className="font1 color1">Groavy Buildcon</h2>
              <p className="text-white justify">
              Groavy Buildcon is indeed a real estate company. Their "About
                Us" page highlights their dedication to excellence in the real
                estate sector. They emphasize their commitment to guiding
                clients through every step of the home buying or selling process
                with a team of experienced professionals. Groavy Buildcon
                focuses on more than just properties; they aim to create homes
                that foster cherished memories and lasting legacies. Their
                mission is to turn real estate aspirations into reality, whether
                it involves finding the perfect home, maximizing investments, or
                facilitating confident sales. They offer personalized guidance
                and aim to make real estate an experience filled with purpose,
                passion, and possibility.
              </p>
            </div>
            <div className="col-12 col-lg-6 aos ">
   
              <img
                className="w-100 mx-auto d-block mt-lg-4 "
                src={
                  about}
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ backgroundColor: "#f6f5f2" }}>
        <div className="container py-3 para-color2">
          <div className="row aos">
            <div
              className="col-12 col-lg-6  aos"
              data-aos="fade-down-right"
            >
              <div className="vision-img"></div>
              <img className="w-100 p-3 rounded" src={Vision} alt="Vision" />
            </div>
            <div
              className="col-12 col-lg-6 mt-lg-5"
              data-aos="fade-down-left"
            >
              <h2 className="" style={{ color: "#3A6958" }}>
                Our Vision
              </h2>
              <p className="">
                At Groavy Buildcon, real estate is about creating enduring
                experiences rather than just owning properties. We build homes
                that serve as the setting for cherished memories, enduring
                legacies, and dreams that last a lifetime. Our intention is to
                create places where life's most memorable moments occur. We also
                provide opportunities for investment, growth, and sustainable
                living through our competence in agricultural sales. Our rural
                landscapes suit many needs and objectives, be it a tranquil
                retreat or a prosperous business venture.
              </p>
            </div>
          </div>
        </div>
        <div className="container para-color2">
          <div className="row pb-4 aos">
            <div
              className="col-12 col-lg-6 mt-lg-5 aos"
                  data-aos="fade-down-right"
            >
              <h2 style={{ color: "#3A6958" }}>Our Mission</h2>
              <p className="">
                Our mission is making your dreams come true in the real estate
                market is our goal. Our goal is to fulfill your dreams, whether
                it's locating the ideal house, making the most of your
                investment, or selling with assurance. We make sure every step
                of your real estate journey is easy and fulfilling by providing
                individualized care and a dedication to quality. Along the way,
                real estate will transform into a fulfilling, passionate, and
                exciting experience. Come along with us.
              </p>
            </div>
            <div
              className="col-12 col-lg-6 aos "
                  data-aos="fade-down-left"
            >
              <img className="w-100 p-3 rounded" src={Mision} alt="Mission" />
            </div>
          </div>
        </div>
      </div>
      <AboutContent/>

      <div
        className="container-fluid who-we-are" >
        <div className="container text-black">
          <div className="row pt-4 aos"
          data-aos="fade-down">
            <h2 className="text-center" style={{ color: "#c1e74b" }}>
              Who We Are{" "}
            </h2>
            <p className="text-center para-color2">
              We understand that real estate is not just about properties; it's
              about location, community, and lifestyle. With an in-depth
              understanding of the local market, we guide you to neighborhoods
              that match your preferences and aspirations. Our expertise extends
              beyond just listing homes; we delve into the heart of each
              community, considering factors like local amenities, school
              quality, and lifestyle fit. Whether you're seeking a vibrant urban
              setting, a quiet suburban neighborhood, or a picturesque rural
              area, we tailor our recommendations to suit your unique needs. By
              focusing on what truly matters to you, we help you find not just a
              house, but a place where you can thrive and feel at home.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
