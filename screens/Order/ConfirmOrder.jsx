import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import ConfirmOrderItem from "../../components/ConfirmOrderItem";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import { colors, defaultStyle } from "../../styles/styles";

const nf = new Intl.NumberFormat();

const ConfirmOrder = ({ route, navigation }) => {
  const { orderItems } = route.params;
  console.log("orderItems" + orderItems);

  console.log("Route.params" + JSON.stringify(route.params));
  console.log("ConfirmOrder Route" + JSON.stringify(route));

  const totalAmount = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalBox = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  // 결제하기 누르면 orderItem 및 전체 state 초기화

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
          {orderItems.map((i) => (
            <ConfirmOrderItem
              key={i.code}
              name={i.name}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </ScrollView>
      </View>

      <PriceTag heading={"전체수량"} value={totalBox} />
      <PriceTag heading={"전체합계"} value={totalAmount} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ordercreate", { orderItems })}
        >
          <Button
            icon={"chevron-left"}
            style={{
              backgroundColor: colors.color1,
              padding: 5,
              marginTop: 10,
              width: "100%",
            }}
            textColor={colors.color2}
          >
            뒤로가기
          </Button>
        </TouchableOpacity>
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
    <Text>
      {nf.format(value)}
      {heading === "전체수량" ? "박스" : "원"}
    </Text>
  </View>
);

export default ConfirmOrder;
