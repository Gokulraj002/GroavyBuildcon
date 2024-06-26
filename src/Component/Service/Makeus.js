import React from "react";
import { Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./service.css";
const Makeus = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <div>
      <div className="container-fluid py-5 bg-light">
        <div className="container text-center para-color1">
          <div className="">
            <h2 className="text-center mb-4 font1 color">Offering Services</h2>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4 aos" >
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-home fa-2x mb-3 color1" ></i>
                    <h5 className="card-title ">Residential Development</h5>
                    <p className="card-text">
                      We specialize in developing high-quality residential
                      properties, providing comfortable and modern living spaces
                      for families.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-building fa-2x mb-3 ic-clr color1" ></i>
                    <h5 className="card-title">Commercial Development</h5>
                    <p className="card-text">
                      Our expertise extends to commercial real estate, offering
                      well-designed office spaces and retail properties.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-6 col-lg-3 mb-4" >
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-handshake fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Property Management</h5>
                    <p className="card-text">
                      We provide comprehensive property management services to
                      ensure your investments are well-maintained and
                      profitable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 aos" >
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-project-diagram fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Project Planning</h5>
                    <p className="card-text">
                      Our project planning services include site analysis,
                      feasibility studies, and strategic planning to ensure
                      successful project execution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-drafting-compass fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Architectural Design</h5>
                    <p className="card-text">
                      Our architectural design services focus on creating
                      aesthetically pleasing and functional spaces that meet our
                      clients' needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-cogs fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Construction Management</h5>
                    <p className="card-text">
                      We offer end-to-end construction management services to
                      ensure that projects are completed on time, within budget,
                      and to the highest standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-chart-line fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Market Analysis</h5>
                    <p className="card-text">
                      Our market analysis services provide valuable insights
                      into real estate trends, helping clients make informed
                      investment decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <i className="fas fa-user-shield fa-2x mb-3 color1"></i>
                    <h5 className="card-title">Legal Compliance</h5>
                    <p className="card-text">
                      We ensure all projects comply with legal and regulatory
                      requirements, providing peace of mind for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </div>

      <section className="">
        <div className="container-fluid buggy pt-5 pb-3">
          <div className="container para-color1">
            <div className="aos">
              <h3 className="text-center text-white mb-4 font2 color">
              OUR UNIQUE ASPECTS
              </h3>
              <Row className="justify-content-center ">
                <Col md={4} className="mb-3 aos" data-aos="fade-down-right">
                  <div className="text-center">
                    <i
                      className="fas fa-headset bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3  color1  ">24/7 SUPPORT</h3>
                    <p className="p-md-3 text-white justify">
                      When you need help, our company's round-the-clock support
                      team is dedicated to helping you. Because our committed
                      support team understands that problems can arise without
                      warning, we are open 24/7/365. Whenever you require
                      assistance, day or night, we are here to make sure you get
                      it.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3 aos" data-aos="fade-down">
                  <div className="text-center">
                    <i
                      className="fas fa-smile bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3  color1">100% SATISFACTION</h3>
                    <p className="p-md-3 text-white justify">
                      Your total happiness is our top focus at Formland Invest.
                      Our commitment is to deliver superior products and
                      services that surpass your expectations. Our dedication to
                      quality guarantees that you will always be completely
                      happy with your interactions with us.
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-3 aos" data-aos="fade-down-left">
                  <div className="text-center">
                    <i
                      className="fas fa-users bg-light p-3 color"
                      style={{ fontSize: "2rem", borderRadius: " 50%" }}
                    ></i>
                    <h3 className="pt-3 color1 ">TEAM OF EXPERTS</h3>
                    <p className="p-md-3 text-white justify">
                      At Formland, we have a dedicated team of experts ready to
                      assist you with all your real estate needs. With years of
                      experience and a passion for what we do, we're here to
                      make your real estate journey smooth and successful.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
      <div
        className="container-fluid p-2 mt-2"
        style={{ backgroundColor: "#f59b25" }}
      >
        <div className="container para-color2">
          <div className="row g-0 " ref={ref}>
            <div className="col-6 col-md-3 p-md-5 py-3  text-center">
              <h1 className="mb-3 text-white">
                {inView ? <CountUp end={50} duration={4} /> : "0"}+
              </h1>
              <p >Projects Completed</p>
            </div>
            <div className="col-6 col-md-3 p-md-5 py-3 text-center">
              <h1 className="mb-3 text-white">
                {inView ? <CountUp end={100} duration={4} /> : "0"}+
              </h1>
              <p>Clients</p>
            </div>
            <div className=" col-6 col-md-3 p-md-5 py-3 text-center">
              <h1 className="mb-3 text-white">
                {inView ? <CountUp end={60} duration={4} /> : "0"}+
              </h1>
              <p>Employees</p>
            </div>
            <div className="col-6 col-md-3 p-md-5 py-3 text-center">
              <h1 className="mb-3 text-white">
                {inView ? <CountUp end={5} duration={4} /> : "0"}+
              </h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Makeus;
