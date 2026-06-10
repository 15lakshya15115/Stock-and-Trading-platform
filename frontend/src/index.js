import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Landing page/Home/Homepage";
import Signuppage from "./Landing page/Signup/Signuppage";
import Aboutpage from "./Landing page/About/Aboutpage";
import ProductPage from "./Landing page/Product/Productpage";
import Pricingpage from "./Landing page/Pricing/Pricingpage";
import Supportpage from "./Landing page/Support/Supportpage";
import Nav from "./Landing page/Nav";
import Footer from "./Landing page/Footer";
import Loginpage from "./Landing page/Login/Loginpage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signup" element={<Signuppage />}></Route>
      <Route path="/login" element={<Loginpage />}></Route>
      <Route path="/about" element={<Aboutpage />}></Route>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/pricing" element={<Pricingpage />}></Route>
      <Route path="/support" element={<Supportpage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
