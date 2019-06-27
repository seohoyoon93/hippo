import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import RegisterNavigator from "./src/navigators/RegisterNavigator";
import MainNavigator from "./src/navigators/MainNavigator";
import rootReducer from "./src/store/reducers/rootReducer";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Register: RegisterNavigator,
    Main: MainNavigator
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);
