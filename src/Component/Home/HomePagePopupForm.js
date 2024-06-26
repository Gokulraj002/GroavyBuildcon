import React, { useState, useEffect } from 'react';
import './HomePagePopupForm.css'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const HomePagePopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    number: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, [isVisible]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error message when user starts typing again
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form data is valid, handle submission (e.g., send data to server)
      console.log('Form Data:', formData);
      // Submit to Zoho CRM
      submitToZohoCRM(formData);
      // Show success notification
      showSuccessNotification();
      // Close the form
      div_hide();
    } else {
      // Form data is invalid, show validation errors
      console.log('Form validation failed.');
    }
  };

  const submitToZohoCRM = (formData) => {
    const zohoForm = document.createElement("form");
    zohoForm.action = "https://crm.zoho.in/crm/WebToLeadForm";
    zohoForm.method = "POST";
    zohoForm.style.display = "none";

    const fields = {
      // Replace with your actual Zoho CRM field names
      xnQsjsdp: "c327c8c67a0cf05f8737eaddbefe453435ab3d7da3daa20d710d2b225c730e3f",
      xmIwtLD: "1975de15b2e85b1db40e856c479580258c3efc6c854dcf0b78bc9e1235f1c45ea5e145dac6d77caebe4253c1330db73a",
      actionType: "TGVhZHM=",
      Company: "Groavy",
      "Last Name": formData.name,
      Email: formData.email,
      Mobile: formData.number, 
      LEADCF1: "Groavy", 
    };

    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = fields[key];
        zohoForm.appendChild(hiddenField);
      }
    }

    document.body.appendChild(zohoForm);
    zohoForm.submit();
    document.body.removeChild(zohoForm);

    // Redirect to home page after form submission
    navigate('/');
  };

  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for contacting us!",
      placement: "top",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      number: ''
    };

    // Basic validation rules (you can expand this)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = 'Number is required';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const div_hide = () => {
    setIsVisible(false);
    // Trigger zoom-out animation
    AOS.refresh();
  };

  return (
    <div id="bodysoda" style={{ overflow: isVisible ? 'hidden' : 'auto' }}>
      {isVisible && (
        <div id="abc" className='p-3 p-md-0' style={{ display: 'flex' }}>
          <div id="popupContact" data-aos={isMounted ? 'zoom-in' : ''} data-aos-once="true">
            <form id="popupform" onSubmit={handleSubmit} name="form">
              <FontAwesomeIcon icon={faTimes} id="close" className='text-black' data-aos="zoom-out" onClick={div_hide} />
              <h2 className='text-center'>Reach out to us</h2>
              <hr />
              <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  id="popupname"
                  name="name"
                  placeholder="Name*"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && <span className="error">{formErrors.name}</span>}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  id="popupemail"
                  name="email"
                  placeholder="Email*"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && <span className="error">{formErrors.email}</span>}
              </div>
              <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                <input
                  id="popupnumber"
                  name="number"
                  placeholder="Whatsapp Number*"
                  type="tel"
                  value={formData.number}
                  onChange={handleChange}
                />
                {formErrors.number && <span className="error">{formErrors.number}</span>}
              </div>
              <button className='popupsubmit' type="submit" id="submitpopup">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePagePopupForm;
