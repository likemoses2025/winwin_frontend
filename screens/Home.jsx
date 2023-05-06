import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.jsx";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer.jsx";
import Heading from "../components/Heading.jsx";
import Strategy from "../components/Notice/Strategy.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction.js";
import { useSetCategories } from "../utils/hooks.js";

export const categories = [
  { category: "봉지면", _id: "dkfjlsd1" },
  { category: "용기면", _id: "dkf2jlsd" },
  { category: "스낵류", _id: "dkfj3lsd" },
  { category: "소스류", _id: "dk4fjlsd" },
  { category: "건기식", _id: "dk5jls23d" },
  { category: "기타", _id: "dk4565jlsd" },
  { category: "신제품", _id: "dk4565jl2sd" },
];

const announcements = [
  { announcement: "신제품", _id: "anm1" },
  { announcement: "행사전략", _id: "anm2" },
  { announcement: "공지사항", _id: "anm3" },
  { announcement: "긴급공지", _id: "anm4" },
  { announcement: "서진이네", _id: "anm5" },
  { announcement: "기타", _id: "anm6" },
];

const Home = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { products } = useSelector((state) => state.product);

  const [announcement, setAnnouncement] = useState("anm1");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const announcementButtonHandler = (id) => {
    setAnnouncement(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to Cart", id);
  };

  const navigation = useNavigation();

  useSetCategories(setCategories, isFocused);

  console.log("카테고리", categories);

  useEffect(() => {
    dispatch(getAllProducts(searchQuery, category));
    console.log("Action");
  }, [dispatch]);

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
          <View style={{ flex: 1, marginBottom: 100 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
