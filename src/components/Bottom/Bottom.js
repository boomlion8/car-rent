import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./bottom.css";

function Bottom() {
  return (
    <div>
      <div className="container">
        <div className="container1">
          <div className="bottombar_title">Car Rental</div>
          <div className="element_container1">
            <div>
              A car rental, hire car or car hire agency is a company that rents
              automobiles for short periods of time to the public
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="bottombar_title"></div>
          <div className="container2_titles">
            <div>Home</div>
            <div>Service</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="container3">
          <div className="store bottombar_title">Support</div>
          <div className="container2_titles">
            <div>Our Team</div>
            <div>Partner With Us</div>
            <div>FAQ</div>
            <div>Privacy Policy</div>
          </div>

          <div></div>
        </div>

        <div className="container4">
          <div className="contact">
            <div>
              <FacebookOutlinedIcon />
            </div>
            <div>Facebook</div>
          </div>

          <div className="contact">
            <div>
              <TwitterIcon />
            </div>
            <div>Twitter</div>
          </div>

          <div className="contact">
            <div>
              <YouTubeIcon />
            </div>
            <div>YouTube</div>
          </div>

          <div className="contact">
            <div>
              <InstagramIcon />
            </div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
