import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userAction";
import { useMessageAndErrorUser } from "../utils/hooks";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useMessageAndErrorUser(navigation, dispatch, "profile");

  const submitHandler = () => {
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <View
        style={{
          ...defaultStyle,
          paddingBottom: 150,
          backgroundColor: colors.color2,
        }}
      >
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>로그인 하기</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="이메일"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            placeholder="패스워드"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>패스워드를 잊으셨나요?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            로그인
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
