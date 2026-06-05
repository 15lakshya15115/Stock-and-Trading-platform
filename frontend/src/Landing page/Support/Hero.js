import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <div className="col-3">
          <h1 className="fs-2">Support Portal</h1>
        </div>
        <div className="col-6"></div>
        <div className="col-3">
          <button className="btn btn-primary">My tickets</button>
        </div>
      </div>
      <div className="row px-5 mt-3">
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          style={{height:"50px"}}
          className="mb-5"
        />
      </div>
    </div>
  );
}

export default Hero;
