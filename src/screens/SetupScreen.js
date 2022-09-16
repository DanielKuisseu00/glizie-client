import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../data/colors";
import * as Haptics from "expo-haptics";

const SetupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

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

  const handleForgot = () => {
    navigation.navigate("forgot");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar handleNavBack={handleNavBack} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Enter Password</Text>
      </View>

      {/* form wrapper */}
      <View style={styles.formWrapper}>
        {/* email input wrapper */}
        <View style={[styles.inputWrapper]}>
          <View style={styles.iconWrapperInput}>
            <Icon name="lock" size={20} color="#9E9E9E" />
          </View>
          <TextInput
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="password"
            style={styles.input}
          />
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
          <Text style={styles.signUpText}>Continue</Text>
        </Pressable>
      </View>

      <View style={styles.bottomTextWrapper}>
        <Text style={styles.bottomText}>Can't remeber Password? </Text>
        <Pressable onPress={handleForgot}>
          <Text style={styles.linkText}>Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 35 : 0,
    height: "100%",
    backgroundColor: "white",
  },
  titleWrapper: {
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  title: { fontFamily: "UrbanistBold", fontSize: 25 },
  formWrapper: {
    paddingHorizontal: 24,
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
    borderRadius: 10,
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

export default SetupScreen;
