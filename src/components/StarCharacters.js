import React from "react";

const StarCharacters = props => {
  const { name } = props;
  return (
    <div className="ui ">
      <i className="large  circular user secret icon" />
      {name}
    </div>
  );
};

export default StarCharacters;
