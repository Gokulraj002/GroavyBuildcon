import React from "react";
import HomeAbout from "./homeabout";
import Weoffer from "./Weoffer";
import Slider from "./GallerySlider";
import Testimonials from "./Testimonials";
import "./home.css";
import HomeBanner from "./HomeBanner";
import HomePagePopupForm from "./HomePagePopupForm";
// import Form from "./Form";
// import Forms from "./Form";

const Homes = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout />
      <Weoffer/>
      <Slider/>
      <Testimonials/>
      <HomePagePopupForm/>
      {/* <Forms/> */}
    </div>
  );
};

export default Homes;
