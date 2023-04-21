import { View, Text } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";

const ProductDetails = ({ route: { params } }) => {
  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color_s1 }}
    >
      <Header back={true} />

      {/* Carousel */}
    </View>
  );
};

export default ProductDetails;
