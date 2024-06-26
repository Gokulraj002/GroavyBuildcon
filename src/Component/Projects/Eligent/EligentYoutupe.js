import React from "react";
// import main from "./ElegantImages/Eligentmain.png";
const EligentYoutupe = () => {
  return (
    <>
      <div className="container-fluid ">
        {/* <img src={main} className="w-100" alt="yoga"/> */}

        <div className=" container">
          <iframe
            className="w-100"
            height="500"
            src="https://www.youtube.com/embed/H1Luz-FWa24?si=4EhsiJPH3NxZhztd&amp;controls=0&autoplay=0&loop=1&mute=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default EligentYoutupe;
