import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waters: [],
      total: 0,
      goal: null
    };
  }
  async componentDidMount() {
    const id = await AsyncStorage.getItem("user_id");
    const from = new Date().setHours(0, 0, 0, 0) / 1000;
    fetch(`http://localhost:5000/api/v1/drinks?id=${id}&from=${from}`).then(
      res =>
        res.json().then(waters => {
          let total = waters.reduce((acc, cur) => acc.amount + cur.amount);
          this.setState({ total, waters });
        })
    );
    fetch(`http://localhost:5000/api/v1/users/${id}`).then(res =>
      res.json().then(user => {
        this.setState({ goal: user[0].goal });
      })
    );
  }
  render() {
    const percentage = Math.floor((this.state.total / this.state.goal) * 100);
    return (
      <View style={{ marginTop: 30 }}>
        <Button
          title="설정"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <View>
          <Text>알림설정도</Text>
          <Text>있포!!</Text>
        </View>
        <Text>{percentage}%</Text>
        <Button
          title="마셔"
          onPress={() => this.props.navigation.navigate("AddWater")}
        />
        <Button
          title="차트"
          onPress={() => this.props.navigation.navigate("History")}
        />
      </View>
    );
  }
}

export default Main;
