import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Avatar, Button, Headline } from "react-native-paper";
import OrderItem from "../../components/OrderItem";
import { useIsFocused } from "@react-navigation/native";
import { useGetUserOrders } from "../../utils/hooks";
import { useDispatch } from "react-redux";

const Orders = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { userOrders, loading } = useGetUserOrders(dispatch, isFocused);
  console.log("UserOrders: " + JSON.stringify(userOrders));

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
            {userOrders.length > 0 ? (
              userOrders.map((item, index) => (
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
