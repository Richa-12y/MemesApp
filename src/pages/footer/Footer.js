import React from "react";
import "./footer.css";
import facbookLogo from "../../assests/icons8-facebook-48 (1).png";
import githubLogo from "../../assests/icons8-github-64.png";
import pinterestLogo from "../../assests/icons8-pinterest-48.png";
import twitterLogo from "../../assests/icons8-twitter-squared-50.png";
import youtubeLogo from "../../assests/icons8-youtube-48.png";

const Footer = () => (
  <div className="footer">
    <div>
      &copy;
      <em id="date">sheCode</em>
    </div>
    <div className="soc-media-conatiner">
      <img src={youtubeLogo} alt="logoforsocielmedia" />
      <img src={githubLogo} alt="logoforsocielmedia" />
      <img src={facbookLogo} alt="logoforsocielmedia" />
      <img src={twitterLogo} alt="logoforsocielmedia" />
      <img src={pinterestLogo} alt="logoforsocielmedia" />
    </div>
  </div>
);

export default Footer;
