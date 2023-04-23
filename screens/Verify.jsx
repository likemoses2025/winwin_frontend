import { View, Text, TouchableOpacity, Alert } from "react-native";
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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const loading = true;

  const submitHandler = () => {
    Alert.alert("Submit!");
  };
  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>패스워드 바꾸기</Text>
        </View>

        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            secureTextEntry={true}
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />

          <TextInput
            {...inputOptions}
            placeholder="새로운 패스워드"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={otp === "" || password === ""}
            style={styles.btn}
            onPress={submitHandler}
          >
            Reset
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.link}>OTP 다시 전송하기</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
