import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Headline } from "react-native-paper";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import RefundItem from "../../components/RefundItem";
import { deleteMyRefund } from "../../redux/actions/otherAction";
import { getMyRefunds } from "../../redux/actions/refundAction";
import { colors, defaultStyle, formHeading } from "../../styles/styles";
import { useGetRefunds, useMessageAndErrorOther } from "../../utils/hooks";

const nf = new Intl.NumberFormat();

// 마대번호중 가장 큰것을 확인하고 거기에 +1을 하는 기능
// 반품날짜 클릭하면 오늘년월 기준으로 +1월 ~ -5월 (6개월 모달 선택 기능:6개월치만 검색되도록)
// refundDate model(2301,2302,2303) schema 만들고 현재기준 년월에서 -5 ~ +1 까지 가져오기

const Refunds = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { refunds, loading } = useGetRefunds(dispatch, isFocused);

  console.log("refunds", refunds);

  // 년월 자동설정하기
  const date = new Date();
  const formattedYear = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 2;
  const formattedDate = `${formattedYear}년 ${
    month < 10 ? `0` + month : month
  }월`;

  console.log("formattedDate", formattedDate);

  const filteredMonthRefunds =
    refunds !== undefined &&
    refunds.filter((item) => item.refundDate == formattedDate);

  const deleteRefundHandler = (id) => {
    dispatch(deleteMyRefund(id));
  };

  const totalMonthAmount =
    refunds !== undefined &&
    filteredMonthRefunds.reduce((acc, item) => acc + item.totalAmount, 0);

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
              borderColor: colors.color_s3,
              borderWidth: 1.5,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {formattedDate}
            </Text>
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
            <Text style={{ fontSize: 17 }}>
              {filteredMonthRefunds.length} 마대
            </Text>
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
            <Text style={{ fontSize: 17 }}>
              {nf.format(totalMonthAmount)} 원
            </Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 15, marginTop: 10, color: "#e57676" }}>
        채널별 반품 단가가 상이하여 금액이 정확하지 않으니 참고만 해주세요!!
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
              filteredMonthRefunds.map((item, index) => (
                <RefundItem
                  key={item._id}
                  id={item._id}
                  item={item}
                  deleteRefundHandler={deleteRefundHandler}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}></Headline>
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
