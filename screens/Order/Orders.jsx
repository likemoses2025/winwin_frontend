import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Headline } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useGetDealerOrders } from "../../utils/hooks";
import { getDealerOrders } from "../../redux/actions/orderAction";

const Orders = ({ navigation }) => {
  const { dealerOrders, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  // const { dealerOrders, loading } = useGetDealerOrders(dispatch, isFocused);

  console.log("DealerOrders: " + dealerOrders);

  useEffect(() => {
    getDealerOrders();
  }, []);

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
            {dealerOrders.length >= 0 ? (
              dealerOrders.map((item, index) => (
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
