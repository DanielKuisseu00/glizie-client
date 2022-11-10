import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import * as Haptics from "expo-haptics";
import { COLORS } from "../data/colors";
import Icon from "react-native-vector-icons/Feather";

const WelcomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleRegister = () => {
    navigation.navigate("signUp");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleNavHome = () => {
    navigation.navigate("home");
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent barStyle={"dark-content"} />
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
          {/* ACTION SECTION */}
          <View style={styles.actionContainer}>
            {/* BUTTON CONTAINER */}
            <View style={styles.actionWrapper}>
              <Pressable onPress={handleRegister} style={styles.btn}>
                <Text style={styles.btnText}>Continue</Text>
                <View style={styles.iconContainer}>
                  <Icon name="arrow-right" size={30} color="white" />
                </View>
              </Pressable>

              <Pressable onPress={handleNavHome} style={styles.skipBtn}>
                <Text style={styles.skipText}>Skip</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    height: "103%",
    width: "100%",
  },
  darkOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
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
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 96,
  },
  actionContainer: {
    height: "75%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionWrapper: {
    width: "100%",
    height: "25%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginBottom: Platform.OS === "android" ? 50 : -10,
  },
  btn: {
    backgroundColor: COLORS.ruby,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconContainer: {
    position: "absolute",
    right: 30,
  },
  btnText: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 20,
  },
  skipBtn: {
    padding: 10,
    marginTop: 14,
  },
  skipText: {
    fontSize: 20,
    fontFamily: "UrbanistBold",
  },
});

export default WelcomeScreen;
