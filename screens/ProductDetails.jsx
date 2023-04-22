import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route: { params } }) => {
  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const name = "4과비빔면(멀티)";
  const stock = 5;
  const price = 34520;
  const description =
    "사과, 매실, 배, 파인애플 4가지 과일로 상큼함을 더한 4과비빔면과일의 새콤달콤한 맛으로 여름철 잃어버린 입맛을 찾아보세요!";

  const images = [
    {
      id: "dklfjdlsf1",
      url: "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
    },
    {
      id: "dklfjdlsf2",
      url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    },
    {
      id: "dklfjdlsf3",
      url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
    },
  ];

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };
  const incrementQty = () => {
    if (quantity >= stock) return;
    setQuantity((prev) => prev + 1);
  };
  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of Stock",
      });
    Toast.show({
      type: "success",
      text1: "Order successfully added",
    });
  };

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color_s1 }}
    >
      <Header back={true} />

      {/* Carousel */}
      <View style={{ marginTop: Platform.OS === "ios" ? 30 : 1 }}>
        <Carousel
          layout="stack"
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />
      </View>
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          borderTopRightRadius: 55,
          borderTopLeftRadius: 55,
        }}
      >
        <Text style={{ fontSize: 25 }} numberOfLines={2}>
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "900" }} numberOfLines={2}>
          {price}원
        </Text>
        <Text
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
          numberOfLines={8}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCartHandler}>
          <Button icon={"cart"} style={styles.btn} textColor={colors.color2}>
            Add to Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => (
  <View style={styles.container} key={index}>
    <Image source={{ uri: item.url }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color_s1,
    width: ITEM_WIDTH,
    paddingVertical: 60,
    height: 380,
  },
  image: { width: ITEM_WIDTH, resizeMode: "contain", height: 250 },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
