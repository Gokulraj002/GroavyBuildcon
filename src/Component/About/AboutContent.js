import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container ">
          <iframe
            className="mx-auto d-block"
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/bAnSLv0pKpw?autoplay=0&loop=1&controls=0&mute=1&playlist=bAnSLv0pKpw&si=aXTpnLWMW6c0ZbXM"
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

export default AboutContent;
