import React from "react";
import spaceshipImage from "../images/spaceship.png";
import { Link } from "react-router-dom";

const SpaceShipItem = props => {
  const { spaceShip, getShipDetail } = props;
  return (
    <div className=" ui divided item" key={spaceShip.name}>
      <img className="ui mini image" src={spaceshipImage} alt="" />
      <div className="middle aligned content">
        <div className="header centered">
          <Link
            to={{
              pathname: `/Detail/${spaceShip.id}`
            }}
            onClick={() => getShipDetail(spaceShip.id)}
          >
            {spaceShip.name}
          </Link>
        </div>
        <br />
        <div className="description">{spaceShip.model}</div>
        <div className="description">{spaceShip.manufacturer}</div>
      </div>
    </div>
  );
};

export default SpaceShipItem;
