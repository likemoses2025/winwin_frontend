import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/styles";

const RefundDateModal = ({
  dateModalVisible,
  toggleDateModal,
  refundDateList,
  setRefundDate,
}) => {
  const selectDateHandler = (name) => {
    setRefundDate(name);
    toggleDateModal(!toggleDateModal);
  };

  return (
    <Modal
      isVisible={dateModalVisible}
      backdropColor={colors.color3}
      backdropOpacity={0.7}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
    >
      <View style={{ paddingVertical: 50 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: colors.color2,
            borderWidth: 0.5,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          {refundDateList.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 15,
                }}
                onPress={() => selectDateHandler(item)}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default RefundDateModal;
