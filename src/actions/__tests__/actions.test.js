import { fetchShipDetails, fetchSpaceShips } from "../index";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("space ships actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("should return FETCH DETAIL action type", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { name: "john" }
      });
    });
    const id = 1;

    const store = mockStore({});

    store.dispatch(fetchShipDetails(id)).then(() => {
      expect(store.getActions()).toEqual("FETCH_DETAIL");
    });
  });

  it("should return FETCH SPACE SHIP action type", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { name: "john" }
      });
    });

    const pagenumber = 1;

    const store = mockStore({});

    store.dispatch(fetchSpaceShips(pagenumber)).then(() => {
      expect(store.getActions()).toEqual("FETCH_SPACESHIPS");
    });
  });
});
