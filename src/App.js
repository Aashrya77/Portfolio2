import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import { Contact } from "./Components/Contact/Contact";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </div>
  );
};

export default App;
