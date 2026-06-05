import React from "react";
import Nav from "../Nav";
import Hero from "./Hero";
import Trust from "./Trust";
import Pricing from "./Pricing";
import Education from "./Education";
import Openaccount from "../Openaccount";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <Hero />
      <Trust />
      <Pricing />
      <Education />
      <Openaccount />
    </>
  );
}

export default Homepage;
