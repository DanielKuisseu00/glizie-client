import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import PinScreen from "../screens/PinScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import SetupScreen from "../screens/SetupScreen";
import PasswordScreen from "../screens/PassowrdScreen";
import DetailScreen from "../screens/DetailScreen";
import StylistScreen from "../screens/StylistScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="stylist" component={StylistScreen} />
    </Stack.Navigator>
  );
};

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="onboardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="onboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="forgot" component={ForgotPasswordScreen} />
      <Stack.Screen name="pin" component={PinScreen} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="setup" component={SetupScreen} />
      <Stack.Screen name="detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
