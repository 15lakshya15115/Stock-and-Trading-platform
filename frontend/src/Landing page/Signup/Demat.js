import React from "react";

function Demat() {
  return (
    <div className="container">
      <div className="row m-5 p-5 text-center">
        <h1 className="fs-3">Investment options with Zerodha demat account</h1>
      </div>

      <div className="row m-5 p-5">
        <div className="col-6 d-flex flex-column gap-4">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/stocks-acop.svg" alt="Stocks" />
            <div>
              <h1 className="fs-4">Stocks</h1>
              <p>Invest in all exchange-listed securities</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/ipo-acop.svg" alt="IPO" />
            <div>
              <h1 className="fs-4">IPO</h1>
              <p>Apply to the latest IPOs instantly via UPI</p>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex flex-column gap-4">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/mf-acop.svg" alt="Stocks" />
            <div>
              <h1 className="fs-4">Mutual funds</h1>
              <p>Invest in commission-free direct mutual funds</p>
            </div>
          </div>
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/fo-acop.svg" alt="IPO" />
            <div>
              <h1 className="fs-4">Future & options</h1>
              <p>
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demat;
