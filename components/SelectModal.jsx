import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { colors } from "../styles/styles";
import Heading from "./Heading";

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

  return (
    <Modal isVisible={isModalVisible}>
      <View style={{ backgroundColor: colors.color2 }}>
        {deliveryPlace.map((item) => (
          <TouchableOpacity
            key={item._id}
            onPress={() => setDeliveryPlaceHandler(item.name)}
          >
            <Text
              style={{
                marginTop: 15,
                fontSize: 20,
                textAlign: "center",
                marginBottom: 15,
              }}
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
