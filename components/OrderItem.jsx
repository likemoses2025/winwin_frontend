import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const nf = new Intl.NumberFormat();

const OrderItem = ({
  id,
  team,
  deliveryDate,
  deliveryPlace,
  storeName,
  totalBox,
  totalAmount,
  loading,
  orderItems,
  i = 0,
}) => {
  const navigation = useNavigation();
  const date = new Date(deliveryDate);
  const krTime = new Date(date.getTime() + 60 * 1000);

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
        @{storeName + " " + " " + " " + " " + " " + " "} 배송날짜 -{" "}
        {deliveryDate.split("T")[0]}
      </Text>

      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TextBox title={"팀명"} value={team} i={i} />
          <TextBox title={"장소"} value={deliveryPlace} i={i} />
        </View>
        <View>
          <TextBox title={"박스"} value={nf.format(totalBox)} i={i} />
          <TextBox title={"금액"} value={nf.format(totalAmount)} i={i} />
        </View>
      </View>
      <View
        style={{
          paddingLeft: 20,
        }}
      >
        <TextBox title={"생성일"} value={krTime.toLocaleString()} i={i} />
      </View>

      <Button
        icon={"clipboard-text-search-outline"}
        mode={"contained"}
        textColor={i % 2 === 0 ? colors.color2 : colors.color3}
        style={{
          width: 120,
          alignSelf: "center",
          marginTop: 10,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
        }}
        onPress={() =>
          navigation.navigate("confirmorder", {
            id,
            team,
            deliveryDate,
            deliveryPlace,
            totalAmount,
            totalBox,
            orderItems: JSON.parse(orderItems),
            name: "orders",
          })
        }
        loading={loading}
        disabled={loading}
      >
        확인하기
      </Button>
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
    <Text style={{ fontWeight: "900" }}>{title} : </Text>

    {value}
    {title === "금액" ? "원" : ""}
    {title === "박스" ? "박스" : ""}
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
    fontWeight: "700",
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
