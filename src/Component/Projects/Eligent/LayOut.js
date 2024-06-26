import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import LayoutImage from "./ElegantImages/LAYOUT.jpg";

const Layout = () => {
  const openImageInNewTab = () => {
    // window.open(LayoutImage, '_blank');
  };

  return (
    <div className="container-fluid gx-0">
      <h2 className="text-center pt-4 font1" style={{ color: "#255946" }}>
        Layout
      </h2>
      <div className="layout-zoom  p-md-5">
        <Zoom>
          <img
            className="w-100 mx-auto d-block zoomable-image"
            src={LayoutImage}
            alt="Layout"
            onClick={openImageInNewTab}
          />
        </Zoom>
      </div>
    </div>
  );
};

export default Layout;
