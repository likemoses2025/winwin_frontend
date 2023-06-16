import { useIsFocused } from "@react-navigation/native";
import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Headline } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useGetRefunds, useMessageAndErrorOther } from "../../utils/hooks";
import RefundItem from "../../components/RefundItem";
import { getMyRefunds } from "../../redux/actions/refundAction";
import { deleteMyRefund } from "../../redux/actions/otherAction";
import { refundDateList } from "../../assets/data/data";

const Refunds = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  // refunds를 useGetRefunds를 통해서 가져와야함
  const { loading } = useGetRefunds(dispatch, isFocused);
  const refunds = [
    {
      _id: 1,
      gunnySackNumber: 1,
      reFundDate: "22년 7월",
      totalValue: 150,
      totalAmount: 235067,
      refundItems: "refundItem",
    },
    {
      _id: 2,
      gunnySackNumber: 2,
      reFundDate: "22년 7월",
      totalValue: 176,
      totalAmount: 235067,
      refundItems: "refundItem2",
    },
    {
      _id: 3,
      gunnySackNumber: 3,
      reFundDate: "22년 7월",
      totalValue: 100,
      totalAmount: 235067,
      refundItems: "refundItem2",
    },
  ];

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
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
          // marginTop: Platform.OS === "ios" && 20,
        }}
      >
        <Text style={formHeading}>반 품 내 역</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.color2,
          borderRadius: 10,
          padding: 10,
          elevation: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text style={{ flex: 2, fontSize: 17 }}>반품날짜</Text>
          <View
            style={{
              flex: 4,
              backgroundColor: "#eeeeee",
              borderWidth: 0.2,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>23년 7월</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text style={{ flex: 2, fontSize: 17 }}>마대수량</Text>
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              borderWidth: 0.5,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17 }}>36 마대</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <Text style={{ flex: 2, fontSize: 17 }}>반품금액</Text>
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              borderWidth: 0.5,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 17 }}>3,658,200 원</Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 15, marginTop: 10, color: "#e57676" }}>
        채널별 반품 단가가 상이하여 금액이 정확하지 않으니 참고용으로
        사용바랍니다.
      </Text>
      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {!loadingDelete && refunds?.length > 0 ? (
              refunds.map((item, index) => (
                <RefundItem key={item._id} item={item} />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>
                반품이 없습니다.!!
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
        onPress={() => navigation.navigate("refundcreate")}
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
