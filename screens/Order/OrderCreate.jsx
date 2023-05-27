import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Loader from "../../components/Loader";
import ProductForm from "../../components/ProductForm";
import { colors, defaultStyle } from "../../styles/styles";

const OrderCreate = ({ route, navigation }) => {
  const { orderProducts } = useSelector((state) => state.product);
  const [orderList, setOrderList] = useState(orderProducts);
  const [loading, setLoading] = useState(true);
  // const { orderItems } = route.params?.orderItems;

  setTimeout(() => setLoading(false), 2500); // 2.5초 후 로딩을 false로 설정

  console.log("orderList 111 : " + JSON.stringify(orderList));

  const changeQuantity = (code, quantity) => {
    const NewOrderList = orderList.map((item) =>
      item.code === code ? { ...item, quantity } : item
    );
    setOrderList(NewOrderList);
  };

  const orderCreateHandler = () => {
    const orderItems = orderList.filter((item) => item.quantity > 0);
    navigation.navigate("confirmorder", {
      orderItems,
    });
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 15,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={false} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              marginTop: 60,
              marginBottom: 15,
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
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            {orderList.map((item, index) => {
              return (
                <ProductForm
                  key={item.code}
                  index={index}
                  item={item}
                  changeQuantity={changeQuantity}
                />
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: colors.color3,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <Button textColor={colors.color2} onPress={orderCreateHandler}>
              다음
            </Button>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default OrderCreate;
