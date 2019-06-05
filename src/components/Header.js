import React from "react";
import banner from "../images/kisspng.png";

const Header = () => {
  return (
    <h2 className="ui center aligned icon header">
      <div className="ui ">
        <img className="ui centered tiny avatar image" src={banner} />
      </div>
      <br />
      <hr />
    </h2>
  );
};

export default Header;
