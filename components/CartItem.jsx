import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { iconOptions } from "../screens/ProductDetails";
import { colors } from "../styles/styles";

const CartItem = ({
  name,
  amount,
  qty,
  stock,
  index,
  imgSrc,
  id,
  decrementHandler,
  incrementHandler,
  navigation,
}) => {
  return (
    // Shape and Image
    <View style={{ flexDirection: "row", height: 100, marginVertical: 20 }}>
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image source={{ uri: imgSrc }} style={styles.image} />
      </View>

      {/* product name and price */}
      <View style={{ width: "40%", paddingHorizontal: 25 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 17 }}
          onPress={() => navigation.navigate("productDetails", { id })}
        >
          {name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "900" }}>
          {amount}원
        </Text>
      </View>

      {/* + , - icon and Number */}
      <View style={styles.qtyContainer}>
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions} />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
          <Avatar.Icon icon={"plus"} {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  qtyContainer: {
    alignItems: "center",
    width: "20%",
    height: 80,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  qtyText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  image: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: -20,
    left: "10%",
  },
});

export default CartItem;
