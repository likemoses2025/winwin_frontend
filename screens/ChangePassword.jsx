import { View, Text } from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const ChangePassword = () => {
  return (
    <View style={{ ...defaultStyle, paddingTop: 70 }}>
      <Header back={true} />
      <Text>ChangePassword</Text>
    </View>
  );
};

export default ChangePassword;
