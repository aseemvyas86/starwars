import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSpaceShips, fetchShipDetails } from "../actions";
import Loading from "./Loading";
import SpaceShipItem from "./SpaceShipItem";
import StarCharacters from "./StarCharacters";
import Pagination from "./Pagination";

class SpaceShipList extends Component {
  componentDidMount() {
    const pageNumber = this.props.spaceShips.currentPage;
    this.props.fetchSpaceShips(pageNumber);
  }

  getShipDetail = id => {
    this.props.fetchShipDetails(id);
  };

  handlePageChange = pageNumber => {
    this.props.fetchSpaceShips(pageNumber);
    console.log(this.props);
  };

  renderList() {
    const { spaceShips } = this.props;
    const { shipAndCharacters } = spaceShips;
    if (spaceShips.isLoading === true) {
      return <Loading />;
    } else {
      return shipAndCharacters.map((spaceShip, index) => {
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
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="ui segment relaxed divided list">
          {this.renderList()}
        </div>
        <Pagination
          count={37}
          perPage={10}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProp = state => {
  const { spaceShips } = state;
  return { spaceShips: spaceShips };
};

export default connect(
  mapStateToProp,
  { fetchSpaceShips, fetchShipDetails }
)(SpaceShipList);
