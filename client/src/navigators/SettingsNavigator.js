import { createStackNavigator } from "react-navigation";

import Setting from "../scenes/Settings";
import Language from "../scenes/Settings/Language";
import Goal from "../scenes/Settings/Goal";
import Notification from "../scenes/Settings/Notification";

const SettingsNavigator = createStackNavigator({
  Setting,
  Notification,
  Language,
  Goal
});

export default SettingsNavigator;
