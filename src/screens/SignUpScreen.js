import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Divider from "../components/Divider";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";
import * as Haptics from "expo-haptics";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  const [emailIsSet, setEmailIsSet] = useState(false);
  const [passwordIsSet, setPasswordIsSet] = useState(false);

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

  const handleSignup = () => {
    navigation.navigate("home");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleSignIn = () => {
    navigation.navigate("login");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleLostPassword = () => {
    navigation.navigate("forgot");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "height"}
      enabled
      keyboardVerticalOffset={Platform.OS === "ios" ? -100 : -200}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TopBar handleNavBack={handleNavBack} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Let's get you started ❤️</Text>
        </View>

        {/* form wrapper */}
        <View style={styles.formWrapper}>
          {/* email input wrapper */}
          <View
            style={[
              styles.inputWrapper,
              emailIsFocused && {
                borderWidth: 2,
                borderColor: COLORS.ruby,
                backgroundColor: "rgba(252, 3, 40, 0.1)",
              },
            ]}
          >
            <View style={styles.iconWrapperInput}>
              <Icon
                name="mail"
                size={20}
                color={emailIsFocused ? COLORS.ruby : "#9E9E9E"}
              />
            </View>
            <TextInput
              keyboardType="email-address"
              onEndEditing={() => setEmailIsFocused(false)}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailIsSet(true);
              }}
              placeholder="email"
              style={styles.input}
              onFocus={() => setEmailIsFocused(true)}
            />
          </View>

          {/* password input wrapper */}
          <View
            style={[
              styles.inputWrapper,
              passwordIsFocused && {
                borderWidth: 2,
                borderColor: COLORS.ruby,
                backgroundColor: "rgba(252, 3, 40, 0.1)",
              },
            ]}
          >
            <View style={styles.iconWrapperInput}>
              <Icon
                name="lock"
                size={20}
                color={passwordIsFocused ? COLORS.ruby : "#9E9E9E"}
              />
            </View>
            <TextInput
              placeholder="password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setPasswordIsSet(true);
              }}
              style={[styles.input]}
              onEndEditing={() => setPasswordIsFocused(false)}
              secureTextEntry={true}
              onFocus={() => setPasswordIsFocused(true)}
            />
            <View style={styles.iconWrapperInput}>
              <Icon
                name="eye"
                size={20}
                color={passwordIsFocused ? COLORS.ruby : "#9E9E9E"}
              />
            </View>
          </View>
          <View style={styles.rememberWrapper}>
            <BouncyCheckbox
              size={25}
              fillColor={COLORS.ruby}
              unfillColor="white"
              iconStyle={{ borderColor: COLORS.ruby }}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <Pressable
            style={[
              styles.signUpBtn,
              passwordIsSet && emailIsSet
                ? { backgroundColor: COLORS.ruby }
                : null,
            ]}
            onPress={handleSignup}
          >
            <Text style={styles.signUpText}>Sign up</Text>
          </Pressable>
        </View>
        <Divider text="or continue with" textColor="#616161" />
        <View style={styles.socialWrapper}>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="facebook" color="#2AA4F4" size={35} />
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="google" size={35} />
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Icon name="apple" color="black" size={35} />
            </View>
          </View>
        </View>
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Already have an account? </Text>
          <Pressable onPress={handleSignIn}>
            <Text style={styles.linkText}>Sign in</Text>
          </Pressable>
        </View>
        <View style={styles.bottomTextWrapper}>
          <Pressable onPress={handleLostPassword}>
            <Text style={styles.linkText}>Forgot Password</Text>
          </Pressable>
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
    marginBottom: Platform.OS === "android" ? 60 : 24,
    height: "30%",
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
    fontFamily: "UrbanistSemiBold",
    fontSize: 14,
  },
  rememberWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rememberText: {
    fontFamily: "UrbanistSemiBold",
    fontSize: 14,
  },
  signUpBtn: {
    width: "100%",
    height: 58,
    backgroundColor: COLORS.ruby,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    borderRadius: 30,
  },
  signUpText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
  socialWrapper: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  socialButton: {
    width: 88,
    height: 60,
    borderWidth: 2,
    borderColor: "#EEEEEE",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
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
