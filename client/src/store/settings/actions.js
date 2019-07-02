import { GET_USER_SETTING, SAVE_GOAL } from "./actionTypes";

export const getUserSetting = data => {
  return dispatch => {
    dispatch({ type: GET_USER_SETTING, data });
  };
};

export const saveGoal = obj => {
  return dispatch => {
    dispatch({ type: SAVE_GOAL, obj });
    return fetch(`http://localhost:5000/api/v1/users/${obj.userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        unit: obj.unit,
        gender: obj.gender,
        height: parseInt(obj.height),
        weight: parseInt(obj.weight),
        goal: parseInt(obj.goal),
        training: obj.training
      })
    });
  };
};
