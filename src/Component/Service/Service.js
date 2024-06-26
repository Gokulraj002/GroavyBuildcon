import React from 'react'
import Makeus from './Makeus';
import image from "../../images/serv.jpg"
import image1 from "../../images/mob-serv.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";



const Service = () => {
  return (
    <div>
       <div className="position-relative">
      {/* <div className="img">

      </div> */}
      <picture className="w-100">
  <source srcSet={image1} media="(max-width: 699px)"/>
  <img src={image} alt="about-banner" className="w-100" height={'380px'}/>
</picture>
      
  <div className="position-absolute top-50 start-50 translate-middle">


    <h2 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Find the Perfect Farmland for Your Needs
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2>
            {/* <p className="para-color font text-white text-center">the best way to predict the future is to create it together.</p> */}

    </div>
    </div>

      <Makeus/>
    </div>
  )
}

export default Service
