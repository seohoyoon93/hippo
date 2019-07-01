import { SET_AMOUNT } from "./actionTypes";

const initialState = {
  amount: ""
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };

    default:
      return state;
  }
};

export default mainReducer;
