import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./contactform.css";
import "../Home/form.css";
import Cfrom from "./Cfrom";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/6366829999", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:support@groavy.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+91 6366829999";
  };

  const handleLinkClick = (url, e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/groavy-buildcon/', '_blank');
};

  return (
    <div className="container-fluid bg-light py-5 contact-containerfluid">
      <div className="container contact-container">
        <div className="row">
          <div className="d-flex mb-3 flex-column">
            <h3 className="font2 text-center mt-4 color">
              Helping you is our priority
            </h3>
          </div>
          <div className="col-lg-4 col-md-12 text-white ps-4 shadow-lg">
            <div className="mb-4 mt-md-3">
              <h1 className="h3 ms-2">Contact Information</h1>
              <p className="opacity-50 ms-2">
                <small>
                  Fill out the form and we will get back to you within 24 hours.
                </small>
              </p>
            </div>
            <div className="d-flex flex-column px-0">
              <ul className="m-0 p-0">
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handlePhoneClick}
                  >
                    +91 6366829999
                  </span>
                </li>
                <li className="d-flex align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleEmailClick}
                  >
                    support@groavy.com
                  </span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </span>
                  <Link
                    to="#"
                    className="text-decoration-none"
                    style={{ color: "#ccc" }}
                    onClick={(e) =>
                      handleLinkClick(
                        "https://maps.google.com/?q=G06, Akshaya Ruby Building, Yelahanka Old Town, Nehru Nagar, Bangalore, 560064, KA",
                        e
                      )
                    }
                  >
                    Address: Groavy Buildcon, G06, Akshaya Ruby Building,
                    Yelahanka Old Town, Nehru Nagar, Bangalore, 560064,
                    Karnataka.
                  </Link>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4 para-color1">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-4 ms-2"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleWhatsappClick}
                  >
                    Whatsapp
                  </span>
                </li>
                <li className="d-flex justify-content-start align-items-center mb-4">
                  <span
                    style={{ cursor: "pointer" }}
                    className="opacity-75 d-flex align-items-center me-3 fs-3 ms-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleLinkedinClick}
                  >
                    LinkedIn
                  </span>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 px-5 rounded-3 shadow-lg">
            <Cfrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
