import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../styles/styles";

const OrderItem = ({
  id,
  team,
  deliveryDate,
  deliveryPlace,
  storeName,
  totalBox,
  totalSum,
  orderedOn,
  updateHandler,
  admin = true,
  loading,
  i = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}
    >
      <Text
        style={{
          ...styles.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        배송요청 날짜 - #{deliveryDate}
      </Text>

      <TextBox title={"팀명"} value={team} i={i} />
      <TextBox title={"점명"} value={storeName} i={i} />
      <TextBox title={"배송장소"} value={deliveryPlace} i={i} />
      <TextBox title={"박스합계"} value={totalBox} i={i} />
      <TextBox title={"금액합계"} value={totalSum} i={i} />
      <TextBox title={"생성시간"} value={orderedOn} i={i} />

      {admin && (
        <Button
          icon={"update"}
          mode={"contained"}
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: "center",
            marginTop: 10,
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{title} - </Text>
    {value}
    {title === "금액합계" ? "원" : ""}
    {title === "박스합계" ? "박스" : ""}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default OrderItem;
