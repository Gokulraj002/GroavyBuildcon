import ContactForm from "./ContactForm";
// import image from "../../images/contact.png";
// import image1 from "../../images/mob-contact.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTree } from "@fortawesome/free-solid-svg-icons";
import './contactform.css';

const Contact = () => {
    return (
      <>     

<div className="position-relative">
{/* <picture className="w-100">
  <source srcSet={image1} media="(max-width: 699px)"/>
  <img src={image} alt="about-banner" className="w-100 "/>
</picture>
       */}
  <div className="position-absolute top-50 start-50 translate-middle">
    {/* <div className="text-center"> */}

    {/* <h2 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon "
              />
              Let's 
              Contact <br></br> with Us
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2> */}

    </div>
    </div>
      
      
       <ContactForm/>
      <div className="google-map ">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.078060519842!2d77.59859307405264!3d13.094239212179694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ed4cea7ea1%3A0xf3db5c87752d87e!2sGroavy%20Buildcon!5e0!3m2!1sen!2sin!4v1718025891024!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </div>
</>


    );
  };
  
  export default Contact;