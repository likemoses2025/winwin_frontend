import DateTimePicker from "@react-native-community/datetimepicker";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

const RefundConfirm = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const refundItems = route.params?.refundItems;

  console.log("refundItems: " + refundItems);

  const [id] = useState(route.params?.id);
  const [name] = useState(route.params?.name);

  const [ginnySackNumber, setGinnySackNumber] = useState(1);
  const [totalAmount, setTotalAmount] = useState(route.params?.totalAmount);
  const [totalBox, setTotalBox] = useState(route.params?.totalBox);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const loading = useMessageAndErrorOther(dispatch, navigation, "refunds");

  useEffect(() => {
    setTotalAmount(amount);
    setTotalBox(box);
  }, [isFocused]);

  const amount = refundItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const box = refundItems.reduce((acc, item) => acc + item.quantity, 0);

  const createRefundSubmitHandler = () => {
    const orderObj = {
      team: user.team,
      deliveryDate: deliveryDate,
      deliveryPlace: deliveryPlace,
      totalBox: totalBox,
      totalAmount: totalAmount,
      orderItems: JSON.stringify(orderItems),
    };

    dispatch(createOrder(orderObj));
  };

  const updateRefundSubmitHandler = () => {
    const updateObj = {
      team: user.team,
      deliveryDate: date,
      deliveryPlace: deliveryPlace,
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
            paddingTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          text2="주문 확인"
        />

        <View style={{ paddingVertical: 20, flex: 1 }}>
          {/******* Table *******/}
          <TableComponent refundItems={refundItems} />
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
                loading={loading}
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

export default RefundConfirm;
