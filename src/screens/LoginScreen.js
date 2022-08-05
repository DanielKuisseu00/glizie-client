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
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = ({ navigation }) => {
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
    navigation.navigate("fillProfile");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <TopBar handleNavBack={handleNavBack} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Lets get you logged in</Text>
        </View>

        {/* form wrapper */}
        <View style={styles.formWrapper}>
          {/* email input wrapper */}
          <View
            style={[
              styles.inputWrapper,
              emailIsFocused && {
                borderWidth: 2,
                borderColor: "#E9A33F",
                backgroundColor: "rgba(251, 148, 0, 0.1)",
              },
            ]}
          >
            <View style={styles.iconWrapperInput}>
              <Icon
                name="mail"
                size={20}
                color={emailIsFocused ? "#FB9400" : "#9E9E9E"}
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
                borderColor: "#E9A33F",
                backgroundColor: "rgba(251, 148, 0, 0.1)",
              },
            ]}
          >
            <View style={styles.iconWrapperInput}>
              <Icon
                name="lock-closed"
                size={20}
                color={passwordIsFocused ? "#FB9400" : "#9E9E9E"}
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
                color={passwordIsFocused ? "#FB9400" : "#9E9E9E"}
              />
            </View>
          </View>
          <View style={styles.rememberWrapper}>
            <BouncyCheckbox
              size={25}
              fillColor="#FB9400"
              unfillColor="white"
              iconStyle={{ borderColor: "#FB9400" }}
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>
          <Pressable
            style={[
              styles.signUpBtn,
              passwordIsSet && emailIsSet
                ? { backgroundColor: "#FB9400" }
                : null,
            ]}
            onPress={handleSignup}
          >
            <Text style={styles.signUpText}>Sign in</Text>
          </Pressable>
        </View>
        <Divider text="or continue with" textColor="#616161" />
        <View style={styles.socialWrapper}>
          <View style={styles.socialButton}>
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: "#2AA4F4", borderRadius: 100 },
              ]}
            >
              <Image
                source={require("../../assets/images/facebook.png")}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Image
                source={require("../../assets/images/google.png")}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          </View>
          <View style={styles.socialButton}>
            <View style={styles.iconWrapper}>
              <Image
                source={require("../../assets/images/apple.png")}
                resizeMode="contain"
                style={styles.iconImg}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Dont have an account yet? </Text>
          <Pressable onPress={handleSignup}>
            <Text style={styles.linkText}>Sign up</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "white",
  },
  titleWrapper: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: { fontFamily: "UrbanistBold", fontSize: 48 },
  formWrapper: {
    paddingHorizontal: 24,
    marginVertical: 24,
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
    backgroundColor: "#E9A33F",
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
    marginTop: 24,
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
    width: 24,
    height: 24,
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
    color: "#FB9400",
    fontFamily: "UrbanistSemiBold",
    fontSize: 14,
  },
});

export default LoginScreen;
