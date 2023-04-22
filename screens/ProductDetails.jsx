import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  const isCarousel = useRef(null);

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

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color_s1 }}
    >
      <Header back={true} />

      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
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
});

export default ProductDetails;
