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

// https://github.com/moses1206/OrderProject/blob/main/client/src/components/views/Order/OrderForm.js

const OrderCreate = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { products, loading } = useGetOrderProducts(dispatch, isFocused);
  const [quantity, setQuantity] = useState("");

  const handleChangeQuantity = (quantity) => {
    setQuantity(Number(quantity));
  };

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
        {products.map((product) => (
          <TextInput
            key={product.no}
            style={{ fontSize: 12, width: 120 }}
            label={product.name}
            labelStyle={{ bottom: "auto" }}
            mode="outlined"
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default OrderCreate;
