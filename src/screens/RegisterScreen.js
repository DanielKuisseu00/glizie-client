import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RegisterScreen = ({ navigation }) => {
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
  return (
    <SafeAreaView style={styles.container}>
      <TopBar handleNavBack={handleNavBack} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Create your account</Text>
      </View>

      {/* form wrapper */}
      <View style={styles.formWrapper}>
        {/* email input wrapper */}
        <View style={styles.inputWrapper}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../assets/images/email.png")}
              resizeMode="cover"
            />
          </View>
          <TextInput placeholder="email" style={styles.input} />
        </View>

        {/* password input wrapper */}
        <View style={styles.inputWrapper}>
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../assets/images/password.png")}
              resizeMode="cover"
            />
          </View>
          <TextInput
            placeholder="password"
            style={styles.input}
            secureTextEntry={true}
          />
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../assets/images/dont-see.png")}
              resizeMode="cover"
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
      </View>
    </SafeAreaView>
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
    borderRadius: 30,
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
    flexDirection: "row",
  },
  iconWrapper: {
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
});

export default RegisterScreen;
