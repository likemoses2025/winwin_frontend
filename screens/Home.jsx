import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.jsx";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const categories = [
    { category: "공지사항", _id: "dkfjlsd1" },
    { category: "신제품", _id: "dkf2jlsd" },
    { category: "전단행사", _id: "dkfj3lsd" },
    { category: "프로모션", _id: "dk4fjlsd" },
    { category: "서진이네", _id: "dk5jls23d" },
    { category: "기타", _id: "dk4565jlsd" },
  ];

  const products = [
    {
      price: 24500,
      name: "삼양라면(멀티)",
      _id: "dfkhdks1",
      stock: 10,
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
      images: [
        {
          url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
        },
      ],
    },
    {
      price: 45200,
      name: "쿠티크(멀티)",
      _id: "dfkhdks122",
      stock: 5,
      images: [
        {
          url: "https://res.cloudinary.com/moses23/image/upload/v1681038939/dscr5jhdy6agyveptjhy.png",
        },
      ],
    },
  ];

  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
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
          <View>
            <Text style={{ fontSize: 20 }}>윈윈(WinWin)</Text>
            <Text
              style={{
                fontSize: 25,
              }}
            >
              우리는 함께!!
            </Text>
          </View>

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
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    item._id === category ? colors.color_s5 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: item._id === category ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
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
      </View>
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
