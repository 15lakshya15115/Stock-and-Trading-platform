import React from "react";

function Signup() {
  return (
    <div className="container">
      <div className="row text-center m-5 p-5">
        <h1 className="fs-3 mb-3">
          Open a free demat and trading account online
        </h1>
        <h2 className="fs-4 fw-normal">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h2>
      </div>
      <div className="row m-5 p-5">
        <div className="col-6">
          <img src="media/images/account_open.svg" />
        </div>
        <div className="col-6">
          <h1 className="fs-3 mb-3">Signup now</h1>
          <p className="mb-4">Or track your existing application</p>
          <input
            type="number"
            placeholder="Enter your mobile number"
            style={{ height: "50px", width: "250px", fontSize: "18px" }}
          ></input>
          <br />
          <button className="btn btn-primary my-4 w-50">Get OTP</button>
          <p>By proceeding, you agree to the Zerodha terms & privacy policy</p>
          <p>Looking to open NRI account? Click here</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
