import React, { useState } from "react";
import { useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Loader from "../../components/Loader";
import ProductForm from "../../components/ProductForm";
import { colors, defaultStyle } from "../../styles/styles";

const OrderCreate = ({ route, navigation }) => {
  const { orderProducts } = useSelector((state) => state.product);
  const { orderItems } = route.params;
  const [orderList, setOrderList] = useState(orderProducts);
  const [loading, setLoading] = useState(true);

  for (let i = 0; i < orderList.length; i++) {
    // arr1의 모든 요소에 대해 반복
    for (let j = 0; j < orderItems.length; j++) {
      // arr2의 모든 요소에 대해 반복
      if (orderList[i].code === orderItems[j].code) {
        // arr1의 code와 arr2의 code가 같은 경우
        // orderList[i].quantity = orderItems[j].quantity;
        // orderList[i].quantity.push(orderItems[j].quantity);
        orderList[i].push({ quantity: orderItems[j].quantity });
      }
    }
  }

  console.log("오더리스트", orderList);

  // if (route.params?.orderItems) {
  //   orderList.map((item) => {
  //     console.log("Item " + JSON.stringify(item));
  //     for (let i = 0; i < orderItems.length; i++) {
  //       if (item.code === orderItems[i].code) {
  //         item.quantity = orderItems[i].quantity;
  //       }
  //     }
  //   });
  // }

  setTimeout(() => setLoading(false), 2500); // 2.5초 후 로딩을 false로 설정

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
      orderCreate: true,
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
