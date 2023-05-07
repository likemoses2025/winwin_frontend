import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputStyling,
} from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { TextInput } from "react-native-paper";

const OrderCreate = () => {
  const [box, setBox] = useState("");

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 15,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />
      <View
        style={{
          marginTop: 60,
          height: 30,
          alignItems: "center",
        }}
      >
        <Heading text1="주문하기" />
      </View>
      <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
        <TextInput
          style={{ fontSize: 12, width: 120 }}
          label="삼양라면(멀티)"
          mode="outlined"
          value={box}
          onChangeText={(box) => setBox(box)}
        />
      </ScrollView>
    </View>
  );
};

export default OrderCreate;
