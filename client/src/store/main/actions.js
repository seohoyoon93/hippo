import { SET_AMOUNT } from "./actionTypes";

export const setAmount = amount => {
  return dispatch => {
    dispatch({ type: SET_AMOUNT, amount });
  };
};
