import React from "react";
function Charges() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-5">
        <h1 className="fs-3 mb-3">Charges</h1>
        <h2 className="fs-5">List of all charges and taxes</h2>
      </div>
      <div className="row m-5 p-5 text-center">
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" />
          <h1 className="fs-3 mb-4">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/other-trades.svg" />
          <h1 className="fs-3 mb-4">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" />
          <h1 className="fs-3 mb-4">Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Charges;
