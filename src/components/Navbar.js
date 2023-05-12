import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="component1">
        <div className="title swirl-in-fwd">Max Auto</div>
      </div>

      <div className="component2">
        <div className="nav_item" onClick={() => navigate("/")}>
          Home
        </div>

        <div className="nav_item" onClick={() => navigate("/ourcars")}>
          Our Cars
        </div>

        <div className="nav_item" onClick={() => navigate("/contact")}>
          Contact Us
        </div>
      </div>

      <div className="component3">
        <div className="icon">
          <SearchIcon />
        </div>

        <div className="icon">
          <MailOutlineIcon />
        </div>

        <div className="icon">
          <PersonOutlineIcon />
        </div>

        <div className="nav_item icon" onClick={() => navigate("/sign")}>
          Sign In
        </div>
      </div>
    </div>
  );
}

export default Navbar;
