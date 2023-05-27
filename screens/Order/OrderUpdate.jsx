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

const OrderUpdate = ({ route, navigation }) => {
  const { orderProducts } = useSelector((state) => state.product);
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id, orderItems, deliveryDate, deliveryPlace } = route.params;

  setTimeout(() => setLoading(false), 2500); // 2.5초 후 로딩을 false로 설정

  useEffect(() => {
    const updatedArray = orderProducts.map((item) => {
      const second = orderItems.find((s) => s.code === item.code);
      if (second) {
        return { ...item, quantity: second.quantity };
      }
      return item;
    });
    setOrderList(updatedArray);
  }, [orderItems]);

  const changeQuantity = (code, quantity) => {
    const NewOrderList = orderList.map((item) =>
      item.code === code ? { ...item, quantity } : item
    );
    setOrderList(NewOrderList);
  };

  const orderUpdateHandler = () => {
    const orderItems = orderList.filter((item) => item.quantity > 0);
    navigation.navigate("confirmorder", {
      id,
      orderItems,
      deliveryDate,
      deliveryPlace,
      name: "orderUpdate",
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
            <Heading text1="주문 수정하기" />
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
                  orderProducts={orderProducts}
                  orderItems={orderItems}
                  setOrderList={setOrderList}
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
            <Button textColor={colors.color2} onPress={orderUpdateHandler}>
              다음
            </Button>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default OrderUpdate;
