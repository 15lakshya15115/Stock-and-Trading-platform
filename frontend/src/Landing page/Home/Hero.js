import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-center">
      <div className="row ">
        <img
          src="/media/images/Hero.svg"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "60%", margin: "auto" }}
        />
        <h1 className="mt-4 fs-2">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary mt-4"
          style={{ width: "20%", margin: "auto" }}
          onClick={() => window.location.href = "http://localhost:3000/signup"}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
