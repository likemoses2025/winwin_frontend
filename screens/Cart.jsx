import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
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
    product: "adingdifjdl1fjdlf1ld",
    price: 49999,
    stock: 5,
    quantity: 2,
  },
  {
    name: "삼양라면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
    product: "adingdijdlfjdlfjld",
    price: 49999,
    stock: 3,
    quantity: 2,
  },
  {
    name: "불닭볶음면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    product: "adigdifjdl1fjdlf1ld",
    price: 49999,
    stock: 5,
    quantity: 2,
  },
  {
    name: "삼양라면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
    product: "dingdifjdlfjdlfjld",
    price: 49999,
    stock: 3,
    quantity: 2,
  },
  {
    name: "불닭볶음면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    product: "ngdifjdl1fjdlf1ld",
    price: 49999,
    stock: 5,
    quantity: 2,
  },
  {
    name: "삼양라면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
    product: "dijdlfjdlfjld",
    price: 49999,
    stock: 3,
    quantity: 2,
  },
  {
    name: "불닭볶음면(멀티)",
    image:
      "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    product: "jdl1fjdlf1ld",
    price: 49999,
    stock: 5,
    quantity: 2,
  },
];

const Cart = () => {
  const navigation = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increment", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("Decrement", id, qty);
  };

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
      <View style={{ paddingVertical: 20, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Box</Text>
        <Text>2,345,000원</Text>
      </View>

      {/* CheckOut Button */}
      <TouchableOpacity
        onPress={
          cartItems.length > 0
            ? () => navigation.navigate("confirmorder")
            : null
        }
      >
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
          <Text style={{ fontSize: 20 }}>주문하기</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
