import spaceShipReducer from "../spaceShipReducer";
import { FETCH_SPACESHIPS } from "../../actions/types";
import transform from "../../utilities/transform";

it("handles actions of type FETCH SPACESHIPS", () => {
  const action = {
    type: FETCH_SPACESHIPS,
    payload: "list of spaceships"
  };

  const initial_state = {
    perPage: 10,
    count: null,
    currentPage: 1,
    ships: [],
    characters: [],
    shipAndCharacters: [],
    isLoading: true
  };

  const final_state = {
    perPage: 10,
    count: null,
    currentPage: 1,
    ships: [],
    characters: [],
    shipAndCharacters: [{ name: "joe" }],
    isLoading: true
  };

  transform.getShipAndCharacter = jest.fn().mockReturnValue(final_state);

  const newState = spaceShipReducer(initial_state, action);

  expect(newState).toEqual(final_state);
});

it(" should return initial state if payload length is less than 2", () => {
  const action = {
    type: FETCH_SPACESHIPS,
    payload: []
  };

  const initial_state = {
    perPage: 10
  };

  const newState = spaceShipReducer(initial_state, action);

  expect(newState).toEqual(initial_state);
});
