import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Loader from "../../components/Loader";
import ProductForm from "../../components/ProductForm";
import { colors, defaultStyle } from "../../styles/styles";
import { useGetOrderProducts } from "../../utils/hooks";

const OrderCreate = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { orderedItems } = useSelector((state) => state.order);
  const { orderProducts, loading } = useGetOrderProducts(dispatch, isFocused);
  const [orderList, setOrderList] = useState(orderProducts);
  const [filteredOrderList, setFilteredOrderList] = useState();

  const changeQuantity = (code, quantity) => {
    const NewOrderList = orderList.map((item) =>
      item.code === code ? { ...item, quantity } : item
    );
    setOrderList(NewOrderList);
    const filteredData = orderList.filter((item) => item.quantity > 0);
    setFilteredOrderList(filteredData);
  };

  const orderCreateHandler = () => {
    // orderedItems.orderItem.push(filteredOrderList);
    navigation.navigate("confirmorder");
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
            {orderList.map((item, index) => (
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
