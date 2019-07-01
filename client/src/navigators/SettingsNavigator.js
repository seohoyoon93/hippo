import { createSwitchNavigator } from "react-navigation";

import Setting from "../scenes/Settings";
import Language from "../scenes/Settings/Language";
import Goal from "../scenes/Settings/Goal";
import Notification from "../scenes/Settings/Notification";

const SettingsNavigator = createSwitchNavigator({
  Setting,
  Notification,
  Language,
  Goal
});

export default SettingsNavigator;
