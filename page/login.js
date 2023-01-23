import { Text, View, StatusBar } from "react-native";
import React, { Component } from "react";

export default class login extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="light-content" backgroundColor="#810000" />
        <Text style={{ fontSize: 32, color: "crimson", fontWeight: "800" }}>login Page</Text>
      </View>
    );
  }
}
