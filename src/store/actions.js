import { getSlpData, addToCart as _addToCart } from "../server";

import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_PRODTUCT_LIST_REQUEST,
  GET_PRODTUCT_LIST_SUCCESS,
  GET_PRODTUCT_LIST_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
} from "./actionTypes";

export function getProducts(query) {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: GET_PRODTUCT_LIST_REQUEST });

    return getSlpData(query)
      .then((resp) => {
        dispatch({ type: GET_PRODTUCT_LIST_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: GET_PRODTUCT_LIST_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
}

export const showLoader = () => {
  return (dispatch) => dispatch({ type: SHOW_LOADER });
};

export const hideLoader = () => {
  return (dispatch) => dispatch({ type: HIDE_LOADER });
};

export const addToCart = (product) => {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    dispatch({ type: ADD_TO_CART_REQUEST });

    return _addToCart(product)
      .then((resp) => {
        dispatch({ type: ADD_TO_CART_SUCCESS, payload: resp.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: err });
      })
      .then(() => {
        dispatch({ type: HIDE_LOADER });
      });
  };
};
