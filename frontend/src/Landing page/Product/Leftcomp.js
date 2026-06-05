import React from "react";
function Leftcomponent({
  productimage,
  productname,
  productdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-8">
          <img src={productimage} alt="products kite image" className="m-5" />
        </div>
        <div className="col-4 pe-5 pt-5 mt-5">
          <h1 className="fs-3 mb-3">{productname}</h1>
          <p style={{ fontSize: "19px" }}>{productdescription}</p>
          <a
            href=""
            className="me-5"
            style={{ fontSize: "17px", textDecoration: "none" }}
          >
            {trydemo}
          </a>
          <a
            href=""
            className="ms-5"
            style={{ fontSize: "17px", textDecoration: "none" }}
          >
            {learnmore}
          </a>
          <div className="row mt-4">
            <div className="col-6">
              {" "}
              <img src={googleplay} alt="products kite image" />
            </div>
            <div className="col-6">
              <img src={appstore} alt="products kite image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftcomponent;
