import React from "react";
import { Link } from "react-router-dom";
// import image from "../../images/nopage.png";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./nopage.css";

const NoPage = () => {
  return (
    <>
      {/* <img src={image} alt="about-banner" className="w-100" height={"300px"} /> */}

      <Container className="d-flex align-items-center justify-content-center my-5">
        <Row>
          <Col className="text-center">
            <div className="error-page">
              <h1 className="display-1">404</h1>
              <p className="lead">
                Oops! The page you're looking for doesn't exist.
              </p>
              <Link to="/">
                <Button variant="primary" size="lg">
                  Go Back Home
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NoPage;
