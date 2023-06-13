import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import SelectModal from "../../components/SelectModal";
import TableComponent from "../../components/TableComponent";
import { createRefund, updateRefund } from "../../redux/actions/otherAction";
import { colors, defaultStyle } from "../../styles/styles";
import { useMessageAndErrorOther } from "../../utils/hooks";
import { gunnySackNumber, refundDate } from "../../assets/data/data";

const nf = new Intl.NumberFormat();

const RefundConfirm = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const refundItems = route.params?.refundItems;
  const [id] = useState(route.params?.id);
  const [name] = useState(route.params?.name);
  const [selectItem, setSelectItem] = useState(refundDate[0].name);
  const [totalAmount, setTotalAmount] = useState(route.params?.totalAmount);
  const [totalValue, setTotalValue] = useState(route.params?.totalValue);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  console.log("selectItem :" + selectItem);

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
      team: user.team,
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
      refundDate: refundDate,
      totalValue: totalValue,
      totalAmount: totalAmount,
      refundItems: JSON.stringify(refundItems),
    };

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
                <Text>반품년월</Text>
                <Text style={{ fontSize: 16 }}>{selectItem}</Text>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={toggleModal}
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
                <SelectModal
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal}
                  selectItem={refundDate}
                  setSelectItem={setSelectItem}
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
                <Text style={{ fontSize: 16 }}>{selectItem}</Text>
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={toggleModal}
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
                <SelectModal
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal}
                  selectItem={gunnySackNumber}
                  setSelectItem={setSelectItem}
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
