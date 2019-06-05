import { combineReducers } from "redux";
import spaceShipReducer from "./spaceShipReducer";
import shipDetailReducer from "./shipDetailReducer";

export default combineReducers({
  spaceShips: spaceShipReducer,
  shipDetail: shipDetailReducer
});
