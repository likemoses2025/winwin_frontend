import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, IconButton, MD3Colors } from "react-native-paper";
import { colors } from "../styles/styles";

const nf = new Intl.NumberFormat();

const RefundItem = ({}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderRadius: 7,
      }}
    >
      <Text
        style={{
          backgroundColor: colors.color1,
          width: 40,
          height: 40,
          borderRadius: 7,
          textAlign: "center",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        1
      </Text>

      <Text>22년 7월</Text>
      <Text>176박스</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon="update"
          iconColor={MD3Colors.primary0}
          size={30}
          onPress={() => console.log("Pressed")}
        />
        <IconButton
          icon="update"
          iconColor={MD3Colors.primary0}
          size={30}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {},
});

export default RefundItem;
