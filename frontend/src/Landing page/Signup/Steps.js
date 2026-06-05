import React from "react";

function Steps() {
  return (
    <div className="container">
      <div className="row m-5 p-5 text-center">
        <h1 className="fs-3">Steps to open a demat account with Zerodha</h1>
      </div>
      <div className="row mx-5 px-5">
        <div className="col-6">
          <img src="media/images/steps-acop.svg" />
        </div>
        <div className="col-6 ">
          <div className="d-flex border-bottom m-3">
            <span
              className="border rounded-circle d-inline-flex align-items-center justify-content-center fs-6"
              style={{ width: "40px", height: "40px" }}
            >
              01
            </span>
            <p className="ms-3 mt-1 fs-5">Enter the requested details</p>
          </div>
          <div className="d-flex border-bottom m-3">
            <span
              className="border rounded-circle d-inline-flex align-items-center justify-content-center fs-6"
              style={{ width: "40px", height: "40px" }}
            >
              02
            </span>
            <p className="ms-3 mt-1 fs-5">Complete e-sign & verification</p>
          </div>
          <div className="d-flex border-bottom m-3">
            <span
              className="border rounded-circle d-inline-flex align-items-center justify-content-center fs-6"
              style={{ width: "40px", height: "40px" }}
            >
              03
            </span>
            <p className="ms-3 mt-1 fs-5">Start investing!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
