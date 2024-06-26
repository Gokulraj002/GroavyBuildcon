import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
   faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <footer
        className="text-center text-lg-start text-white bg mt-2"
        style={{ backgroundColor: "#235d47" }}
      >
        <div className="container pt-4" style={{color:'#ccc'}}>
          <section>
            <div className="row  para-color1">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">
                  Groavy Buildcon
                </h6>
                <p className="" style={{color:'#ccc'}}>
                  Embark on a journey to own your perfect piece of earth, where
                  dreams bloom and possibilities grow.
                </p>
                <div>
                  <Link
                    className="btn btn-outline-light btn-floating m-1 text-success rounded-circle icons"
                    role="button"
                    to="#"
                    onClick={(e) =>
                      handleLinkClick("https://www.facebook.com/GroavyBuildcon?mibextid=JRoKGi", e)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="text-success "
                    />
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-floating m-1 text-success rounded-circle icons"
                    role="button"
                    to="#"
                    onClick={(e) => handleLinkClick("https://wa.me/6366829999", e)}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-floating m-1 text-success rounded-circle icons"
                    role="button"
                    to="#"
                    onClick={(e) =>
                      handleLinkClick("https://www.youtube.com/@GroavyBuildcon/videos", e)
                    }
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-floating m-1 text-success rounded-circle icons"
                    role="button"
                    to="#"
                    onClick={(e) =>
                      handleLinkClick("https://www.instagram.com/groavy.buildcon/", e)
                    }
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    className="btn btn-outline-light btn-floating m-1 text-success rounded-circle icons"
                    role="button"
                    to="#"
                    onClick={(e) =>
                      handleLinkClick("https://www.linkedin.com/company/groavy-buildcon", e)
                    }
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" >
                <h6 className="text-uppercase mb-4 fw-bold">Links</h6>
                <p>
                  <Link to="/" className="  text-decoration-none" style={{color:'#ccc'}}>
                    Home
                  </Link>
                </p>
                <p>
                  <Link
                    to="/about"
                    className="  text-decoration-none" style={{color:'#ccc'}}
                  >
                    About Us
                  </Link>
                </p>
                <p>
                  <Link
                    to="/"
                    className=" fs-6 text-decoration-none" style={{color:'#ccc'}}
                  >
                    Projects
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="  text-decoration-none" style={{color:'#ccc'}}
                  >
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="terms&condition" className="  text-decoration-none" style={{color:'#ccc'}}>
                    Terms & Conditions
                  </Link>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">
                  Projects
                </h6>
                <p>
                  <Link to="/" className=" text-decoration-none " style={{color:'#ccc'}}>
                    Elegant Orchards Estate
                  </Link>
                </p>
                <p>
                  <Link to="/" className=" text-decoration-none" style={{color:'#ccc'}}>
                    Buy a FarmLand
                  </Link>
                </p>
                <p>
                  <Link to="/" className=" text-decoration-none" style={{color:'#ccc'}}>
                    Buy a Land
                  </Link>
                </p>
                <p>
                  <Link to="/" className=" text-decoration-none" style={{color:'#ccc'}}>
                    Buy a Farm
                  </Link>
                </p>
                <p>
                  <Link to="privacypolicies" className="  text-decoration-none" style={{color:'#ccc'}}>
                    Privacy & Policy
                  </Link>
                </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold ">
                  Contact
                </h6>
                <p className=""style={{color:'#ccc'}}>
                  <FontAwesomeIcon icon={faHome} className="mr-3 pe-2" />
                  <Link
                    to="#"
                    className=" text-decoration-none" style={{color:'#ccc'}}
                    onClick={(e) => handleLinkClick("https://maps.google.com/?q=G06, Akshaya Ruby Building, Yelahanka Old Town, Nehru Nagar, Bangalore, 560064, KA", e)}
                  >
                    Address: Groavy Buildcon, G06, Akshaya Ruby Building, Yelahanka Old
                    Town, Nehru Nagar, Bangalore, 560064, KARNATAKA.
                  </Link>
                </p>
                <p className="fs-6" style={{color:'#ccc'}}>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3 pe-2" />
                  <Link
                    to="#"
                    className=" text-decoration-none" style={{color:'#ccc'}}
                    onClick={(e) => handleLinkClick("mailto:support@groavy.com", e)}
                  >
                    support@groavy.com
                  </Link>
                </p>
                <p className="fs-6" style={{color:'#ccc'}}> 
                  <FontAwesomeIcon icon={faPhone} className="mr-3 pe-2" />
                  <Link
                    to="#"
                    className="  text-decoration-none" style={{color:'#ccc'}}
                    onClick={(e) => handleLinkClick("tel:6366829999", e)}
                  >
                    +91 6366829999
                  </Link>
                </p>
                {/* <p className="fs-6">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-3 pe-2" />
                  <Link
                    to="#"
                    className="text-white text-decoration-none"
                    onClick={(e) => handleLinkClick("https://wa.me/919025026409?text=hello", e)}
                  >
                    WhatsApp
                  </Link>
                </p> */}
              </div>
            </div>
          </section>
        </div>
        <hr />
        <div className="p-3 text-light">
          <p className="text-center " style={{color:'#ccc'}}>
            © 2024 Groavy Buildcon LLP | All Rights Reserved. 
            
            {/* <Link
              to="#"
              className="text-decoration-none"
              style={{ color: "#f5b024" }}
            >
              {" "}
              Groavy Buildcon
            </Link> */}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
