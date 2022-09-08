import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import { StatusBar } from "react-native";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import PinScreen from "../screens/PinScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ShopScreen from "../screens/ShopScreen";
import CartScreen from "../screens/CartScreen";
import IonIcon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialICons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: Platform.OS === "android" ? 70 : 100,
        },
        tabBarActiveTintColor: COLORS.ruby,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <IonIcon name="ios-home-sharp" color={color} size={size} />
                <Text style={{ color: color, fontSize: 12 }}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo name="shopping-bag" color={color} size={size} />
                <Text style={{ color: color, fontSize: 12 }}>Shop</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <IonIcon name="ios-cart" color={color} size={size} />
                <Text style={{ color: color, fontSize: 12 }}>Cart</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialICons name="account" color={color} size={size} />
                <Text style={{ color: color, fontSize: 12 }}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="home" component={TabNavigation} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="forgot" component={ForgotPasswordScreen} />
        <Stack.Screen name="pin" component={PinScreen} />
        <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
