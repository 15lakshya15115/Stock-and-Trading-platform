import React from "react";

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Unbeatable pricing</h1>
          <p className="mt-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-6">
          <div className="row p-5">
            <div className="col-4">
              <img src="/media/images/pricing-eq.svg" alt="pricing image" />
            </div>
            <div className="col-4">
              <img src="/media/images/pricing-eq.svg" alt="pricing image" />
            </div>
            <div className="col-4">
              <img src="/media/images/other-trades.svg" alt="pricing image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
