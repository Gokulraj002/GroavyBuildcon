import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./custom.css";
import WhatsAppButton from "../Home/WhatsAppButton";
const Layout = () => {
  return (
    <div>
      <Header />
      <WhatsAppButton/>

      <Footer />
    </div>
  );
};

export default Layout;
