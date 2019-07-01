import { GET_USER_SETTING } from "./actionTypes";

export const getUserSetting = data => {
  return dispatch => {
    dispatch({ type: GET_USER_SETTING, data });
  };
};
