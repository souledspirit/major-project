import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";
// In your component or App.js
import "../styles/app.css"; // Adjust the path according to your file structure

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <FontAwesomeIcon
            icon={faHive}
            style={{ color: "#e50914", fontSize: "25px" }}
          />{" "}
          {/* Larger icon */}
          <span style={{ fontSize: "16px" }}> Bionite</span>{" "}
          {/* Smaller text */}
        </a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn small-btn">Login</button>
        <button className="btn small-btn  btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
