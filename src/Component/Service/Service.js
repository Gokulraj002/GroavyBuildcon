import React from 'react'
import Makeus from './Makeus';
import image from "../../images/services.jpg"
// import image1 from "../../images/service mob.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTree } from "@fortawesome/free-solid-svg-icons";



const Service = () => {
  return (
    <div>
        <div className="position-relative">

 <div>
 {/* <picture className="w-100">
  <source srcSet={image1} media="(max-width: 699px)"/>
  <img src={image} alt="about-banner" className="w-100" />
</picture> */}

  <img src={image} alt="about-banner" className="w-100" />


      {/* <map name="image-map">
        <area
          target="_blank"
          alt="Clickable Area"
          title="Clickable Area"
          href="https://www.groavy.com"
          coords="50,44,220,360" // Adjust these coordinates to your needs
          shape="rect"
        />
      </map> */}
    </div>
  <div className="position-absolute top-50 start-50 translate-middle">
    {/* <div className="text-center"> */}

    {/* <h2 id="head" className="text-white  text-center d-block d-md-none">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />Your Need Is Our Best
              Services
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2> */}

    </div>
    </div>

      <Makeus/>
    </div>
  )
}

export default Service
