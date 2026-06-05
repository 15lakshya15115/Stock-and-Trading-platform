import React from "react";
function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="fs-5 mb-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h1>
      </div>
      <div className="row text-center">
        <h1 className="fs-3 m-4">The Zerodha Universe</h1>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-4 text-center mt-5">
          <img src="media/images/zerodhafundhouse.png" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/sensibull-logo.svg" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/tijori.svg" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center mt-5">
          <img src="media/images/streak-logo.png" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/smallcase-logo.png" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 text-center mt-5">
          <img src="media/images/ditto-logo.png" className="w-50 " />
          <p style={{ fontSize: "12px" }} className="px-5 mx-4 mt-3 fw-medium">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary w-25">Sign up to login</button>
      </div>
    </div>
  );
}

export default Universe;
