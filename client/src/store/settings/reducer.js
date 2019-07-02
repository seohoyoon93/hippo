import { GET_USER_SETTING, SAVE_GOAL } from "./actionTypes";

const initialState = {
  goal: null,
  height: null,
  weight: null,
  gender: null,
  unit: null,
  training: null,
  notification_start_time: null,
  notification_end_time: null,
  notification_period: null,
  allowed_notification: null,
  lang: null
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SETTING:
      return {
        ...state,
        goal: action.data.goal,
        height: action.data.height,
        weight: action.data.weight,
        gender: action.data.gender,
        unit: action.data.unit,
        training: action.data.training,
        notification_start_time: action.data.notification_start_time,
        notification_end_time: action.data.notification_end_time,
        notification_period: action.data.notification_period,
        allowed_notification: action.data.allowed_notification,
        lang: action.data.lang
      };

    case SAVE_GOAL:
      return {
        ...state,
        goal: parseInt(action.obj.goal),
        gender: action.obj.gender,
        height: parseInt(action.obj.height),
        weight: parseInt(action.obj.weight),
        unit: action.obj.unit
      };

    default:
      return state;
  }
};

export default settingsReducer;
