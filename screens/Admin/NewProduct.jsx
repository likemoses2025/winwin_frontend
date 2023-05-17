import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import mime from "mime";
import { useDispatch } from "react-redux";
import { useMessageAndErrorOther, useSetCategories } from "../../utils/hooks";
import { createProduct } from "../../redux/actions/otherAction";

const NewProduct = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [no, setNo] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [newproduct] = useState(false);
  const [category, setCategory] = useState("제품유형 선택");
  const [categories, setCategories] = useState([]);

  useSetCategories(setCategories, isFocused);

  const disableBtnCondition =
    !no || !name || !code || !price || !image || !category;

  const submitHandler = () => {
    const myForm = new FormData();
    myForm.append("no", no);
    myForm.append("name", name);
    myForm.append("code", code);
    myForm.append("price", price);
    myForm.append("newproduct", newproduct);
    myForm.append("category", category);

    myForm.append("file", {
      uri: image,
      type: mime.getType(image),
      name: image.split("/").pop(),
    });

    dispatch(createProduct(myForm));
  };

  const loading = useMessageAndErrorOther(
    dispatch,
    navigation,
    "adminpanel",
    null
  );

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />

        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>신규제품 등록하기</Text>
        </View>

        <ScrollView
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 650,
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                alignSelf: "center",
                marginBottom: 20,
              }}
            >
              <Avatar.Image
                size={80}
                style={{
                  backgroundColor: colors.color1,
                }}
                source={{
                  uri: image ? image : null,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { newProduct: true })
                }
              >
                <Avatar.Icon
                  icon={"camera"}
                  size={30}
                  color={colors.color3}
                  style={{
                    backgroundColor: colors.color2,
                    position: "absolute",
                    bottom: 0,
                    right: -5,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* Input Field */}
            <TextInput
              {...inputOptions}
              placeholder="번호"
              keyboardType="number-pad"
              value={no}
              onChangeText={setNo}
            />
            <TextInput
              {...inputOptions}
              placeholder="제품명"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="SapCode"
              keyboardType="number-pad"
              value={code}
              onChangeText={setCode}
            />

            <TextInput
              {...inputOptions}
              placeholder="가격"
              keyboardType="number-pad"
              value={price}
              onChangeText={setPrice}
            />

            <Text
              style={{
                ...inputStyling,
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 3,
              }}
              onPress={() => setVisible(true)}
            >
              {category}
            </Text>

            <Button
              textColor={colors.color2}
              style={{
                backgroundColor: colors.color1,
                margin: 20,
                padding: 6,
              }}
              onPress={submitHandler}
              loading={loading}
              disabled={disableBtnCondition || loading}
            >
              등록하기
            </Button>
          </View>
        </ScrollView>
      </View>

      <SelectComponent
        categories={categories}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default NewProduct;
