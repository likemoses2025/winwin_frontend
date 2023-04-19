import { View, Text } from "react-native";
import React from "react";
import { defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.js";

const Home = () => {
  return (
    <View style={defaultStyle}>
      {/* Header */}
      <Header />
      <View>
        <Text style={{ fontSize: 25 }}>Our</Text>
        <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
      </View>
      <Text>Home2</Text>
    </View>
  );
};

export default Home;
