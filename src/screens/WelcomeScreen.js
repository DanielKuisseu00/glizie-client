import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Pressable,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import Divider from "../components/Divider";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavBack = () => {
    navigation.pop();
  };

  const handleNavSignup = () => {
    navigation.navigate("fillProfile");
  };

  const handleSignIn = () => {
    navigation.navigate("login");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView>
        {/* background image component */}
        <ImageBackground
          source={require("../../assets/images/pink.jpg")}
          style={styles.backgroundContainer}
        >
          {/* dark overlay */}
          <View style={styles.darkOverlay}>
            {/* title section */}
            <View style={styles.titleWrapper}>
              <Text style={styles.subtitle}>Welcome to ✋</Text>
              <Text style={styles.title}>Glizie</Text>
            </View>
            {/* form section */}
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  backgroundContainer: {
    height: "100%",
    width: "100%",
  },
  darkOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  titleWrapper: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    height: 200,
  },
  subtitle: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 48,
  },
  title: {
    color: "#FB9400",
    fontFamily: "UrbanistBold",
    fontSize: 96,
  },
  subText: {
    color: "white",
    fontFamily: "UrbanistRegular",
    fontSize: 15,
  },
});

export default WelcomeScreen;
