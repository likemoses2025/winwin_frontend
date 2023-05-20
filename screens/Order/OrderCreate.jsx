import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import { Button, TextInput } from "react-native-paper";
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
import Loader from "../../components/Loader";

// https://github.com/moses1206/OrderProject/blob/main/client/src/components/views/Order/OrderForm.js

const OrderCreate = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { orderProducts, loading } = useGetOrderProducts(dispatch, isFocused);

  console.log("orderProducts" + orderProducts);

  const [orderList, setOrderList] = useState(orderProducts);

  const changeQuantity = (code, quantity) => {
    const NewOrderList = orderList.map((item) =>
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
            }}
          >
            {orderProducts.map((item, index) => (
              <ProductForm
                key={item.code}
                index={index}
                product={item}
                changeQuantity={changeQuantity}
              />
            ))}
          </ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: colors.color3,
              borderRadius: 5,
              width: "100%",
            }}
          >
            <Button
              textColor={colors.color2}
              onPress={() => navigation.navigate("confirmorder")}
            >
              다음
            </Button>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default OrderCreate;
