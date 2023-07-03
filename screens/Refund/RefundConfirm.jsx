import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { gunnySackNumberList } from "../../assets/data/data.js";
import GunnySackModal from "../../components/GunnySackModal";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import RefundDateModal from "../../components/RefundDateModal";
import TableComponent from "../../components/TableComponent";
import { createRefund, updateRefund } from "../../redux/actions/otherAction";
import { colors, defaultStyle } from "../../styles/styles";
import { useMessageAndErrorOther } from "../../utils/hooks";

const nf = new Intl.NumberFormat();

// refundDate 설정
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 2;

// 6개월 설정
const pastMonths = [];
for (let i = 0; i < 7; i++) {
  const targetMonth = month - i;
  const targetYear = year - Math.floor(targetMonth / 12);
  const adjustedMonth = (((targetMonth % 12) + 12) % 12) + 1; // 음수나 0이면 12를 더해 양수로 만들어주고, 1을 더해 1부터 시작하도록 조정
  pastMonths.push(
    `${targetYear.toString().slice(-2)}년 ${adjustedMonth
      .toString()
      .padStart(2, "0")}월`
  );
}

const RefundConfirm = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const refundItems = route.params?.refundItems;
  const [id] = useState(route.params?.id);
  const [name] = useState(route.params?.name);
  // const [refundDate, setRefundDate] = useState(
  //   route.params?.refundDate ? route.params.refundDate : refundDateList[0].name
  // );
  const [refundDate, setRefundDate] = useState(
    route.params?.refundDate ? route.params.refundDate : pastMonths[1]
  );
  const [gunnySackNumber, setGunnySackNumber] = useState(
    route.params?.gunnySackNumber
      ? route.params.gunnySackNumber
      : gunnySackNumberList[0].name
  );

  const [totalAmount, setTotalAmount] = useState(route.params?.totalAmount);
  const [totalValue, setTotalValue] = useState(route.params?.totalValue);

  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [sackModalVisible, setSackModalVisible] = useState(false);

  const toggleDateModal = () => {
    setDateModalVisible(!dateModalVisible);
  };
  const toggleSackModal = () => {
    setSackModalVisible(!sackModalVisible);
  };

  const loading = useMessageAndErrorOther(dispatch, navigation, "refunds");

  useEffect(() => {
    setTotalAmount(amount);
    setTotalValue(refundValue);
  }, [isFocused]);

  const amount = refundItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const refundValue = refundItems.reduce((acc, item) => acc + item.quantity, 0);

  const createRefundSubmitHandler = () => {
    const refundObj = {
      gunnySackNumber: gunnySackNumber,
      refundDate: refundDate,
      totalValue: totalValue,
      totalAmount: totalAmount,
      refundItems: JSON.stringify(refundItems),
    };

    dispatch(createRefund(refundObj));
  };

  const updateRefundSubmitHandler = () => {
    const updateObj = {
      team: user.team,
      gunnySackNumber: gunnySackNumber,
      refundDate: refundDate,
      totalValue: totalValue,
      totalAmount: totalAmount,
      refundItems: JSON.stringify(refundItems),
    };
    console.log("updateObj", updateObj);
    dispatch(updateRefund(id, updateObj));
  };

  return (
    <>
      <View style={defaultStyle}>
        <Header back={true} />
        <Heading
          containerStyle={{
            paddingTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          text2="반품 확인"
        />

        <View style={{ paddingVertical: 15, paddingHorizontal: 2, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderWidth: 0.3,
                padding: 5,
                borderRadius: 10,
                width: "48%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>반품년월</Text>
                <Text style={{ fontSize: 16 }}>{refundDate}</Text>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={toggleDateModal}
              >
                <Avatar.Icon
                  icon="calendar-month-outline"
                  color={colors.color1}
                  size={30}
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "red",
                  }}
                />
                <RefundDateModal
                  dateModalVisible={dateModalVisible}
                  toggleDateModal={toggleDateModal}
                  refundDateList={pastMonths}
                  setRefundDate={setRefundDate}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderWidth: 0.3,
                padding: 5,
                borderRadius: 10,
                width: "45%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>마대번호</Text>
                <Text style={{ fontSize: 16 }}>{gunnySackNumber}</Text>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={toggleSackModal}
              >
                <Avatar.Icon
                  icon="numeric-1-box-multiple-outline"
                  color={colors.color1}
                  size={30}
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "red",
                  }}
                />
                <GunnySackModal
                  sackModalVisible={sackModalVisible}
                  toggleSackModal={toggleSackModal}
                  gunnySackNumberList={gunnySackNumberList}
                  setGunnySackNumber={setGunnySackNumber}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/******* Table *******/}
          <TableComponent tableItems={refundItems} name={name} />
        </View>
        <View
          style={{
            borderColor: colors.color1,
            borderWidth: 1,
            marginTop: 30,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#f0f0f0",
          }}
        >
          <PriceTag heading={"반품수량"} value={totalValue} />
          <PriceTag heading={"반품금액"} value={totalAmount} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          {name !== "refundCreate" && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("refundupdate", {
                  id,
                  refundItems,
                })
              }
            >
              <Button
                icon={"chevron-right"}
                style={{
                  backgroundColor: colors.color3,
                  padding: 5,
                  margin: 10,
                }}
                textColor={colors.color2}
              >
                반품추가
              </Button>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={
              name === "refundCreate"
                ? createRefundSubmitHandler
                : updateRefundSubmitHandler
            }
          >
            <Button
              icon={"chevron-right"}
              style={{
                backgroundColor: colors.color1,
                padding: 5,
                margin: 10,
              }}
              textColor={colors.color2}
              loading={loading}
            >
              {name === "refundCreate" ? "반품등록" : "수정하기"}
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>
      {nf.format(value)}
      {heading === "반품수량" ? "식" : "원"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: 300,
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    top: 100,
    left: 100,
  },
  list: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },
});

export default RefundConfirm;
