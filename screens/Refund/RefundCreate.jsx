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

const RefundCreate = ({ route, navigation }) => {
  const { expiredProducts } = useSelector((state) => state.product);
  const [refundList, setRefundList] = useState(expiredProducts);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2500); // 2.5초 후 로딩을 false로 설정

  const changeQuantity = (code, quantity) => {
    const NewRefundList = refundList.map((item) =>
      item.code === code ? { ...item, quantity } : item
    );
    setRefundList(NewRefundList);
  };

  const refundCreateHandler = () => {
    const refundItems = refundList.filter((item) => item.quantity > 0);
    navigation.navigate("refundconfirm", {
      refundItems: refundItems,
      name: "refundCreate",
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
            <Heading text1="반품하기" />
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
            {refundList.map((item, index) => {
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
            <Button textColor={colors.color2} onPress={refundCreateHandler}>
              다음
            </Button>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default RefundCreate;
