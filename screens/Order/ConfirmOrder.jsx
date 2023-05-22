import React from "react";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import ConfirmOrderItem from "../../components/ConfirmOrderItem";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import { colors, defaultStyle } from "../../styles/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Avatar } from "react-native-paper";
import { useEffect } from "react";
const nf = new Intl.NumberFormat();

const ConfirmOrder = ({ route, navigation }) => {
  const { orderItems } = route.params;
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    const koreaDate = currentDate.toLocaleDateString("ko-KR");
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
    setFormattedDate(koreaDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const totalAmount = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalBox = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  // 결제하기 누르면 orderItem 및 전체 state 초기화

  useEffect(() => {
    const tomorrow = new Date(date.setDate(date.getDate() + 1));
    const formattedTomorrow = tomorrow.toLocaleDateString("ko-KR");
    setFormattedDate(formattedTomorrow);
  }, [date]);

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
      <View style={{ paddingVertical: 20, flex: 1, elevation: 1 }}>
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
                <Text style={{ fontSize: 16 }}>{formattedDate}</Text>
              </View>
              <TouchableOpacity
                onPress={showDatePicker}
                style={{ justifyContent: "center", padding: 10 }}
              >
                <Avatar.Icon icon="calendar-month-outline" size={30} />
              </TouchableOpacity>
              {/* <Button mode="text" onPress={showDatePicker}>
            </Button> */}
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
              borderWidth: 0.3,
              padding: 10,
              borderRadius: 10,
              width: "45%",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>배송장소</Text>
                <Text style={{ fontSize: 16 }}>창고</Text>
              </View>

              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Avatar.Icon icon="truck-cargo-container" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ borderWidth: 0.3, marginTop: 30, borderRadius: 10 }}>
            {orderItems.map((i) => (
              <ConfirmOrderItem
                key={i.code}
                name={i.name}
                quantity={i.quantity}
                price={i.price}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          borderColor: colors.color1,
          borderWidth: 1,
          marginTop: 30,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <PriceTag heading={"전체수량"} value={totalBox} />
        <PriceTag heading={"전체합계"} value={totalAmount} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ordercreate", { orderItems })}
        >
          <Button
            icon={"chevron-left"}
            style={{
              backgroundColor: colors.color1,
              padding: 5,
              marginTop: 10,
              width: "100%",
            }}
            textColor={colors.color2}
          >
            뒤로가기
          </Button>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("payment", {
              itemsPrice,
              shippingCharges,
              tax,
              totalAmount,
            })
          }
        >
          <Button
            icon={"chevron-right"}
            style={{ backgroundColor: colors.color3, padding: 5, margin: 10 }}
            textColor={colors.color2}
          >
            결제하기
          </Button>
        </TouchableOpacity>
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
