import { View, Text } from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const UpdateProfile = () => {
  return (
    <View style={{ ...defaultStyle, paddingTop: 70 }}>
      <Header back={true} />
      <Text>UpdateProfile</Text>
    </View>
  );
};

export default UpdateProfile;
