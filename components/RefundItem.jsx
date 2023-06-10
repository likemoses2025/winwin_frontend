import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, IconButton, MD3Colors } from "react-native-paper";
import { colors } from "../styles/styles";

const nf = new Intl.NumberFormat();

const RefundItem = ({}) => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: "white",
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        padding: 5,
        borderRadius: 7,
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      <Text
        style={{
          backgroundColor: colors.color_s3,
          width: 40,
          height: 40,
          borderRadius: 7,
          textAlign: "center",
          textAlignVertical: "center",
          overflow: "hidden",
          color: "white",
          fontWeight: "900",
        }}
      >
        1
      </Text>

      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          flex: 2,
        }}
      >
        22년 7월
      </Text>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          flex: 2,
        }}
      >
        176박스
      </Text>
      <View style={{ flexDirection: "row", flex: 3 }}>
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
