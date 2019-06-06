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
/*
const getShipAndCharacter = (state, payload) => {
  let characters = payload[0].data.results;
  characters = _.map(characters, "name");
  const count = payload[1].data.count;
  const ships = payload[1].data.results;
  let shipAndCharacterCollection = [];
  for (let i in ships) {
    let subShipsProperties = (({ name, model, manufacturer }) => ({
      name,
      model,
      manufacturer
    }))(ships[i]);
    const id = extractId(ships[i].url);
    const shipAndCharacter = {
      ...subShipsProperties,
      nameOfCharacter: characters[i],
      id: id
    };
    shipAndCharacterCollection.push(shipAndCharacter);
  }
  state.count = count;
  state.shipAndCharacters = shipAndCharacterCollection;
  state.isLoading = false;
  return state;
};

const extractId = url => {
  let urlArray = url.split("/");
  urlArray = urlArray.filter(el => el != "");
  return urlArray[urlArray.length - 1];
};
*/
