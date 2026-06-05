import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 border-bottom">
        <h1 className="fs-4 p-5">
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row p-5 justify-content-center">
        <div className="col-6 p-5" style={{ width: "40%" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India.
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5" style={{ width: "40%" }}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a style={{ color: "#025ad6" }}>Rainmatter</a>, our fintech fund and
            incubator, has invested in several fintech startups with the goal of
            growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a style={{ color: "#025ad6" }}>blog</a>
            &nbsp; or see what the media is &nbsp;
            <a style={{ color: "#025ad6" }}>saying about us</a> or learn more
            about our business and product&nbsp;
            <a style={{ color: "#025ad6" }}>philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
