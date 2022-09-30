import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import TopBar from "../components/TopBar";
import { COLORS } from "../data/colors";
import * as Haptics from "expo-haptics";

const PinScreen = ({ navigation, route }) => {
  const dest = route.params.dest;
  const textInputRef = useRef(null);
  const [code, setCode] = useState("");
  const [pinReady, setPinReady] = useState(false);
  const [inputConainerIsFocused, setInputContainerIsFocused] = useState(false);
  const maxLength = 4;
  const codeDigitsArray = new Array(maxLength).fill(0);
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavBack = () => {
    navigation.goBack();
  };

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;
    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <View
        style={[
          styles.OTPInput,
          {
            borderColor: isDigitFocused ? COLORS.ruby : "#EEEEEE",
            // backgroundColor: isDigitFocused ? COLORS.lightRuby : "#FAFAFA",
          },
        ]}
        key={index}
      >
        <Text style={styles.OTPInputText}>{digit}</Text>
      </View>
    );
  };

  const handlePress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleBlur = () => {
    setInputContainerIsFocused(false);
  };

  const handleVerify = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate(dest);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      // behavior={Platform.OS === "ios" ? "position" : "height"}
      // enabled
      // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -50}
    >
      <SafeAreaView style={styles.container}>
        <TopBar handleNavBack={handleNavBack} topBarText="Verify" />
        <View style={styles.OTPInputSection}>
          <View style={styles.topSection}>
            <Text style={styles.titleText}>Enter Your Verification Code</Text>
            <Text style={styles.subText}>We sent a verification code to:</Text>
            <Text style={styles.phoneNumber}>+1 (786) 267 1234</Text>
          </View>
          <Pressable onPress={handlePress} style={styles.OTPInputContainer}>
            {codeDigitsArray.map(toCodeDigitInput)}
          </Pressable>
          <TextInput
            style={styles.hiddenTextInoput}
            value={code}
            onChangeText={setCode}
            maxLength={maxLength}
            returnKeyType="done"
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            onBlur={handleBlur}
            ref={textInputRef}
          />
        </View>
        <View style={styles.btnWrapper}>
          <Pressable onPress={handleVerify} style={styles.btn}>
            <Text style={styles.btnText}>Verify</Text>
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
  topSection: {
    flex: 0.25,
    width: "100%",
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginBottom: 24,
  },
  subText: {
    color: "#9E9E9E",
    fontSize: 16,
    marginBottom: 7,
    fontFamily: "UrbanistMedium",
  },
  phoneNumber: {
    color: "#9E9E9E",
    fontSize: 18,
  },
  OTPInputSection: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 30,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: "white",
  },
  hiddenTextInoput: {
    borderColor: "teal",
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
    marginTop: 15,
    width: 300,
    opacity: 0,
    height: 0,
  },
  OTPInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  OTPInput: {
    borderWidth: 1,
    minWidth: "15%",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 78,
    height: 61,
  },
  OTPInputText: {
    fontSize: 24,
    fontFamily: "UrbanistBold",
  },
  btnWrapper: {
    width: "100%",
    paddingHorizontal: 24,
    marginBottom: 50,
  },
  btn: {
    width: "100%",
    height: 58,
    backgroundColor: COLORS.ruby,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
});

export default PinScreen;
