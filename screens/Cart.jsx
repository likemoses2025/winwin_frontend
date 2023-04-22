import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";

const cartItems = [
  {
    name: "삼양라면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
    product: "adingdifjdlfjdlfjld",
    price: 49999,
    stock: 3,
    quantity: 2,
  },
  {
    name: "불닭볶음면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    product: "adingdifjdl1fjdlfjld",
    price: 49999,
    stock: 5,
    quantity: 2,
  },
];

const Cart = () => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      {/* Cart Item */}
      <View style={{ paddingVertical: 20, flex: 1, backgroundColor: "gray" }}>
        <ScrollView></ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>5원</Text>
      </View>
      <TouchableOpacity>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
