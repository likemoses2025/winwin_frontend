import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";
import { useIsFocused } from "@react-navigation/native";

const orders = [
  {
    _id: "fkldjsfljd1",
    team: "경북팀",
    storeName: "치복상사",
    deliveryDate: "2023-03-04",
    deliveryPlace: "창고",
    orderItems: [
      {
        name: "삼양라면(멀티)",
        code: 303257,
        price: 25625,
        quantity: 45,
        sum: 2032023,
      },
      {
        name: "불닭볶음면(멀티)",
        code: 303357,
        price: 30625,
        quantity: 50,
        sum: 2232023,
      },
    ],
    user: "kdjfldj1fod",
    totalBox: 352,
    totalSum: 2520000,
    orderStatus: "Processing",
    createdAt: "12-2-2023T23423",
  },
  {
    _id: "fkldjsfljd12",
    team: "경북팀",
    storeName: "경북상사",
    deliveryDate: "2023-03-04",
    deliveryPlace: "핵교",
    orderItems: [
      {
        name: "삼양라면(멀티)",
        code: 303257,
        price: 25625,
        quantity: 45,
        sum: 2032023,
      },
      {
        name: "불닭볶음면(멀티)",
        code: 303357,
        price: 30625,
        quantity: 50,
        sum: 2232023,
      },
    ],
    user: "kdjfldj1fod",
    totalBox: 352,
    totalSum: 2520000,
    orderStatus: "Processing",
    createdAt: "12-2-2023T23423",
  },
  {
    _id: "fkldjsfljd13",
    team: "경북팀",
    storeName: "비산상회",
    deliveryDate: "2023-03-04",
    deliveryPlace: "공장",
    orderItems: [
      {
        name: "삼양라면(멀티)",
        code: 303257,
        price: 25625,
        quantity: 45,
        sum: 2032023,
      },
      {
        name: "불닭볶음면(멀티)",
        code: 303357,
        price: 30625,
        quantity: 50,
        sum: 2232023,
      },
    ],
    user: "kdjfldj1fod",
    totalBox: 352,
    totalSum: 2520000,
    orderStatus: "Processing",
    createdAt: "12-2-2023T23423",
  },
];

const Orders = () => {
  const isFocused = useIsFocused();
  const loading = false;

  const updateOrderHandler = () => {};

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  team={item.team}
                  storeName={item.storeName}
                  status={item.orderStatus}
                  user={item.user}
                  orderedOn={item.createdAt.split("T")[0]}
                  deliveryPlace={item.deliveryPlace}
                  deliveryDate={item.deliveryDate}
                  totalBox={item.totalBox}
                  totalSum={item.totalSum}
                  updateHandler={updateOrderHandler}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>
                주문이 없습니다.!!
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
