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
import { useMessageAndErrorUser } from "../utils/hooks";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/userAction";

const SignUp = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [team, setTeam] = useState("");
  const [channel, setChannel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [storeCode, setStoreCode] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");

  const disableBtn =
    !team ||
    !channel ||
    !email ||
    !password ||
    !userName ||
    !storeCode ||
    !storeName ||
    !storeAddress ||
    !phoneNumber;

  const submitHandler = () => {
    const myForm = new FormData();

    myForm.append("team", team);
    myForm.append("channel", channel);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("userName", userName);
    myForm.append("storeCode", storeCode);
    myForm.append("storeName", storeName);
    myForm.append("storeAddress", storeAddress);
    myForm.append("phoneNumber", phoneNumber);

    if (avatar !== "") {
      myForm.append("file", {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split("/").pop(),
      });
    }

    dispatch(register(myForm));
  };

  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  useEffect(() => {
    if (route.params?.image) setAvatar(route.params.image);
  }, [route.params]);

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
              <Button textColor={colors.color1}>사진 등록하기</Button>
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
              placeholder="SAP 점포코드"
              value={storeCode}
              onChangeText={setStoreCode}
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
