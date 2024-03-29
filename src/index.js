import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import Root from "../src/Root";
import reducers from "./reducers";
import thunk from "redux-thunk";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
