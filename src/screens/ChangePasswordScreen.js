import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../data/colors";
import * as Haptics from "expo-haptics";

export default function ChangePasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
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
    navigation.pop();
  };

  const handleReset = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("home");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TopBar handleNavBack={handleNavBack} />
        <View style={styles.top}>
          <Text style={styles.titleText}>Create new password</Text>
          <Text style={styles.subText}>
            Your new password should be diffrent from your old one.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Icon
              name="lock-closed"
              size={20}
              color={COLORS.ruby}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="New password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Icon name="eye-off" size={20} color={COLORS.ruby} />
          </View>
          <View style={[styles.inputGroup, { marginTop: 24 }]}>
            <Icon
              name="lock-closed"
              size={20}
              color={COLORS.ruby}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="re-type password"
              secureTextEntry={true}
              value={retypedPassword}
              onChangeText={setRetypedPassword}
            />
            <Icon name="eye-off" size={20} color={COLORS.ruby} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.btn} onPress={handleReset}>
            <Text style={styles.btnText}>Reset Password</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 20 : 0,
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
  },
  top: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 0.4,
  },
  titleText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
    marginBottom: 12,
  },
  subText: {
    color: "#9E9E9E",
    fontSize: 16,
    marginBottom: 7,
    fontFamily: "UrbanistMedium",
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  inputGroup: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  input: {
    height: 30,
    marginVertical: 30,
    flex: 1,
    fontFamily: "UrbanistBold",
    fontSize: 14,
  },
  buttonContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  btn: {
    height: 58,
    width: "100%",
    backgroundColor: COLORS.ruby,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
});
