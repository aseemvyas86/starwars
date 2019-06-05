import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSpaceShips, fetchShipDetails } from "../actions";
import ship from "../images/spaceship.png";
import loading from "../images/loading.gif";
import { Link } from "react-router-dom";

class SpaceShipList extends Component {
  componentDidMount() {
    this.props.fetchSpaceShips();
  }

  getShipDetail = id => {
    this.props.fetchShipDetails(id);
    console.log(this.props);
  };

  renderList() {
    const { spaceShips } = this.props;
    console.log(spaceShips);
    if (spaceShips.length === 0) {
      return (
        <div className="ui">
          <img className="ui centered image" src={loading} />
        </div>
      );
    } else {
      return spaceShips.map((spaceShip, index) => {
        if ((index + 1) % 9 === 0) {
          return (
            <div className=" ui divided item" key={spaceShip.name}>
              <div className="ui ">
                <i className="large  circular user secret icon" />
                {spaceShip.nameOfCharacter}
              </div>

              <img className="ui mini image " src={ship} alt="" />
              <div className="middle aligned content">
                <div className="header centered">
                  <Link
                    to={{
                      pathname: `/Detail/${spaceShip.id}`,
                      state: { id: spaceShip.id }
                    }}
                    onClick={() => this.getShipDetail(spaceShip.id)}
                  >
                    {spaceShip.name}
                  </Link>
                </div>
                <div className="description">{spaceShip.model}</div>
                <div className="description">{spaceShip.manufacturer}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className=" ui divided item" key={spaceShip.name}>
              <img className="ui mini image" src={ship} alt="" />
              <div className="middle aligned content">
                <div className="header centered">
                  <Link
                    to={{
                      pathname: `/Detail/${spaceShip.id}`,
                      state: { id: spaceShip.id }
                    }}
                    onClick={() => this.getShipDetail(spaceShip.id)}
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
        }
      });
    }
  }

  render() {
    return (
      <div className="ui segment relaxed divided list">{this.renderList()}</div>
    );
  }
}

const extractId = url => {
  let urlArray = url.split("/");
  urlArray = urlArray.filter(el => el != "");
  return urlArray[urlArray.length - 1];
};

const mapStateToProp = state => {
  console.log("original state : ", state);
  const { spaceShips } = state;
  let newArray = [];
  if (spaceShips.length !== 0) {
    const people = spaceShips[0].data.results;
    const ships = spaceShips[1].data.results;
    for (let i = 0; i < 10; i++) {
      const ship = ships[i];
      const id = extractId(ship.url);
      newArray.push({ ...ship, nameOfCharacter: people[i].name, id: id });
    }
  }

  return { spaceShips: newArray, shipDetail: state.shipDetail };
};

export default connect(
  mapStateToProp,
  { fetchSpaceShips, fetchShipDetails }
)(SpaceShipList);
