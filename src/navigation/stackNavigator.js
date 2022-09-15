import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { StatusBar } from "react-native";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import PinScreen from "../screens/PinScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName="welcome"
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
