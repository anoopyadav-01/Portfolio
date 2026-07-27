import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Project from "./Component/Projects/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Skills from "./Component/Skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;
