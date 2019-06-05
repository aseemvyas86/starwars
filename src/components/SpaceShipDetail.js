import React, { Component } from "react";
import { connect } from "react-redux";

class SpaceShipDetail extends Component {
  renderDetail() {
    const { shipDetail } = this.props;
    if (Object.keys(shipDetail).length) {
      const detail = shipDetail.data;
      return Object.keys(detail).map((key, index) => {
        return (
          <div className="ui grid">
            <div className="ui piled raised segment row">
              <div className="six wide column">
                <b>{key}</b>
              </div>
              <div className=" six wide column">
                {this.getList(detail[key])}
              </div>
            </div>
          </div>
        );
      });
    } else {
      return;
    }
  }

  getList(value) {
    if (typeof value === "object") {
      if (value.length === 0) {
        return <div>n/a</div>;
      }
      return value.map((item, index) => {
        return (
          <div className="ui list" key={index}>
            <div className="item">{item}</div>
          </div>
        );
      });
    } else {
      return <div>{value}</div>;
    }
  }

  render() {
    return <div>{this.renderDetail()}</div>;
  }
}

const mapStateToProps = ({ shipDetail }) => {
  return { shipDetail };
};

export default connect(mapStateToProps)(SpaceShipDetail);
