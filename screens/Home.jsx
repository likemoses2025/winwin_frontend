import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles.js";
import Header from "../components/Header.js";
import { Avatar, Button } from "react-native-paper";

const Home = () => {
  const categories = [
    { category: "봉지면", _id: "dkfjlsd1" },
    { category: "용기면", _id: "dkf2jlsd" },
    { category: "스낵류", _id: "dkfj3lsd" },
    { category: "소스류", _id: "dk4fjlsd" },
    { category: "건기식", _id: "dk5jls23d" },
    { category: "기타", _id: "dk4565jlsd" },
  ];

  const [category, setCategory] = useState("");

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  return (
    <View style={defaultStyle}>
      <Header back={false} />
      {/* Heading Row */}
      <View
        style={{
          paddingTop: 70,
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
          <TouchableOpacity>
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
  );
};

export default Home;
