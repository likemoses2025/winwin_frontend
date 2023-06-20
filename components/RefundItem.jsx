import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, IconButton, MD3Colors } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const nf = new Intl.NumberFormat();

const RefundItem = ({ item, id, deleteRefundHandler }) => {
  const navigation = useNavigation();
  const { gunnySackNumber, refundDate, totalValue, refundItems } = item;

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
        padding: 2,
        borderRadius: 7,
        paddingHorizontal: 15,
        marginBottom: 5,
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
          fontSize: 22,
          fontWeight: "900",
        }}
      >
        {gunnySackNumber}
      </Text>

      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: "700",
          flex: 2,
        }}
      >
        {refundDate}
      </Text>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: "700",
          flex: 2,
        }}
      >
        {totalValue} 식
      </Text>
      <Text style={{ borderWidth: 0.4 }}></Text>
      <View style={{ flexDirection: "row", flex: 3 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <IconButton
            icon="square-edit-outline"
            iconColor={MD3Colors.primary0}
            size={30}
            style={{ marginBottom: -10 }}
            onPressIn={() =>
              navigation.navigate("refundupdate", {
                refundItems: JSON.parse(refundItems),
                id,
                gunnySackNumber,
                refundDate,
              })
            }
          />
          <Text>수정</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <IconButton
            icon="delete-outline"
            iconColor={MD3Colors.primary0}
            size={30}
            style={{ marginBottom: -10 }}
            onPress={() => deleteRefundHandler(id)}
          />
          <Text>삭제</Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {},
});

export default RefundItem;
