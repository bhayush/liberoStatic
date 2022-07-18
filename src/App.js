import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import About from 'pages/AboutUs'
import Contact from 'pages/ContactUs'
import Business from "pages/BusinessPartners";
import Provider from "pages/HealthcareProviders"
import ScrollToTop from "components/ScrollToTop";

export default function App() {

  return (
    // <Routes>
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/">
    //       <LandingPage />
    //     </Route>
    // </Routes>
<ScrollToTop>
      <Routes>
     <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/business-partner"  element={<Business/>}/>
        <Route path="/healthcare-provider" element={<Provider/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/contact" element={<ContactUs/>} /> */}
    </Routes>
    </ScrollToTop>
  );
}