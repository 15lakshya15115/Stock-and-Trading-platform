import React from "react";

function People() {
  return (
    <div className="container my-5 py-5">
      <div className="row text-center mb-5">
        <h1 className="fs-3 fw-normal">People</h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 text-center">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="Founder"
            className="rounded-circle mb-4"
            style={{ width: "55%" }}
          />

          <h2 className="fs-5 fw-normal mb-1">Nithin Kamath</h2>
          <p className="fs-6 text-muted">Founder, CEO</p>
        </div>

        <div className="col-md-5 mt-4 mt-md-0">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="mb-4">Playing basketball is his zen.</p>

          <p>
            Connect on
            <a href="#" className="text-primary text-decoration-none">
              Homepage
            </a>
            /
            <a href="#" className="text-primary text-decoration-none">
              TradingQnA
            </a>
            /
            <a href="#" className="text-primary text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
