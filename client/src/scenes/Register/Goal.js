import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  NativeModules
} from "react-native";

import { setGoal, register } from "../../store/actions/registerActions";

class Goal extends Component {
  constructor(props) {
    super(props);

    this.onPressStart = this.onPressStart.bind(this);
  }

  async onPressStart() {
    const deviceLanguage =
      Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;
    this.props.register(deviceLanguage);
    await this.props.navigation.navigate("Main");
  }

  render() {
    return (
      <View>
        <Text>이제 마지막이에요!</Text>
        <Text>일일목표량을 입력해주세요 :)</Text>
        <View>
          <Text>일일목표량</Text>
          <TextInput
            value={this.props.goal}
            onChangeText={goal => {
              this.props.setGoal(goal);
            }}
          />
          <Text>키와 몸무게를 입력하면 일일목표량이 자동</Text>
          <Text>으로 계산돼요!</Text>
          <Text>물론 직접 입력도 가능합니다 :)</Text>
        </View>
        <Button title="시작하기" onPress={this.onPressStart} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    goal: state.register.goal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGoal: goal => dispatch(setGoal(goal)),
    register: lang => dispatch(register(lang))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goal);
