import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Headline } from "react-native-paper";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useGetOrders } from "../../utils/hooks";

const Orders = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { orders, loading } = useGetOrders(isFocused, true);
  // const orderObj = JSON.parse(orders);

  const deleteHandler = () => {};

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
        <Text style={formHeading}>주문내역</Text>
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
            {orders.length >= 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  team={item.team}
                  storeName={item.user.storeName}
                  status={item.orderStatus}
                  user={item.user}
                  orderedOn={item.createdAt}
                  deliveryPlace={item.deliveryPlace}
                  deliveryDate={item.deliveryDate}
                  totalBox={item.totalBox}
                  totalAmount={item.totalAmount}
                  orderItems={item.orderItems}
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
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          zIndex: 10,
        }}
        onPress={() => navigation.navigate("ordercreate")}
      >
        <Avatar.Icon
          icon={"plus-circle"}
          size={120}
          color={colors.color_s3}
          style={{ backgroundColor: colors.color4 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Orders;
