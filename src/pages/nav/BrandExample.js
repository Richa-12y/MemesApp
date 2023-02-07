import React from "react";
import "./brandExmaple.css";
import Logo from "../../assests/logo.png";

const BrandExample = () => {
  const goToProtfolio = () => {
    window.location.assign(
      "https://aquamarine-unicorn-82161f-my-portfoli.netlify.app/"
    );
  };

  return (
    <>
      <div className="brand-container">
        <nav onClick={goToProtfolio} className="nav-title">
          sheCode
        </nav>
        <img src={Logo} alt="photo" onClick={goToProtfolio} />
      </div>
    </>
  );
};

export default BrandExample;
