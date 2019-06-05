import React from "react";
import loading from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="ui">
      <img className="ui centered image" src={loading} />
    </div>
  );
};

export default Loading;
