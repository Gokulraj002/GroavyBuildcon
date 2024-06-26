import React from "react";
import image from "../../images/weoff.png";
import Home from "../../images/manage.png";
import Land from "../../images/experience1.png";
import Service from "../../images/yoga.png";

const Weoffer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container ">
          <div className="row my-3 aos">
            <h6
              className="font1 text-center mt-3 mt-md-1  fon"
              style={{ color: "#3A6958" }}
            >
              Our Offering Farmlands
            </h6>
            <div
              className="col-12 col-lg-6 mt-4  aos"
              data-aos="fade-down-right"
            >
              <img className="w-100 img-fluid " src={image} alt="Banner" />
            </div>
            <div
              className="col-12 col-lg-6 mt-md-4 pt-3 pt-md-5 aos"
              data-aos="fade-down-left"
            >
              <h2 className="font2 " style={{ color: "#F9AB24" }}>
                Crafting Everlasting Paradises of Serenity:
              </h2>
              <p className="text-secondary justify para-color2">
                At Groavy Buildcon, we are dedicated to crafting serene
                sanctuaries that blend the timeless allure of nature with
                contemporary conveniences. Our vision is to create holistically
                managed farmlands where modernity harmonizes with untouched
                natural beauty, providing an unparalleled experience of
                tranquility and prosperity.
                <br></br>For more information or to schedule a visit to our
                farmlands, please contact us today. Let Groavy Buildcon help you
                find your perfect piece of paradise
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* some content */}

      <div className="container-fluid d-flex bg py-2 mt-4">
        <div className="row justify-content-center aos para-color2">
          {/* <h2 className="text-center font1 color" >Our Services</h2> */}

          {/* <h2 className='text-center' style={{ color: '#c1e74b' }}>Our Services</h2> */}
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="fade-down-right"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-50  d-block mx-auto "
              src={Home}
              alt="Buy a Land"
            ></img>
            <h4 className=" text-center font2 color1 mt-4 pt-md-2">
              Holistically Managed Farmlands
            </h4>

            <p className="justify px-md-2 text-white">
              Our farmlands are meticulously managed to preserve the integrity
              of the natural environment while incorporating sustainable
              practices. We believe in a holistic approach that nurtures the
              land and its resources, ensuring that every piece of farmland is
              not just a property, but a thriving ecosystem.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="zoom-out-down"
            style={{ borderRadius: "5px" }}
          >
            <img
              className=" d-block w-50 mx-auto "
              src={Land}
              alt="Buy a Farm"
            ></img>
            <h4 className="text-center font2 color1 mt-4 pt-md-2">
              Experience Groavy Buildcon
            </h4>

            <p className="justify text-white">
              Discover the everlasting paradises of serenity with Groavy
              Buildcon. Our commitment to excellence and sustainability
              guarantees a living experience that is truly unique. Join us in
              our journey to create harmonious living spaces where modernity and
              nature coexist in perfect balance.
            </p>
          </div>
          <div
            className="col-12 col-md-6 col-lg-3 m-lg-3 aos"
            data-aos="fade-down-left"
            style={{ borderRadius: "5px" }}
          >
            <img
              className="w-50 d-block mx-auto"
              src={Service}
              alt="Buy a Farmland"
            ></img>
            <h4 className=" text-center font2 color1 mt-4 pt-md-2">Modern Serenity</h4>
            <p className="justify text-white">
              We understand the importance of modern amenities in enhancing the
              quality of life. That's why our developments seamlessly integrate
              state-of-the-art facilities within the natural landscape. From
              well-planned infrastructure to smart living solutions, we ensure
              that our residents enjoy the best of both worlds - the peace of
              nature and the comforts of modern living.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weoffer;
