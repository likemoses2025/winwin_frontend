import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import { login } from "../redux/actions/userAction";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
} from "../styles/styles";
import { useMessageAndErrorUser } from "../utils/hooks";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submitHandler = () => {
    dispatch(login(email, password));
  };

  const loading = useMessageAndErrorUser(dispatch, navigation, "profile");

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            keyboardType="email-address"
            {...inputOptions}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.forget}>Forget Password?</Text>
          </TouchableOpacity>

          <Button
            textColor={colors.color2}
            disabled={email === "" || password === ""}
            style={formStyles.btn}
            onPress={submitHandler}
            loading={loading}
          >
            Log In
          </Button>
          <Text style={formStyles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={formStyles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
