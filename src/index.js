import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import App from './App';

// Function to dynamically add Zoho SalesIQ script to the document
function addZohoSalesIQScript() {
  var $zoho = window.$zoho || {};
  window.$zoho = $zoho; // Attach $zoho to the global window object
  $zoho.salesiq = $zoho.salesiq || {
    widgetcode: "siqae703caca6166e5e690c2152de007bef5af35aca81e17bf66af79330a6b69320",
    values: {},
    ready: function () {},
  };

  var d = document;
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.id = "zsiqscript";
  s.defer = true;
  s.src = "https://salesiq.zohopublic.in/widget";
  var t = d.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(s, t);
}

// Call the function to add the Zoho SalesIQ script
addZohoSalesIQScript();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);