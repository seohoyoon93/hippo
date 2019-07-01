import React, { Component } from "react";
import { View, Text, Button, Picker, TextInput } from "react-native";
import { connect } from "react-redux";

class Goal extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 120 }}>
        <View style={{ flexDirection: "row" }}>
          <Button
            title="뒤로"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
          <Text>내 정보</Text>
        </View>
        <View>
          <Text>목표</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>일일목표량</Text>
            <TextInput
              value={this.props.goal.toString()}
              onChangeText={goal => this.props.setGoal(goal)}
            />
          </View>
          <Text>
            키와 몸무게를 입력하면 일일기준량이 자동으로 계산되며, 직접 입력도
            가능합니다 :)
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>성별</Text>
            <Picker
              selectedValue={this.props.gender}
              onValueChange={gender => {
                this.props.setGender(gender);
              }}
            >
              <Picker.Item label="남자" value="male" />
              <Picker.Item label="여자" value="female" />
            </Picker>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>키</Text>
            <TextInput
              value={this.props.height.toString()}
              onChangeText={height => {
                this.props.setHeight(height);
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>몸무게</Text>
            <TextInput
              value={this.props.weight.toString()}
              onChangeText={weight => {
                this.props.setWeight(weight);
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>운동량</Text>
            <Picker
              selectedValue={this.props.training}
              onValueChange={training => {
                this.props.setTraining(training);
              }}
            >
              <Picker.Item label="숨쉬기" value="breath" />
              <Picker.Item label="보통" value="normal" />
              <Picker.Item label="활동적" value="intense" />
            </Picker>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>측정단위</Text>
            <Picker
              selectedValue={this.props.unit}
              onValueChange={unit => {
                this.props.setUnit(unit);
              }}
            >
              <Picker.Item label="미터법" value="metric" />
              <Picker.Item label="미국 단위계" value="american" />
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    goal: state.settings.goal,
    gender: state.settings.gender,
    height: state.settings.height,
    weight: state.settings.weight,
    training: state.settings.training,
    unit: state.settings.unit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setGoal: goal => dispatch(setGoal(goal)),
    setGender: gender => dispatch(setGender(gender)),
    setHeight: height => dispatch(setHeight(height)),
    setWeight: weight => dispatch(setWeight(weight)),
    setTraining: training => dispatch(setTraining(training)),
    setUnit: unit => dispatch(setUnit(unit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goal);
