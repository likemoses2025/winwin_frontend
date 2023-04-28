import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
  defaultImg,
} from "../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import mime from "mime";

const SignUp = ({ navigation, route }) => {
  const [team, setTeam] = useState("");
  const [channel, setChannel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [sapCode, setSapCode] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  const disableBtn =
    !team ||
    !channel ||
    !email ||
    !password ||
    !userName ||
    !sapCode ||
    !storeName ||
    !storeAddress ||
    !phoneNumber;

  const submitHandler = () => {
    Alert.alert("Submit");
    navigation.navigate("verify");
  };

  const loading = true;

  return (
    <>
      <View style={{ ...defaultStyle, paddingBottom: 110 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>회원가입</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ minHeight: 900 }}>
            <Avatar.Image
              style={{
                alignSelf: "center",
                backgroundColor: colors.color1,
              }}
              size={80}
              source={{
                uri: avatar ? avatar : defaultImg,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>사진바꾸기</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="팀명"
              value={team}
              onChangeText={setTeam}
            />
            <TextInput
              {...inputOptions}
              placeholder="채널"
              value={channel}
              onChangeText={setChannel}
            />

            <TextInput
              {...inputOptions}
              placeholder="이메일"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              {...inputOptions}
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              {...inputOptions}
              placeholder="점주명"
              value={userName}
              onChangeText={setUserName}
            />
            <TextInput
              {...inputOptions}
              placeholder="SapCode"
              value={sapCode}
              onChangeText={setSapCode}
            />
            <TextInput
              {...inputOptions}
              placeholder="점포명"
              value={storeName}
              onChangeText={setStoreName}
            />

            <TextInput
              {...inputOptions}
              placeholder="창고주소"
              value={storeAddress}
              onChangeText={setStoreAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="핸드폰번호"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />

            <Button
              loading={loading}
              textColor={colors.color2}
              disabled={disableBtn}
              style={styles.btn}
              onPress={submitHandler}
            >
              회원가입
            </Button>

            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>로그인하기</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
