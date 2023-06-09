import DateTimePicker from "@react-native-community/datetimepicker";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import SelectModal from "../../components/SelectModal";
import TableComponent from "../../components/TableComponent";
import { createOrder, updateOrder } from "../../redux/actions/otherAction";
import { colors, defaultStyle } from "../../styles/styles";
import { useMessageAndErrorOther } from "../../utils/hooks";

const nf = new Intl.NumberFormat();

const ConfirmOrder = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const orderItems = route.params?.orderItems;

  if (user.deliveryPlace.length === 0) {
    return (
      <View>
        <Text>배송장소를 등록해 주세요!!</Text>
      </View>
    );
  }

  const [id] = useState(route.params?.id);
  const [routeName] = useState(route.params?.routeName);
  const [selectItem, setSelectItem] = useState(user.deliveryPlace[0].name);
  const [deliveryDate, setDeliveryDate] = useState(route.params?.deliveryDate);
  const [totalAmount, setTotalAmount] = useState(route.params?.totalAmount);
  const [totalBox, setTotalBox] = useState(route.params?.totalBox);

  const [date, setDate] = useState(
    deliveryDate ? new Date(deliveryDate) : new Date()
  );
  const [showPicker, setShowPicker] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const loading = useMessageAndErrorOther(dispatch, navigation, "orders");

  useEffect(() => {
    setTotalAmount(amount);
    setTotalBox(box);
    setDeliveryDate(date);
  }, [isFocused, date]);

  const amount = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const box = orderItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const createOrderSubmitHandler = () => {
    const orderObj = {
      team: user.team,
      deliveryDate: deliveryDate,
      deliveryPlace: selectItem,
      totalBox: totalBox,
      totalAmount: totalAmount,
      orderItems: JSON.stringify(orderItems),
    };

    dispatch(createOrder(orderObj));
  };

  const updateOrderSubmitHandler = () => {
    const updateObj = {
      team: user.team,
      deliveryDate: date,
      deliveryPlace: selectItem,
      totalBox: totalBox,
      totalAmount: totalAmount,
      orderItems: JSON.stringify(orderItems),
    };

    dispatch(updateOrder(id, updateObj));
  };

  return (
    <>
      <View style={defaultStyle}>
        <Header back={true} />
        <Heading
          containerStyle={{
            paddingTop: Platform.OS === "ios" ? 70 : 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          text2="주문 확인"
        />

        <View style={{ paddingVertical: 20, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 2,
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
                width: "47%",
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
                width: "47%",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>배송장소</Text>
                <Text style={{ fontSize: 16 }}>{selectItem}</Text>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={toggleModal}
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
                <SelectModal
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal}
                  selectItem={user.deliveryPlace}
                  setSelectItem={setSelectItem}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/******* Table *******/}
          <TableComponent tableItems={orderItems} />
        </View>
        <View
          style={{
            borderColor: colors.color1,
            borderWidth: 1,
            marginTop: 30,
            borderRadius: 10,
            padding: 8,
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
          {routeName !== "orderCreate" && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("orderupdate", {
                  id,
                  orderItems,
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
                제품추가
              </Button>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={
              routeName === "orderCreate"
                ? createOrderSubmitHandler
                : updateOrderSubmitHandler
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
              {routeName === "orderCreate" ? "주문하기" : "수정하기"}
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
      {heading === "전체수량" ? "박스" : "원"}
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

export default ConfirmOrder;
