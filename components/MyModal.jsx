import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";

const MyModal = ({ id, deleteHandler, setOpenModal }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 13,
          right: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setOpenModal(false)}
      >
        <Avatar.Icon
          icon={"close"}
          size={25}
          style={{
            backgroundColor: colors.color1,
          }}
        />
      </TouchableOpacity>
      <Text style={{ width: "90%" }}>주문을 삭제하시겠습니까?</Text>
      <Button
        style={{ width: "80%" }}
        textColor={colors.color1}
        onPress={() => deleteHandler(id)}
      >
        삭제하기
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    width: 230,
    height: 90,
    alignSelf: "center",
    justifyContent: "center",
    zIndex: 100,
    backgroundColor: colors.color2,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },

  text: {
    fontWeight: "900",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default MyModal;
