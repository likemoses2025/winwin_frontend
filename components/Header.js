import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Header = ({ back, emptyCart = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => {
    console.log("Empty Cart");
  };

  return (
    <>
      {back && (
        <TouchableOpacity
          style={{ position: "absolute", left: 20, top: 40, zIndex: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Avatar.Icon
            icon={"arrow-left"}
            color={
              route.name === "productDetails" ? colors.color2 : colors.color3
            }
            style={{ backgroundColor: colors.color4 }}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={{ position: "absolute", right: 20, top: 40, zIndex: 10 }}
        onPress={
          emptyCart ? emptyCartHandler : () => navigation.navigate("cart")
        }
      >
        <Avatar.Icon
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={
            route.name === "productDetails" ? colors.color2 : colors.color3
          }
          style={{ backgroundColor: colors.color4 }}
        />
      </TouchableOpacity>
    </>
  );
};

export default Header;
