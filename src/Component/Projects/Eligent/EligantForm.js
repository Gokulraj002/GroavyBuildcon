import React from "react";
import Modal from "react-bootstrap/Modal";
import EligantMainForm from "./EligantMainForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import LayoutImage from "./ElegantImages/elegant-main.jpg";
import ReactGA from "react-ga4"; // Import ReactGA


const EligantForm = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleEnquiryClick = () => {
    ReactGA.event({
      category: "Button Click",
      action: "Download Brochure Clicked",
      label: "Download Brochure Button",
    });
    setShowModal(true);
  };
  const handleFormSubmitSuccess = () => {
    // setDownloadAfterSubmit(true);
    setShowModal(false);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const modalBodyClassName = showModal ? "modal-body-with-animation" : "";

  return (
    <>
      <div className="container-fluid py-md-5 py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6  p-lg-3">
              <h2 className="color">Luxury Farm Sale in Chikkaballapura</h2>
              <p className="justify para-color">
                Find a large 28-acre estate with 5,700 and 10,000 square foot in
                Jeeganahalli Village, Chickballapur District's Chikkaballapura
                Taluk. This property is a green haven, with a variety of
                plantations such as sandalwood, mahogany, mango, cashew, sapota,
                and jackfruit, all nestled among peaceful surroundings.
                <br />
                Well situated, just a quick 40-minute drive from Nandi Hills and
                59 minutes from Bangalore International Airport, makes it the
                perfect getaway from the city. Easy access from NH7, it is
                surrounded by attractions like the Veerapuram Bird Sanctuary,
                Lepakshi Historical Temple, and the Isha Foundation that add to
                its charm.
                <br />
                With a clubhouse, cafeteria, swimming pool, 30 foot wide roads,
                five borewells for water supply, and solar power, you may live
                in the current day. Situated in the middle of 70% open space
                with 25 trees each plot, the estate offers 10% built-up and
                30% super built-up areas, ideal for farmhouses or cottages. For
                a tasteful fusion of luxury and environment, reserve your plot
                today and bask in peace by the ISKCON Temple.
              </p>
              <div className="row" style={{ marginBottom: "20px" }}>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-tree"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}> Themed Plantations</p>
                </div>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}>Across 28 acres</p>
                </div>
                <div className="col-4 text-center">
                  <span style={{ color: "green", fontSize: "24px" }}>
                    <i className="fas fa-home"></i>
                  </span>
                  <p style={{ marginTop: "10px" }}>Start from 5,700 sq.ft</p>
                </div>
              </div>

              <h6 className="text-center" style={{ marginBottom: "10px" }}>
                Get More Details:
              </h6>
              <button
                className="button-48 mx-auto d-block"
                onClick={handleEnquiryClick}
              >
                <span className="text">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />{" "}
                  Enquiry Now
                </span>
              </button>
            </div>
            <div className="col-12 col-lg-6  pt-md-0 mt-3 mt-md-5 ">
              <img
                className="w-100 mx-auto d-block zoomable-image"
                src={LayoutImage}
                alt="Layout"
              />
            </div>
          </div>
        </div>
      </div>

      <Modal data-aos="flip-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        show={showModal}
        onHide={handleClose}
        dialogClassName="modal-md"
        aria-labelledby="enquiryModalLabel"
        centered
      >
        <Modal.Body className={modalBodyClassName} data-aos="flip-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <EligantMainForm  onSubmitSuccess={handleFormSubmitSuccess}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EligantForm;
