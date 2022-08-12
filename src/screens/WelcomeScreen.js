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
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "position" : "position"}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? -100 : -250}
    >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="transparent"
        translucent={true}
      />
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
            {/* form section */}
            <View style={[styles.formSection]}>
              {/* Social buttons */}
              <SocialButton
                iconName={"facebook"}
                name="Facebook"
                color="#2AA4F4"
              />
              <SocialButton iconName={"google"} name="Google" />
              <SocialButton iconName={"apple"} name="Apple" color="black" />
              <Divider text="or" textColor={"white"} />

              {/* Email input */}
              <View style={styles.inputContainer}>
                <TextInput style={styles.emailInput} placeholder="Email" />
                <Pressable onPress={handleSignIn} style={styles.continueBtn}>
                  <Text style={styles.continueBtnText}>Continue</Text>
                </Pressable>
              </View>
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
    color: "#FB9400",
    fontFamily: "UrbanistBold",
    fontSize: 96,
  },
  formSection: {
    height: "75%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  socialBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 24,
  },
  btnTextContainer: {
    borderWidth: 1,
    justifyContent: "center",
  },
  iconContainer: {
    justifyContent: "center",
    marginRight: 24,
  },
  btnText: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 24,
  },
  emailInput: {
    backgroundColor: "#f0f0f0",
    height: 60,
    borderRadius: 10,
    paddingLeft: 24,
    marginBottom: 24,
  },
  continueBtn: {
    backgroundColor: "#FB9400",
    width: "100%",
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  continueBtnText: {
    color: "white",
    fontFamily: "UrbanistSemiBold",
  },
});

export default WelcomeScreen;
