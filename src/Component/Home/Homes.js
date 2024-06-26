import React from "react";
import HomeAbout from "./homeabout";
import Weoffer from "./Weoffer";
import Slider from "./GallerySlider";
import Testimonials from "./Testimonials";
import "./home.css";
import HomeBanner from "./HomeBanner";
import HomePagePopupForm from "./HomePagePopupForm";
import HomeProjects from "./HomeProjects";
// import Form from "./Form";
// import Forms from "./Form";

const Homes = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout />
      <Weoffer/>
      <HomeProjects/>
      <Slider/>
      <Testimonials/>
      <HomePagePopupForm/>
      {/* <Forms/> */}
    </div>
  );
};

export default Homes;
