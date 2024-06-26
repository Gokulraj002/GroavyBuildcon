import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Component/Header/Layout";
import Homes from "./Component/Home/Homes";
import NoPage from "./Component/NoPage/NoPage";
import About from "./Component/About/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./Component/Service/Service";
import Contact from "./Component/Contact/Contact";
import Comming from "./Component/Projects/Project2/Comming";
import Eligentpage from "./Component/Projects/Eligent/Eligentpage";
import { useEffect } from "react";
import PrivacyPolicy from "./Component/Policies/PrivacyPolicy";
import TermsAndConditions from "./Component/Policies/TermsConditions";
// import FbPixel from './FbPixel'; 
import { sendPageview } from "./ga";  // Import the GA tracking function

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
    });
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
      {/* <FbPixel /> */}
        <TrackPageView />  {/* Add the tracking component */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Homes/>} />
            <Route path="about" element={<About />} />
            <Route path="elegantorchards" element={<Eligentpage/>} />
            <Route path="Upcomming" element={<Comming/>} />
            <Route path="service" element={<Service/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="privacypolicies" element={<PrivacyPolicy/>} />
            <Route path="terms&condition" element={<TermsAndConditions/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    sendPageview(location.pathname);  // Send pageview on route change
  }, [location]);

  return null;
}

export default App;
