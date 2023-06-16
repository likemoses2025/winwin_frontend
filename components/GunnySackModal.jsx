import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/styles";

const GunnySackModal = ({
  sackModalVisible,
  toggleSackModal,
  gunnySackNumberList,
  setGunnySackNumber,
}) => {
  const selectGunnySackHandler = (name) => {
    setGunnySackNumber(name);
    toggleSackModal(!sackModalVisible);
  };
  return (
    <Modal
      isVisible={sackModalVisible}
      backdropColor={colors.color3}
      backdropOpacity={0.7}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      style={{ height: 300 }}
    >
      <View style={{ flex: 1, height: 100 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: colors.color2,
            borderWidth: 0.5,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          {gunnySackNumberList.map((item) => (
            <TouchableOpacity key={item._id}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: 15,
                }}
                onPress={() => selectGunnySackHandler(item.name)}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default GunnySackModal;
