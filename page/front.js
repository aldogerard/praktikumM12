import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import logo from "../assets/code.png";

export default class front extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("App");
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
        <Image source={logo} style={{ width: 350, height: 350 }} />
      </View>
    );
  }
}
