import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.jsx";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal.jsx";

const Home = () => {
  const categories = [
    { category: "봉지면", _id: "dkfjlsd1" },
    { category: "용기면", _id: "dkf2jlsd" },
    { category: "스낵류", _id: "dkfj3lsd" },
    { category: "소스류", _id: "dk4fjlsd" },
    { category: "건기식", _id: "dk5jls23d" },
    { category: "기타", _id: "dk4565jlsd" },
  ];

  const products = [
    {
      price: 24500,
      name: "삼양라면(멀티)",
      _id: "dfkhdks1",
      images: [
        {
          url: "https://pixabay.com/get/ga4f26d50cd363b258293560a398b929796d1728f947bf64ddb7ebd26dad9a0c2f5b7b248ce064096a9fb45415b87a2d1db2b1539d36d90a88a07864c0b2f76ae_1920.jpg",
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
            <Text style={{ fontSize: 25 }}>New!!</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
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
                    fontSize: 12,
                    fontWeight: "800",
                    color: item._id === category ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default Home;
