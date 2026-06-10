import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/",
          {},
          { withCredentials: true }
        );
        if (data.status) {
          setUsername(data.user);
        } else {
          setUsername("User");
        }
      } catch (err) {
        console.error(err);
        setUsername("User");
      }
    };
    fetchUser();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("username");
    window.location.href = "http://localhost:3000/login";
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar">{username ? username.substring(0, 2).toUpperCase() : "ZU"}</div>
          <p className="username">{username || "USERID"}</p>
          {isProfileDropdownOpen && (
            <div 
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "10px",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                zIndex: 1000
              }}
            >
              <button 
                onClick={handleLogout} 
                style={{ 
                  background: "none", 
                  border: "none", 
                  color: "#d32f2f", 
                  cursor: "pointer",
                  padding: "5px 10px",
                  width: "100%",
                  textAlign: "left"
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
