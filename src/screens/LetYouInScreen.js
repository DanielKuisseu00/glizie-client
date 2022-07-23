import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import LongButton from "../components/LongButton";
import Divider from "../components/Divider";
import TopBar from "../components/TopBar";

const LetYouInScreen = ({ navigation }) => {
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
    navigation.navigate("register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        {/* Top bar section with the icon wrapper and icon inside of it */}
        <TopBar handleNavBack={handleNavBack} />
        {/* Hero image section wiht the image inside of it */}
        <View style={styles.imageSection}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/signup2.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* Bottomn section with the lis of login buttons in it */}
      <View style={styles.bottom}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Lets get you signed in!</Text>
        </View>
        {/* Button wrapper holds all the buttons inside of it */}
        <View style={styles.btnWrapper}>
          <LongButton
            btnText={"continue with facebook"}
            iconBackground="#2AA4F4"
            iconImage={require("../../assets/images/facebook.png")}
          />
          <LongButton
            btnText={"continue with google"}
            iconBackground="white"
            iconImage={require("../../assets/images/google.png")}
          />
          <LongButton
            btnText={"continue with apple"}
            iconBackground="white"
            iconImage={require("../../assets/images/apple.png")}
          />

          <Divider />

          <Pressable style={styles.signBtn}>
            <Text style={styles.signInText}>Sign in with password</Text>
          </Pressable>
        </View>
        {/* Bottom wrapper holds the link to signup screen */}
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Don't have an account? </Text>
          <Pressable onPress={handleNavSignup}>
            <Text style={styles.linkText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  top: {
    maxHeight: "15%",
    paddingHorizontal: 24,
    marginBottom: 60,
  },
  topBar: {
    height: "20%",
    width: "100%",
    marginVertical: 24,
    justifyContent: "center",
  },
  backIconWrapper: {
    width: 28,
    height: 28,
  },
  imageSection: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    height: 220,
    width: 220,
  },
  bottom: {
    maxHeight: "85%",
    paddingHorizontal: 24,
  },
  titleWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontFamily: "UrbanistBold",
    fontSize: 48,
  },
  btnWrapper: {
    width: "100%",
  },
  signBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "#FB9400",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginVertical: 10,
  },
  signInText: {
    color: "white",
    fontFamily: "UrbanistSemiBold",
    fontSize: 16,
  },
  bottomTextWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    flexDirection: "row",
  },
  bottomText: {
    fontFamily: "UrbanistRegular",
    color: "gray",
    fontSize: 14,
  },
  linkText: {
    color: "#FB9400",
    fontFamily: "UrbanistSemiBold",
    fontSize: 14,
  },
});

export default LetYouInScreen;
