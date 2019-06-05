import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSpaceShips, fetchShipDetails } from "../actions";
import Loading from "./Loading";
import SpaceShipItem from "./SpaceShipItem";
import StarCharacters from "./StarCharacters";

class SpaceShipList extends Component {
  componentDidMount() {
    this.props.fetchSpaceShips();
  }

  getShipDetail = id => {
    this.props.fetchShipDetails(id);
  };

  renderList() {
    const { spaceShips } = this.props;
    console.log(spaceShips);
    if (spaceShips.length === 0) {
      return <Loading />;
    } else {
      return spaceShips.map((spaceShip, index) => {
        if ((index + 1) % 9 === 0) {
          return (
            <React.Fragment>
              <SpaceShipItem
                spaceShip={spaceShip}
                getShipDetail={this.getShipDetail}
              />
              <StarCharacters name={spaceShip.nameOfCharacter} />
            </React.Fragment>
          );
        } else {
          return (
            <SpaceShipItem
              spaceShip={spaceShip}
              getShipDetail={this.getShipDetail}
            />
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
