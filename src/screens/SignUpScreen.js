import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import Divider from "../components/Divider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";
import * as Haptics from "expo-haptics";

const SignUpScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistLight: require("../../assets/fonts/urbanist/Urbanist-Light.ttf"),
    UrbanistExtraLight: require("../../assets/fonts/urbanist/Urbanist-ExtraLight.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavBack = () => {
    navigation.pop();
  };

  const handleVerify = () => {
    navigation.navigate("pin", { dest: "password" });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleSignIn = () => {
    navigation.navigate("login");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "position" : "height"}
      // enabled
      // keyboardVerticalOffset={Platform.OS === "ios" ? -100 : -200}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TopBar handleNavBack={handleNavBack} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Let's get you started</Text>
        </View>

        {/* form wrapper */}
        <View style={styles.formWrapper}>
          {/* email input wrapper */}
          <View style={[styles.inputWrapper]}>
            <TextInput
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
              placeholder="phone number"
              style={styles.input}
            />
          </View>

          <Pressable style={[styles.signUpBtn]} onPress={handleVerify}>
            <Text style={styles.signUpText}>Continue</Text>
          </Pressable>
        </View>
        <Divider text="or" textColor="#616161" />
        <View style={styles.socialWrapper}>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="facebook" color="#2AA4F4" size={35} />
            </View>
            <Text style={styles.btnText}>Continue with Facebook</Text>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="google" size={35} />
            </View>
            <Text style={styles.btnText}>Continue with Google</Text>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="apple" color="black" size={35} />
            </View>
            <Text style={styles.btnText}>Continue with Apple</Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 10 : 0,
    height: "100%",
    backgroundColor: "white",
  },
  titleWrapper: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: { fontFamily: "UrbanistBold", fontSize: 48 },
  formWrapper: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: Platform.OS === "android" ? 0 : 0,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "#EEEEEE",
    borderRadius: 15,
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
    flexDirection: "row",
  },
  iconWrapperInput: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    fontFamily: "UrbanistLight",
    fontSize: 18,
  },

  signUpBtn: {
    width: "100%",
    height: 58,
    backgroundColor: COLORS.ruby,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  signUpText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
    backgroundColor: COLORS.ruby,
  },
  socialWrapper: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  socialButton: {
    width: "80%",
    marginBottom: 24,
    height: 60,
    borderWidth: 2,
    borderColor: "#EEEEEE",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  btnText: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 16,
  },
  iconWrapper: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconImg: {
    width: "100%",
    height: "100%",
  },
  bottomTextWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
  },
  bottomText: {
    fontFamily: "UrbanistRegular",
    color: "gray",
    fontSize: 14,
  },
  linkText: {
    color: COLORS.ruby,
    fontFamily: "UrbanistSemiBold",
    fontSize: 14,
  },
});

export default SignUpScreen;
