import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { useIsFocused } from "@react-navigation/native";
import { Headline } from "react-native-paper";

const AdminOrders = ({ navigation }) => {
  const isFocused = useIsFocused();

  const loading = true;
  const orders = [];

  const updateHandler = (id) => {};
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
        <Text style={formHeading}>All Orders</Text>
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
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default AdminOrders;
