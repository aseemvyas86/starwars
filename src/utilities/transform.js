import _ from "lodash";

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

const exportFunctions = {
  getShipAndCharacter
};

export default exportFunctions;
