import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import counter from "../pages/Counter/reducer";
import spinner from "../components/Spinner/reducer";

export default (history) =>
  combineReducers({
    counter,
    spinner,
    router: connectRouter(history),
  });
