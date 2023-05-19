import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  colors,
  defaultStyle,
  formHeading,
  inputStyling,
} from "../../styles/styles";
import { useGetOrderProducts } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import ProductForm from "../../components/ProductForm";

// https://github.com/moses1206/OrderProject/blob/main/client/src/components/views/Order/OrderForm.js

const OrderCreate = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { orderProducts, loading } = useGetOrderProducts(dispatch, isFocused);

  console.log("orderProducts" + orderProducts);

  const [orderList, setOrderList] = useState([]);

  const changeOrderQuantity = (code, quantity) => {
    const NewOrderList = orderProducts.map((item) =>
      item.code === code ? { ...item, quantity } : item
    );
    setOrderList(NewOrderList);
  };

  console.log("orderList: " + JSON.stringify(orderList));

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
        }}
      >
        {orderProducts.map((item, index) => (
          <ProductForm
            key={item.code}
            index={index}
            product={item}
            changeQuantity={changeOrderQuantity}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderCreate;
