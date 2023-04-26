import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.jsx";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer.jsx";
import Heading from "../components/Heading.jsx";
import Strategy from "../components/Notice/Strategy.jsx";

export const products = [
  {
    price: 24500,
    name: "삼양라면(멀티)",
    _id: "dfkhdks1",
    stock: 10,
    category: "봉지면",
    images: [
      {
        url: "https://res.cloudinary.com/moses23/image/upload/v1681037643/dyyhx82ruo0gueoefrgp.png",
      },
    ],
  },
  {
    price: 45200,
    name: "쿠티크(멀티)",
    _id: "dfkhdks12",
    stock: 5,
    category: "용기면",
    images: [
      {
        url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
      },
    ],
  },
  {
    price: 45200,
    name: "쿠티크(멀티)",
    _id: "dfkhdks1222",
    stock: 5,
    category: "스낵면",
    images: [
      {
        url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
      },
    ],
  },
  {
    price: 45200,
    name: "쿠티크(멀티)",
    _id: "dfkhdks1422",
    stock: 5,
    category: "스낵면",
    images: [
      {
        url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
      },
    ],
  },
  {
    price: 45200,
    name: "쿠티크(멀티)",
    _id: "dfkhdks1252",
    stock: 5,
    category: "스낵면",
    images: [
      {
        url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
      },
    ],
  },
];

export const categories = [
  { category: "봉지면", _id: "dkfjlsd1" },
  { category: "용기면", _id: "dkf2jlsd" },
  { category: "스낵류", _id: "dkfj3lsd" },
  { category: "소스류", _id: "dk4fjlsd" },
  { category: "건기식", _id: "dk5jls23d" },
  { category: "기타", _id: "dk4565jlsd" },
];

const announcements = [
  { announcement: "신제품", _id: "anm1" },
  { announcement: "4월전략", _id: "anm2" },
  { announcement: "전단행사", _id: "anm3" },
  { announcement: "프로모션", _id: "anm4" },
  { announcement: "서진이네", _id: "anm5" },
  { announcement: "기타", _id: "anm6" },
];

const Home = () => {
  const [announcement, setAnnouncement] = useState("anm1");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const announcementButtonHandler = (id) => {
    setAnnouncement(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to Cart", id);
  };

  const navigation = useNavigation();

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header back={false} />
        {/* Heading Row */}
        <View
          style={{
            marginTop: 20,
            paddingTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading text1="윈윈(winwin)" text2="우리는 함께!!" />

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Category */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {announcements.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    item._id === announcement ? colors.color_s5 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => announcementButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: item._id === announcement ? colors.color2 : "gray",
                  }}
                >
                  {item.announcement}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* New Product */}
        {announcement === "anm1" && (
          <View style={{ flex: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((item, index) => (
                <ProductCard
                  key={item._id}
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]?.url}
                  addToCartHandler={addToCartHandler}
                  id={item._id}
                  i={index}
                  navigation={navigation}
                />
              ))}
            </ScrollView>
          </View>
        )}
        {/* New Product */}
        {announcement === "anm2" && (
          <View style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Strategy />
            </ScrollView>
          </View>
        )}
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
