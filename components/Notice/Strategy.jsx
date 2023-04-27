import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { defaultStyle } from "../../styles/styles";

const Strategy = () => {
  return (
    <Image
      source={{
        uri: "https://res.cloudinary.com/moses23/image/upload/v1682599464/c6uuxskrff0o9e7xip9r.png",
      }}
      style={{
        backgroundColor: "gray",
        resizeMode: "contain",
        width: "100%",
        height: 500,
        // position: "absolute",
        // left: 50,
        top: 5,
        bottom: 300,
      }}
    />
  );
};

export default Strategy;
