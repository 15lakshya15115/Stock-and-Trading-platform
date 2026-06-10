import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("username", user.username);
        setTimeout(() => {
          window.location.href = "http://localhost:3001"; // Assuming dashboard is on 3001
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ minHeight: "60vh" }}>
      <div className="row justify-content-center m-5 p-5">
        <div className="col-md-6 border p-4 rounded shadow-sm">
          <h2 className="fs-3 mb-4 text-center">Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
            <span className="d-block mt-3 text-center">
              Don't have an account? <Link to={"/signup"}>Signup</Link>
            </span>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
