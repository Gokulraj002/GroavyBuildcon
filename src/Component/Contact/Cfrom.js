import React from 'react';
import { Form, Input, Button, message, notification } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const { TextArea } = Input;

const Cfrom = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate(); // Initialize useNavigate

  const onFinish = (values) => {
    console.log("Form values:", values);
    submitToZohoCRM(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Failed to submit form");
  };

  const submitToZohoCRM = (formData) => {
    const zohoForm = document.createElement("form");
    zohoForm.action = "https://crm.zoho.in/crm/WebToLeadForm";
    zohoForm.method = "POST";
    zohoForm.style.display = "none";

    const fields = {
      xnQsjsdp: "4c2592e970d6535485d1197226d23d33764a78aa6cb88affc745a5cb982a35d7",
      xmIwtLD: "049239acd7223d3630552088db3ad6f3cadf4556f83138c7d625cc5fbbcc16fffc3ba63140da3c3a2ef2da15895b8a77",
      actionType: "TGVhZHM=",
      Company: "Groavy",
      'Last Name': formData.firstName,
      Email: formData.email,
      Mobile: formData.phone,
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
    showSuccessNotification();

    // Redirect to contact page after form submission
    navigate('/contact');
  };

  const showSuccessNotification = () => {
    notification.success({
      message: "Form Submitted",
      description: "Your form has been successfully submitted to Zoho CRM.",
      placement: "topRight",
    });
  };

  return (
    <div>
      <Form
        form={form}
        name="contactForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="row py-5 px-3"
      >
        <div className="col-12 col-lg-6 ">
          <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please enter your  name!" },
              { min: 2, message: "First name must be at least 2 characters long." },
              { max: 30, message: "First name cannot be longer than 30 characters." },
              { pattern: /^[A-Za-z]+$/, message: "First name must contain only letters." }
            ]}
          >
            <div className="user-box">
              <Input id="contact" placeholder="Enter Your Name" />
              <label> Name<span className='text-danger'>*</span></label>
            </div>
          </Form.Item>
        </div>

        <div className="col-12 col-lg-6 ">
          <Form.Item
            name="email"
            rules={[
              { required: true, type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <div className="user-box">
              <Input id="contact" placeholder="Enter Your Email" />
              <label>E-mail<span className='text-danger'>*</span></label>
            </div>
          </Form.Item>
        </div>

        <div className="col-12 col-lg-6 ">
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please enter your number!" },
              { pattern: /^[0-9]{10}$/, message: "Phone number must be 10 digits long." }
            ]}
          >
            <div className="user-box">
              <Input id="contact" placeholder="Whatsapp Number" />
              <label>Phone<span className='text-danger'>*</span></label>
            </div>
          </Form.Item>
        </div>

        <div className="col-12 col-lg-6 ">
          <Form.Item
            name="subject"
            rules={[
              { min: 2, message: "Subject must be at least 2 characters long." },
              { max: 50, message: "Subject cannot be longer than 50 characters." }
            ]}
          >
            <div className="user-box">
              <Input id="contact" placeholder="Enter Your Subject" />
              <label>Subject</label>
            </div>
          </Form.Item>
        </div>

        <div className="col-12 col-lg-12 ">
          <Form.Item
            name="message"
            rules={[
              { min: 10, message: "Message must be at least 10 characters long." },
              { max: 500, message: "Message cannot be longer than 500 characters." }
            ]}
          >
            <div className="user-box">
              <TextArea id="area" placeholder="Type your Message" rows={2} />
              <label>Message</label>
            </div>
          </Form.Item>
        </div>

        <div className="col-lg-12">
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn button mt-0 d-block mx-auto"
            >
              Send Message
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Cfrom;
