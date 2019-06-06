import React from "react";
import App from "../App";
import { mount } from "enzyme";
import Header from "../Header";
import SpaceShipList from "../SpaceShipList";
import SpaceShipDetail from "../SpaceShipDetail";
import { BrowserRouter } from "react-router-dom";
import Root from "../../Root";

it("valid path lead to list", () => {
  const wrapper = mount(
    <BrowserRouter initialEntries={["/random"]}>
      <Root>
        <App />
      </Root>
    </BrowserRouter>
  );

  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(SpaceShipList)).toHaveLength(1);
});
