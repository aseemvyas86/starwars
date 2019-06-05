import axios from "axios";

export const fetchSpaceShips = () => {
  return async function(dispatch) {
    const response = await axios.all([
      axios.get(
        "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people"
      ),
      axios.get(
        "https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships"
      )
    ]);
    dispatch({ type: "FETCH_SPACESHIPS", payload: response });
  };
};

export const fetchShipDetails = id => {
  return async function(dispatch) {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://swapi.co/api/starships/${id}/`
    );
    dispatch({ type: "FETCH_DETAIL", payload: response });
  };
};
