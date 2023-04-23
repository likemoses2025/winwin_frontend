import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigation = useNavigation();

  const itemsPrice = 45000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice * shippingCharges + tax;

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="주문"
        text2="확인하기"
      />
      <View style={{ paddingVertical: 20, flex: 1, elevation: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading={"제품합계"} value={itemsPrice} />
      <PriceTag heading={"배송비"} value={shippingCharges} />
      <PriceTag heading={"세금"} value={tax} />
      <PriceTag heading={"전체합계"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          icon={"chevron-right"}
          style={{ backgroundColor: colors.color3, padding: 5, margin: 10 }}
          textColor={colors.color2}
        >
          결제하기
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>{value}원</Text>
  </View>
);

export default ConfirmOrder;