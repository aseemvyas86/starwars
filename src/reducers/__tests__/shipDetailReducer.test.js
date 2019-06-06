import shipDetailReducer from "../shipDetailReducer";
import { FETCH_DETAIL } from "../../actions/types";

it("handle action of type FETCH DETAIL", () => {
  const action = { type: FETCH_DETAIL, payload: {} };

  const detail = shipDetailReducer({}, action);

  expect(detail).toEqual(action.payload);
});
