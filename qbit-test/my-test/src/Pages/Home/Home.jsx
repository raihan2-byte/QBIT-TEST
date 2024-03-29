import React from "react";
import Achievements from "../../Component/Home/Achievements";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Component/Home/Header";
import Service from "../../Component/Home/Service";
import Solution from "../../Component/Home/Solution";
import ContactUs from "../../Component/ContactUs";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Service />
        <Solution />
        <Achievements />
        <ContactUs />
        <Footer/>
    </>
  );
};

export default Home;
