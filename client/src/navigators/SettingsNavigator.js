import { createSwitchNavigator } from "react-navigation";

import Settings from "../scenes/Settings";
import Language from "../scenes/Settings/Language";
import Goal from "../scenes/Settings/Goal";
import Notification from "../scenes/Settings/Notification";

const SettingsNavigator = createSwitchNavigator({
  Settings,
  Notification,
  Language,
  Goal
});

export default SettingsNavigator;
