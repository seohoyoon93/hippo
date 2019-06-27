import { createBottomTabNavigator } from "react-navigation";

import ModalNavigator from "./ModalNavigator";
import History from "../scenes/Main/History";
import SettingsNavigator from "./SettingsNavigator";

const MainNavigator = createBottomTabNavigator({
  Main: ModalNavigator,
  History: History,
  Settings: SettingsNavigator
});

export default MainNavigator;
