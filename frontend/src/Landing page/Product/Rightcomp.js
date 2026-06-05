import React from "react";
function Rightcomponent({
  productimage,
  productname,
  productdescription,
  learnmore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 p-5 mt-5 ">
          <h1 className="fs-3 mt-5">{productname}</h1>
          <p style={{ fontSize: "19px" }}>{productdescription}</p>
          <a
            href=""
            className="me-5"
            style={{ fontSize: "17px", textDecoration: "none" }}
          >
            {learnmore}
          </a>
        </div>
        <div className="col-6 ms-5 ps-5">
          <img src={productimage} alt="products kite image" />
        </div>
      </div>
    </div>
  );
}

export default Rightcomponent;
