import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import FillProfileScreen from "../screens/FillProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="fillProfile" component={FillProfileScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
