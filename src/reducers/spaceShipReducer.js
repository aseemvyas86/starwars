import transform from "../utilities/transform";
const INITIAL_STATE = {
  perPage: 10,
  count: null,
  currentPage: 1,
  ships: [],
  characters: [],
  shipAndCharacters: [],
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_SPACESHIPS":
      if (action.payload.length < 2) {
        return { ...state };
      }
      const updatedState = transform.getShipAndCharacter(state, action.payload);
      return { ...state, ...updatedState };
    default:
      return state;
  }
};
