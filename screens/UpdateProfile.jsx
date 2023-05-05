import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { useMessageAndErrorOther } from "../utils/hooks";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/otherAction";

const UpdateProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [team, setTeam] = useState(user?.team);
  const [channel, setChannel] = useState(user?.channel);
  const [email, setEmail] = useState(user?.email);
  const [userName, setUserName] = useState(user?.userName);
  const [sapCode, setSapCode] = useState(user?.sapCode);
  const [storeName, setStoreName] = useState(user?.storeName);
  const [storeAddress, setStoreAddress] = useState(user?.storeAddress);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  const loading = useMessageAndErrorOther(dispatch, navigation, "profile");

  const submitHandler = () => {
    dispatch(
      updateProfile(
        team,
        channel,
        email,
        userName,
        sapCode,
        storeName,
        storeAddress,
        phoneNumber
      )
    );
  };
  return (
    <View style={defaultStyle}>
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>프로필 수정하기</Text>
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
        <View>
          <TextInput
            {...inputOptions}
            placeholder="팀명"
            value={team}
            onChangeText={setTeam}
          />
          <TextInput
            {...inputOptions}
            placeholder="채널명"
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
            placeholder="점주명"
            value={userName}
            onChangeText={setUserName}
          />

          <TextInput
            {...inputOptions}
            placeholder="점포명"
            value={storeName}
            onChangeText={setStoreName}
          />
          <TextInput
            {...inputOptions}
            placeholder="SapCode"
            value={sapCode}
            onChangeText={setSapCode}
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
            style={styles.btn}
            onPress={submitHandler}
          >
            변경하기
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
