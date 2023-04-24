import { View, Text } from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const Returns = () => {
  return (
    <View style={{ ...defaultStyle, paddingTop: 70 }}>
      <Header back={true} />
      <Text>Returns</Text>
    </View>
  );
};

export default Returns;
