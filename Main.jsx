import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import Toast from "react-native-toast-message";
import AdminOrders from "./screens/Admin/AdminOrders";
import AdminPanel from "./screens/Admin/AdminPanel";
import Categories from "./screens/Admin/Categories";
import NewProduct from "./screens/Admin/NewProduct";
import ProductImages from "./screens/Admin/ProductImages";
import UpdateProduct from "./screens/Admin/UpdateProduct";
import Camera from "./screens/Camera";
import Cart from "./screens/Cart";
import ChangePassword from "./screens/ChangePassword";
import ConfirmOrder from "./screens/ConfirmOrder";
import ForgetPassword from "./screens/ForgetPassword";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Orders from "./screens/Orders";
import Payment from "./screens/Payment";
import ProductDetails from "./screens/ProductDetails";
import Profile from "./screens/Profile";
import Returns from "./screens/Returns";
import SignUp from "./screens/SignUp";
import UpdateProfile from "./screens/UpdateProfile";
import Verify from "./screens/Verify";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import OrderCreate from "./screens/OrderCreate";

const Stack = createNativeStackNavigator();

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="productdetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="confirmorder"
            component={ConfirmOrder}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="payment"
            component={Payment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgetpassword"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="verify"
            component={Verify}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="camera"
            component={Camera}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="orders"
            component={Orders}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="changepassword"
            component={ChangePassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="updateprofile"
            component={UpdateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="returns"
            component={Returns}
            options={{ headerShown: false }}
          />
          {/* Admin */}
          <Stack.Screen
            name="adminpanel"
            component={AdminPanel}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="adminorders"
            component={AdminOrders}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="categories"
            component={Categories}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="newproduct"
            component={NewProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="productimages"
            component={ProductImages}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="updateproduct"
            component={UpdateProduct}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ordercreate"
            component={OrderCreate}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
  );
};

export default Main;
