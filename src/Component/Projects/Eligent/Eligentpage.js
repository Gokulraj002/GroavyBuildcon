import React from "react";
import Slider from "./Slider";
import SliderOne from "./SliderOne";
// import SliderTwo from './SliderTwo';
// import EligentYoutupe from "./EligentYoutupe";
import Amenities from "./Amenities";
import Map from "./Map";
import LocationMap from "./LocationMap";
import Layout from "./LayOut";
import Content from "./Content";
import Eligenthome from "./Eligenthome";
import EligantForm from "./EligantForm";
import NearByLocation from "./NearByLocation";
// import Testimonials from './Testimonials';
import ProjectHighlights from "./ProjectHighlights";
import ScrollModel from "./ScrollModel";

const Eligentpage = () => {
  return (
    <div>
      {/* <img src={image} alt="about-banner" className="w-100" height={'400px'} />  */}

      <Eligenthome />
      <EligantForm />
      <Slider />
      <Content />
      <SliderOne />
      <Amenities />
      <Layout />
      <NearByLocation />
      <ProjectHighlights />
      {/* <EligentYoutupe /> */}
      <LocationMap />
      {/* <Testimonials/> */}
      <Map />
      <ScrollModel />
    </div>
  );
};

export default Eligentpage;
