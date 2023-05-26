import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import { colors, defaultStyle } from "../../styles/styles";
import TableComponent from "../../components/TableComponent";
import { createOrder } from "../../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../../utils/hooks";

const nf = new Intl.NumberFormat();

const ConfirmOrder = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { orderItems } = route.params;
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const loading = useMessageAndErrorOther(dispatch, navigation, "orders");

  console.log("orderItems : " + JSON.stringify(orderItems));
  console.log("orderItems._id : " + orderItems._id);

  const totalAmount = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalBox = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const orderSubmitHandler = () => {
    const orderObj = {
      team: user.team,
      deliveryDate: date,
      deliveryPlace: "창고",
      totalBox: totalBox,
      totalAmount: totalAmount,
      orderItems: JSON.stringify(orderItems),
    };

    dispatch(createOrder(orderObj));
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{
          paddingTop: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
        text2="주문 상세내역"
      />
      <View style={{ paddingVertical: 20, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0.3,
              padding: 10,
              borderRadius: 10,
              width: "45%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text>배송날짜</Text>
                <Text style={{ fontSize: 16 }}>
                  {date.toLocaleDateString("ko-KR")}
                </Text>
              </View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={{ justifyContent: "center", padding: 10 }}
              >
                <Avatar.Icon
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "red",
                  }}
                  icon="calendar-month-outline"
                  color={colors.color1}
                  size={30}
                />
              </TouchableOpacity>

              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  locale="ko-KR" // Set the locale to Korean
                  onChange={handleDateChange}
                />
              )}
            </View>
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
              <Text>배송장소</Text>
              <Text style={{ fontSize: 16 }}>창고</Text>
            </View>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar.Icon
                icon="truck-cargo-container"
                color={colors.color1}
                size={30}
                style={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "red",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/******* Table *******/}

        <TableComponent orderItems={orderItems} />
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
        <PriceTag heading={"전체수량"} value={totalBox} />
        <PriceTag heading={"전체합계"} value={totalAmount} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ordercreate", { id: orderItems._id })
          }
        >
          <Button
            icon={"chevron-left"}
            style={{
              backgroundColor:
                route.params.name === "editOrder"
                  ? colors.color1
                  : colors.color3,
              padding: 5,
              marginTop: 10,
              width: "100%",
            }}
            textColor={colors.color2}
          >
            수정하기
          </Button>
        </TouchableOpacity>
        {route.params.name !== "editOrder" && (
          <TouchableOpacity onPress={orderSubmitHandler}>
            <Button
              icon={"chevron-right"}
              style={{ backgroundColor: colors.color1, padding: 5, margin: 10 }}
              textColor={colors.color2}
              loading={loading}
            >
              주문하기
            </Button>
          </TouchableOpacity>
        )}
      </View>
    </View>
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
      {heading === "전체수량" ? "박스" : "원"}
    </Text>
  </View>
);

export default ConfirmOrder;
