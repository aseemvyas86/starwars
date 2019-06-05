import React from "react";
import SpaceShipList from "./SpaceShipList";
import SpaceShipDetail from "./SpaceShipDetail";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className=" ui text container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={SpaceShipList} />
            <Route path="/Detail/:id" component={SpaceShipDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
