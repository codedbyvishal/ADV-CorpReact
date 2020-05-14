import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import counter from "../pages/Counter/reducer";
import { inventory, spinner } from "./reducer";

export default (history) =>
  combineReducers({
    counter,
    spinner,
    inventory,
    router: connectRouter(history),
  });
