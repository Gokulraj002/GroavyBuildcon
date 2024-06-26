// import React, { useState } from "react";
// import { Form, Input, Button, Row, Col, message } from "antd";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./form.css"; // Import your CSS file

// const { TextArea } = Input;

// const Forms = () => {
//   const [form] = Form.useForm();
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = (values) => {
//     setSubmitting(true);
//     setTimeout(() => {
//       message.success("Form submitted successfully");
//       form.resetFields();
//       setSubmitting(false);
//       console.log(values)
//     }, 1000);
//   };

//   return (
//     <div className="container-fluid bg-light py-3">
//       <div className="row justify-content-center">
//         <div className="col-12 text-center mb-4">
//           <h3 className="font1" style={{ color: "#3A6958" }}>
//             Let's Contact With Us
//           </h3>
//         </div>
//         <div className="col-12 col-md-6 text-center mb-4">
//           <p>
//             Connect with us today to turn your real estate inquiries into
//             solutions. Our dedicated team is here to assist you with
//             personalized and expert guidance.
//           </p>
//         </div>
//         <div className="col-md-8">
//           <div className="contact-form-container px-4 shadow-sm rounded gradient-border p-4 shadow-lg">
//             <Form
//               form={form}
//               onFinish={handleSubmit}
//               layout="vertical"
//               className="contact-form p-3"
//             >
//               <Row gutter={16}>
//                 <Col xs={24} md={12}>
//                   <Form.Item
//                     name="name"
//                     rules={[
//                       { required: true, message: "Please enter your name" },
//                       { max: 50, message: "Name should be within 50 words" },
//                     ]}
//                   >
//                     <div className="form-floating">
//                       <Input
//                         placeholder="Your name"
//                         className="form-control"
//                       />
//                       <label htmlFor="name">Your Name*</label>
//                     </div>
//                   </Form.Item>
//                 </Col>
//                 <Col xs={24} md={12}>
//                   <Form.Item
//                     name="email_address"
//                     rules={[
//                       { required: true, message: "Please enter your email" },
//                       { type: "email", message: "Please enter a valid email" },
//                     ]}
//                   >
//                     <div className="form-floating">
//                       <Input
//                         placeholder="Email address"
//                         className="form-control"
//                       />
//                       <label htmlFor="email_address">Email Address*</label>
//                     </div>
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Row gutter={16}>
//                 <Col xs={24} md={12}>
//                   <Form.Item
//                     name="subject"
//                     rules={[
//                       { message: "Please enter your enquiry" },
//                       { max: 100, message: "Subject should be within 100 words" },
//                     ]}
//                   >
//                     <div className="form-floating">
//                       <Input
//                         placeholder="Subject"
//                         className="form-control"
//                       />
//                       <label htmlFor="subject">Subject</label>
//                     </div>
//                   </Form.Item>
//                 </Col>
//                 <Col xs={24} md={12}>
//                   <Form.Item
//                     name="phone"
//                     rules={[
//                       { required: true, message: "Please enter your phone number" },
//                       { len: 10, message: "Phone number should be 10 digits" },
//                     ]}
//                   >
//                     <div className="form-floating">
//                       <Input
//                         placeholder="Phone number"
//                         maxLength={10}
//                         className="form-control"
//                         pattern="\d*"
//                       />
//                       <label htmlFor="phone">Phone Number</label>
//                     </div>
//                   </Form.Item>
//                 </Col>
//               </Row>
//               <Form.Item
//                 name="message"
//                 rules={[
//                   { required: true, message: "Please enter your message" },
//                   { max: 300, message: "Message should be below 300 words" },
//                 ]}
//               >
//                 <div className="form-floating">
//                   <TextArea
//                     placeholder="Your message..."
//                     className="form-control"
//                     rows={4}
//                   />
//                   <label htmlFor="message">Your Message*</label>
//                 </div>
//               </Form.Item>
//               <Form.Item className="text-center wrap mt-3">
//                 <Button
//                   type="success"
//                   htmlType="submit"
//                   className="btn button mt-4"
//                   loading={submitting}
//                 >
//                   Send Message
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forms;




import React from "react";
import Cfrom from "../Contact/Cfrom";
import "./form.css";
const Form = () => {
  return (
    <div className="">
           <div className="row justify-content-center g-0">
               <div className="col-12 text-center mb-4">
          <h3 className="font1" style={{ color: "#3A6958" }}>
            Let's Contact With Us
           </h3>
        </div>
         <div className="col-12  text-center mb-4 para-color2">
           <p>
             Connect with us today to turn your real estate inquiries into
             solutions. Our dedicated team is here <br></br> to assist you with
            personalized and expert guidance.
          </p>
        </div>
      <div className="col-md-8 col-12  gradient-border aos mb-2">
      <div className=" shadow-lg  py-3 px-5   ">
        {" "}
        <h3 className="font2 text-center pb-5 color ">
          Helping you is our priority.
        </h3>
        <Cfrom />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
