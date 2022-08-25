import React, { useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import { COLORS } from "../data/colors";
import Icon from "react-native-vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

const ForgotPasswordScreen = ({ navigation }) => {
  const [numberSelected, setNumberSelected] = useState(false);
  const [emailSelected, setEmailSelected] = useState(false);

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

  const handleVerify = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("pin");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      {/* topbar component*/}

      <TopBar handleNavBack={handleNavBack} topBarText="Forgot Password" />
      {/* TOP section */}

      <View style={styles.topSection}>
        <Image
          source={require("../../assets/images/Frame.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="cover"
        />
      </View>
      {/* MIDDLE section */}
      <View style={styles.middleSection}>
        {/* text container */}
        <View style={styles.textContainer}>
          <Text style={styles.containerText}>
            Select which contact details we should use to reset your password
          </Text>
        </View>
        {/* button container */}
        <View style={styles.buttonContainer}>
          {/* buttons */}
          <Pressable
            onPress={() => {
              setNumberSelected(true);
              setEmailSelected(false);
            }}
            style={[
              styles.button,
              {
                borderColor: numberSelected ? COLORS.ruby : "#757575",
              },
            ]}
          >
            <View style={styles.iconSection}>
              <View style={styles.icon}>
                <Icon name="chatbox" color={COLORS.ruby} size={30} />
              </View>
            </View>
            <View style={styles.textSection}>
              <Text style={styles.titleText}>via SMS</Text>
              <Text style={styles.numberText}>+1 111****99</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setNumberSelected(false);
              setEmailSelected(true);
            }}
            style={[
              styles.button,

              {
                borderColor: emailSelected ? COLORS.ruby : "#757575",
              },
            ]}
          >
            <View style={styles.iconSection}>
              <View style={styles.icon}>
                <Icon name="mail" color={COLORS.ruby} size={30} />
              </View>
            </View>
            <View style={styles.textSection}>
              <Text style={styles.titleText}>via Email</Text>
              <Text style={styles.numberText}>+1 111****99</Text>
            </View>
          </Pressable>
        </View>
      </View>
      {/* BOTTOM section */}
      <View style={styles.bottomSection}>
        <Pressable onPress={handleVerify} style={styles.continueBtn}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
  },
  topSection: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  middleSection: {
    flex: 1,
  },
  textContainer: {
    width: "100%",
    flex: 0.2,
    justifyContent: "center",
  },
  containerText: {
    fontFamily: "UrbanistMedium",
    fontSize: 18,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-around",
  },
  button: {
    borderWidth: 3,
    borderColor: "#757575",
    height: 128,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
  },
  iconSection: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  textSection: {
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.lightRuby,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "UrbanistMedium",
    fontSize: 14,
    color: "#757575",
    marginBottom: 10,
  },
  numberText: {
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
  bottomSection: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  continueBtn: {
    width: "100%",
    height: 58,
    backgroundColor: COLORS.ruby,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  continueBtnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
