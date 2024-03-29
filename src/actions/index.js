import axios from "axios";

const CHARACTER_API =
  "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people";
const SHIP_API =
  "https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships";

export const fetchSpaceShips = pagenumber => {
  return async function(dispatch, state) {
    let response = [];
    try {
      response = await axios.all([
        axios.get(CHARACTER_API.concat(`?page=${pagenumber}`)),
        axios.get(SHIP_API.concat(`?page=${pagenumber}`))
      ]);
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "FETCH_SPACESHIPS", payload: response });
  };
};

export const fetchShipDetails = id => {
  return async function(dispatch, state) {
    let response = {};
    try {
      response = await axios.get(SHIP_API.concat(`/${id}/`));
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: "FETCH_DETAIL", payload: response });
  };
};
