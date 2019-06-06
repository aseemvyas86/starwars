import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default props => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      {props.children}
    </Provider>
  );
};
