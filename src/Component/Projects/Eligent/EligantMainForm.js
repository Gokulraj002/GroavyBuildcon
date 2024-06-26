import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./css/EligantForm.css";

const EligantMainForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    const iframe = document.getElementById('zoho-iframe-unique');
    iframe.onload = () => {
      showSuccessNotification();
      navigate('/elegantorchards');
    };
  }, [navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "whatsapp") {
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
     submitToZohoCRM(formData);
    setFormData({
      name: "",
      whatsapp: "",
      email: "",
    });
    // showSuccessNotification();s

    onSubmitSuccess();
  };

  const submitToZohoCRM = (formData) => {
    const zohoForm = document.createElement("form");
    zohoForm.action = "https://crm.zoho.in/crm/WebToLeadForm";
    zohoForm.method = "POST";
    zohoForm.target = "zoho-iframe-unique";
    zohoForm.style.display = "none";
    
    const fields = {
      xnQsjsdp: "491d01328dd70a22215cbeb85f0311dbca6dba26d8809615e4025f427618b43d",
      xmIwtLD: "24d78cb7f7b1f8878b35e02b69d82431488979152eff5d927704a27765ddfe206427e8a463bba71ebb390a4e381589f3",
      actionType: "TGVhZHM=",
      Company: "Groavy",
      // "First Name": formData.name,
      "Last Name": formData.name,
      Email: formData.email,
      Phone: formData.whatsapp,
      LEADCF1: "ElegantOrchards",
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
  };

  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Thank you for choosing our idea to share with you.",
      placement: "topRight",
    });
  };

  return (
    <div className="form-container position-relative ">
      <form
        id="eligantform"
        className="animated fadeInUp shadow-lg para-color"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center para-color2 mb-4">
          Fill this to Change Future{" "}
        </h3>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <span className="text-danger">*</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp No</label>
          <span className="text-danger">*</span>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="Enter your WhatsApp number"
            value={formData.whatsapp}
            onChange={handleChange}
            maxLength={10}
            pattern="[0-9]*"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <span className="text-danger">*</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="eligentformsubmit mx-auto  d-block rounded-pill"
        >
          Submit
        </button>
        <div className="contact-buttons text-center mt-5">
          <a
            href="tel:6366829999"
            className="btn btn-info btn-sm para-color1 rounded-5 g-0"
          >
            <FaPhoneAlt /> Call
          </a>
          <a
            href="https://wa.me/6366829999"
            className="btn btn-sm mx-1 mx-md-3 btn-success para-color1 rounded-5"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:support@groavy.com"
            className="btn btn-sm btn-danger para-color1 rounded-5"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </form>
      <iframe id="zoho-iframe-unique" name="zoho-iframe-unique" title="zoho-iframe" className="hidden-iframe" style={{ display: 'none' }}></iframe>
    </div>
  );
};

export default EligantMainForm;
