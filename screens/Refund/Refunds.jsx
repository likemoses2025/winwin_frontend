import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Headline } from "react-native-paper";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useGetRefunds, useMessageAndErrorOther } from "../../utils/hooks";
import RefundItem from "../../components/RefundItem";
import { getMyRefunds } from "../../redux/actions/refundAction";

const Refunds = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const { refunds, loading } = useGetRefunds(dispatch, isFocused);

  const deleteRefundHandler = (id) => {
    dispatch(deleteMyRefund(id));
  };
  const loadingDelete = useMessageAndErrorOther(
    dispatch,
    null,
    null,
    getMyRefunds
  );

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
        <Text style={formHeading}>반 품 내 역</Text>
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
            {!loadingDelete &&
              (refunds?.length > 0 ? (
                refunds.map((item, index) => (
                  <RefundItem
                    key={item._id}
                    id={item._id}
                    i={index}
                    team={item.team}
                    storeName={item.user.storeName}
                    status={item.orderStatus}
                    user={item.user}
                    createdAt={item.createdAt}
                    deliveryPlace={item.deliveryPlace}
                    deliveryDate={item.deliveryDate}
                    totalBox={item.totalBox}
                    totalAmount={item.totalAmount}
                    orderItems={item.orderItems}
                    deleteHandler={deleteRefundHandler}
                  />
                ))
              ) : (
                <Headline style={{ textAlign: "center" }}>
                  반품이 없습니다.!!
                </Headline>
              ))}
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

export default Refunds;
