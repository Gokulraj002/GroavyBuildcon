import React from "react";
// import Banner from '../../images/banner.jpeg';
// import About from "../../images/home.png";

import Home from "../../images/home.png";
import about from "../../images/about-us.jpg";
import Land from "../../images/land.png";
import Service from "../../images/service.png";
import welcome from "../../images/welcome-home.jpg";

const HomeAbout = () => {
  return (
    <>
      <div
        className="container-fluid pb-md-0 pb-3"
        style={{ backgroundColor: "#3a6958" }}
      >
        <div className="container py-3 py-md-0 ">
          <div className="row  py-md-5 aos">
            <div className="col-12 col-lg-6 p-lg-4 para-color2">
              <div data-aos="fade-right">
                <h6 className="m-0 fs-4 color">Welcome To</h6>
                <h2 className="font1 color1">Groavy Buildcon</h2>
                <p className="text-white justify">
                  Groavy Buildcon is a prominent realty enterprise, redefining
                  modern living through innovative design and versatile
                  projects, including flagship Managed Farmlands projects
                  spanning South Indian states for a seamless urban-nature
                  blend.
                </p>{" "}
                <p className="text-white justify">
                  {" "}
                  With a seasoned team, we prioritize world-class amenities,
                  elevating lifestyles, and promising value appreciation. Join
                  us at Groavy Buildcon to experience visionary living where
                  innovation meets reality.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 aos" data-aos="fade-left">
              <img
                className="w-100 mx-auto d-block p-md-2 "
                src={welcome}
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row aos">
            <div
              className="col-12 col-lg-7 p-lg-5 mt-3 "
              data-aos="fade-down-right"
            >
              <h2 className="font1 " style={{ color: "#3A6958" }}>
                About Us
              </h2>
              <p className="justify para-color2">
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
            <div className="col-12 col-lg-5 " data-aos="fade-down-left">
              <img
                className="w-100 p-md-5 d-block mx-auto "
                src={about}
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="container-fluid bg py-4">
        <div className="row justify-content-center aos para-color2">
          <h2 className="text-center font1 color">Our Services</h2>

          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3  aos "
            data-aos="fade-down-right"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100  d-block mx-auto"
              src={Home}
              alt="Buy a Land"
            ></img>
            <h4 className=" text-center font2 color1">Buy a Land</h4>

            <p className="text-center px-md-2 text-white">
              Discover your dream home with Groavy Buildcon. Let our experts
              guide you through a seamless home-buying experience, turning your
              vision into reality.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3 aos"
            data-aos="zoom-out-down"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100 d-block mx-auto"
              src={Land}
              alt="Buy a Farm"
            ></img>
            <h4 className="text-center font2 color1">Buy a Farm</h4>

            <p className="text-center text-white">
              Explore endless possibilities with our land listings at Groavy
              Buildcon. Find the perfect parcel to build your dreams, and let us
              navigate the path to your ideal property investment.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 mx-lg-3 aos"
            data-aos="fade-down-left"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-100 d-block mx-auto"
              src={Service}
              alt="Buy a Farmland"
            ></img>
            <h4 className=" text-center font2 color1">Buy a Farmland</h4>

            <p className="text-center text-white">
              Embark on a rural adventure with our diverse farmland listings at
              Groavy Buildcon. Invest in the serenity of nature and cultivate
              your vision of the perfect agricultural haven.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
