import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Import Link
import "../styles/app.css"; // Adjust the path according to your file structure

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          {" "}
          {/* Use Link for home navigation */}
          <FontAwesomeIcon
            icon={faHive}
            style={{ color: "#e50914", fontSize: "25px" }}
          />{" "}
          <span style={{ fontSize: "16px" }}> Bionite</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* Use Link instead of button for Login */}
        <Link to="/login" className="btn small-btn">
          Login
        </Link>
        {/* If "Get Started" leads to a sign-up page, use Link; otherwise, keep as button if it triggers a modal or another action */}
        <Link to="/get-started" className="btn small-btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
