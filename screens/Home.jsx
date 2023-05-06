import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import Strategy from "../components/Notice/Strategy.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SearchModal from "../components/SearchModal.jsx";
import { getNewProducts } from "../redux/actions/productAction.js";
import { colors, defaultStyle } from "../styles/styles.js";

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
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { products } = useSelector((state) => state.product);

  const [announcement, setAnnouncement] = useState("anm1");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    dispatch(getNewProducts());
    console.log("I am Refresh Control");

    setRefreshing(false);
  };

  const announcementButtonHandler = (id) => {
    setAnnouncement(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to Cart", id);
  };

  useEffect(() => {
    dispatch(getNewProducts());
    console.log("isFocused Action");
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
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
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
