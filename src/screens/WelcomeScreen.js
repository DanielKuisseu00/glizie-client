import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import Divider from "../components/Divider";
import SocialButton from "../components/SocialButton";
import Animated, { BounceIn, useAnimatedStyle } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { COLORS } from "../data/colors";

const WelcomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleSignIn = () => {
    navigation.navigate("login");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleRegister = () => {
    navigation.navigate("signUp");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleNavHome = () => {
    navigation.navigate("home");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "position" : "position"}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? -100 : -250}
    >
      <StatusBar barStyle={"dark-content"} />
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
              <Text style={styles.title}>Grizlie</Text>
            </View>
            {/* ACTION SECTION */}
            <View style={styles.actionContainer}>
              {/* BUTTON CONTAINER */}
              <View style={styles.btnConatiner}>
                <Pressable
                  onPress={handleRegister}
                  style={[styles.btn, { backgroundColor: "#fc0328" }]}
                >
                  <Text style={styles.btnText}>Sign up</Text>
                </Pressable>
                <Pressable
                  onPress={handleSignIn}
                  // rgba(219, 219, 219, 0.8)
                  style={[
                    styles.btn,
                    {
                      backgroundColor: "white",
                    },
                  ]}
                >
                  <Text style={[styles.btnText, { color: COLORS.ruby }]}>
                    Log in
                  </Text>
                </Pressable>
              </View>
              <Pressable
                onPress={handleNavHome}
                style={styles.skipBtnContainer}
              >
                <Text style={styles.skipText}>Skip and Start Browsing</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    height: "105%",
    justifyContent: "space-between",
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  backgroundContainer: {
    height: "100%",
    width: "100%",
  },
  darkOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
  },
  titleWrapper: {
    width: "100%",
    height: "25%",
    paddingLeft: 24,
    paddingTop: 24,
  },
  subtitle: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 48,
  },
  title: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 96,
  },
  actionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 130,
  },
  btnConatiner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    width: "45%",
    height: 70,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  btnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 18,
  },
  skipBtnContainer: {
    marginTop: 40,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  skipText: {
    color: "black",
    fontFamily: "UrbanistBold",
    fontSize: 13,
  },
});

export default WelcomeScreen;
