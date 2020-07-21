import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Services from "./components/Services";
import About from "./components/About";
import Tech from "./components/Tech";
import ChartBot from "./components/ChatBot";
import Sample from "./components/Sample";
import CaseStudy from "./components/CaseStudy";
import Blog from "./components/Blog";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Services />
      <About />
      <ChartBot />
      <Tech />
      <Sample />
      <CaseStudy />
      <Blog />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
