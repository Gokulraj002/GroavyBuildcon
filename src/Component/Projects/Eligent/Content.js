import React, { useState } from "react";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import "./css/Content.css";
import Modal from "react-bootstrap/Modal";
import EligantMainForm from "./EligantMainForm";
import ReactGA from "react-ga4";
import EligentYoutupe from "./EligentYoutupe";
import broucher from "./ElegantImages/broucher.pdf"; // Import the PDF file

function Content() {
  const [showModal, setShowModal] = useState(false);
  const [downloadAfterSubmit, setDownloadAfterSubmit] = useState(false);

  const handleEnquiryClick = () => {
    ReactGA.event({
      category: "Enquiry",
      action: "Click Enquiry Now Button",
      label: "Enquiry Form Opened",
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleFormSubmitSuccess = () => {
    setDownloadAfterSubmit(true);
    setShowModal(false);
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = broucher;
    link.download = "broucher.pdf";
    link.click();
    setDownloadAfterSubmit(false);
  };

  return (
    <div className="bg">
      <div className="container pb-5 mt-2">
        <div className="row aos">
          <h2 className="font1 text-center py-3" style={{ color: "#F9AB24" }}>
            Luxury farmland in Perasandra
          </h2>

          <div className="col-12 col-lg-6  aos" data-aos="fade-down-right">
            <EligentYoutupe />
          </div>
          <div className="col-12 col-lg-6 aos" data-aos="fade-down-left">
            <div className="content-details  text-white">
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " />
                Location: Chikkaballapura Taluk, Jeeganahalli Village,
                Chickballapur District.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Dispersed throughout 28
                acres of development with a forest theme.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Plot Size: Commences at
                5,700 square feet and increases to 10,000 square feet.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " />
                Plantations Include: Sandalwood , Mahagani , Mango ,Cashew,
                Sapota , Jackfruit And more.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Each block has 25
                trees, therefore embrace the natural world.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Luxurious Amenities
                Provided : Premium Club House, Swimming Pool , Cafeteria ,30
                Feet Wide Roads , Water Supply from 5 Borewells , Solar Power ,
                And 20+ More Amenities.
              </p>
              <p className="para-color1">
                <FaCheckCircle className="icon-color me-2 " /> Invest in your future
                and discover the elegance of rural living.
              </p>
              <button className="button-48" onClick={handleEnquiryClick}>
                <span className="text">
                  <FaDownload className="me-2" />
                  Download Brochure
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        data-aos="flip-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-md"
        aria-labelledby="enquiryModalLabel"
        centered
      >
        <Modal.Body data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <EligantMainForm onSubmitSuccess={handleFormSubmitSuccess} />
        </Modal.Body>
      </Modal>
      {downloadAfterSubmit && downloadPDF()}
    </div>
  );
}

export default Content;
