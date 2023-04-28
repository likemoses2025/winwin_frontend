import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
} from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useIsFocused } from "@react-navigation/native";
import mime from "mime";

const Profile = ({ navigation, route }) => {
  const isFocused = useIsFocused();

  const loading = false;
  const loadingPic = false;
  const logoutHandler = () => {
    Alert.alert("Logout");
  };

  const [avatar, setAvatar] = useState(null);
  const user = {
    role: "admin",
    name: "JangBuho",
    email: "buho@naver.com",
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch update Picture Here
    }
  }, [route.params]);

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "주문":
        navigation.navigate("orders");
        break;
      case "반품":
        navigation.navigate("returns");
        break;
      case "프로필":
        navigation.navigate("updateprofile");
        break;
      case "패스워드":
        navigation.navigate("changepassword");
        break;
      case "로그아웃":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };

  return (
    <>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>프로필</Text>
        </View>

        {/* Loading */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                disabled={loadingPic}
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button
                  disabled={loadingPic}
                  loading={loadingPic}
                  textColor={colors.color1}
                >
                  사진 바꾸기
                </Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"반품"}
                  icon={"format-list-bulleted-square"}
                />

                <ButtonBox
                  handler={navigateHandler}
                  icon={"cart"}
                  text={"주문"}
                  reverse={true}
                />

                <ButtonBox
                  handler={navigateHandler}
                  text={"프로필"}
                  icon={"pencil"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"패스워드"}
                  icon={"pencil"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"로그아웃"}
                  icon={"exit-to-app"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                {user.role === "admin" && (
                  <ButtonBox
                    handler={navigateHandler}
                    text={"Admin"}
                    icon={"view-dashboard"}
                    reverse={true}
                  />
                )}
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
