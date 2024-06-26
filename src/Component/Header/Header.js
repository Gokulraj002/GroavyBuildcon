import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../../images/logo size.png";
import ReactGA from "react-ga4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [navClass, setNavClass] = useState(
    isHomePage
      ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 header-nav scrolled blur"
      : "navbar navbar-expand-lg ooo navbar-dark w-100 bg p-3 scrolled "
  );
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setNavClass(
          "navbar navbar-expand-lg clr navbar-dark w-100 header-nav p-3 scrolled "
        );
      } else {
        setNavClass(
          isHomePage
            ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 header-nav scrolled blur"
            : "navbar navbar-expand-lg ooo bg navbar-dark w-100 p-3 scrolled"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    setNavClass(
      isHomePage
        ? "navbar navbar-expand-lg ooo navbar-dark w-100 p-3 header-nav blur"
        : "navbar navbar-expand-lg ooo bg navbar-dark w-100 p-3"
    );

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, location.pathname]);

  const handleNavClick = (label) => {
    ReactGA.event({
      category: "Navigation",
      action: `Clicked ${label} Link`,
      label: `${label} Page`,
    });

    if (window.innerWidth < 768) {
      // Close offcanvas menu if open
      setIsOffCanvasOpen(false);
    }
  };

  const handleToggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:6366829999";
  };

  return (
    <>
      <header className="position-relative">
        <nav className={navClass} id="nav">
          <div className="container mx-auto">
            <Link
              className="navbar-brand"
              to="/"
              onClick={() => handleNavClick("Home")}
            >
              <img src={logo} alt="logo" width="120px" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggleOffCanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`offcanvas offcanvas-start text-center w-75 ${
                isOffCanvasOpen ? "show" : ""
              }`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  className="navbar-brand"
                  to="/"
                  onClick={() => {
                    handleNavClick("Home");
                    handleToggleOffCanvas();
                  }}
                >
                  <img src={logo} alt="logo" width="130px" />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleToggleOffCanvas}
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body">
                <ul className="navbar-nav mx-auto" id="navbar">
                  <li className="nav-item">
                    <Link
                      className={`nav-link pe-3 ${
                        isHomePage ? "fw-bold " : ""
                      } ${location.pathname === "/" ? "active" : ""}`}
                      to="/"
                      onClick={() => {
                        handleNavClick("Home");
                        handleToggleOffCanvas();
                      }}
                    >
                      home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link pe-3 ${
                        isHomePage ? "fw-bold" : ""
                      } ${location.pathname === "/about" ? "active" : ""}`}
                      to="/about"
                      onClick={() => {
                        handleNavClick("About Us");
                        handleToggleOffCanvas();
                      }}
                    >
                      about us
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className={`nav-link  pe-2 ${
                        isHomePage ? "fw-bold" : ""
                      }`}
                      to="#"
                      id="layoutPlanDropdown"
                      role="button"
                    
                    >
                      project
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        style={{ fontSize: "0.6em" }}
                        className="ms-1 fs-6"
                      />
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="layoutPlanDropdown"
                    >
                      <li>
                        <Link
                          className={`dropdown-item ${
                            isHomePage ? "fw-bold" : ""
                          } ${
                            location.pathname === "/elegantorchards"
                              ? "active"
                              : ""
                          }`}
                          to="/elegantorchards"
                          onClick={() => {
                            handleNavClick("Elegant");
                            handleToggleOffCanvas();
                          }}
                        >
                          elegant orchards estate
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            isHomePage ? "fw-bold" : ""
                          } ${
                            location.pathname === "/Upcomming" ? "active" : ""
                          }`}
                          to="/Upcomming"
                          onClick={() => {
                            handleNavClick("Upcomming");
                            handleToggleOffCanvas();
                          }}
                        >
                          Upcomming
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link pe-3 ${
                        isHomePage ? "fw-bold" : ""
                      } ${location.pathname === "/service" ? "active" : ""}`}
                      to="/service"
                      onClick={() => {
                        handleNavClick("Services");
                        handleToggleOffCanvas();
                      }}
                    >
                      services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link pe-3 ${
                        isHomePage ? "fw-bold" : ""
                      } ${location.pathname === "/contact" ? "active" : ""}`}
                      to="/contact"
                      onClick={() => {
                        handleNavClick("Contact Us");
                        handleToggleOffCanvas();
                      }}
                    >
                      contact us
                    </Link>
                  </li>
                </ul>
                <button
                  className="btn para-butn btn-sm text-white rounded-pill "
                  style={{ backgroundColor: "#F9AB24" }}
                  onClick={handlePhoneCall}
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  +91 6366829999
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Outlet />
      </header>
    </>
  );
};

export default Header;
