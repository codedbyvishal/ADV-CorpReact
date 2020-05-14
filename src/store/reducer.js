import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_PRODTUCT_LIST_REQUEST,
  GET_PRODTUCT_LIST_SUCCESS,
  GET_PRODTUCT_LIST_FAILURE,
} from "./actionTypes";

const initialInventoryState = {
  inProgress: false,
  data: [],
  err: null,
};

export function inventory(state = initialInventoryState, action) {
  switch (action.type) {
    case GET_PRODTUCT_LIST_REQUEST:
      return { ...state, inProgress: true };
    case GET_PRODTUCT_LIST_SUCCESS:
      return { ...state, inProgress: false, data: action.payload };
    case GET_PRODTUCT_LIST_FAILURE:
      return { ...state, inProgress: false, err: action.payload };
    default:
      return state;
  }
}

export function spinner(state = false, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
}
