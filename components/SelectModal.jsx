import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/styles";

const SelectModal = ({
  isModalVisible,
  toggleModal,
  deliveryPlace,
  setDeliveryPlace,
}) => {
  const setDeliveryPlaceHandler = (name) => {
    setDeliveryPlace(name);
    toggleModal(!isModalVisible);
  };

  console.log("isModalVisible : " + isModalVisible);

  return (
    <Modal
      isVisible={isModalVisible}
      backdropColor={colors.color3}
      backdropOpacity={0.7}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
    >
      <View style={{ backgroundColor: colors.color2, borderRadius: 30 }}>
        {deliveryPlace.map((item) => (
          <TouchableOpacity key={item._id}>
            <Text
              style={{
                marginTop: 15,
                fontSize: 20,
                textAlign: "center",
                marginBottom: 15,
              }}
              onPress={() => setDeliveryPlaceHandler(item.name)}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default SelectModal;
