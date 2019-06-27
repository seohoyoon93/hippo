import React, { Component } from "react";
import { View, Text, Picker, Button } from "react-native";

export default class UnitSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: "metric"
    };
  }
  render() {
    return (
      <View>
        <Text>히포가 도와주기 앞서 기본 설정을</Text>
        <Text>선택해주세요 :D</Text>
        <Picker
          selectedValue={this.state.unit}
          onValueChange={unit => this.setState({ unit })}
        >
          <Picker.Item label="미터법" value="metric" />
          <Picker.Item label="미국 단위계" value="american" />
        </Picker>
        <Button
          title="다음"
          onPress={() => this.props.navigation.navigate("UserInfo")}
        />
      </View>
    );
  }
}
