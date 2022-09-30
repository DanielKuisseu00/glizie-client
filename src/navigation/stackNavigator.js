import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { TabNavigation } from "./TabNavigation";
import { OnboardingStack } from "./stacks";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="onboarding" component={OnboardingStack} />
        <Stack.Screen name="home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
