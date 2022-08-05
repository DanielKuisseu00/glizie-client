import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SplashScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const handleNavigate = () => {
    navigation.navigate("onboarding");
  };

  return (
    <Pressable onPress={handleNavigate} style={styles.wrapper}>
      <ImageBackground
        source={require("../../assets/images/pink.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <LinearGradient
          style={styles.bottomWrapper}
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          end={{ x: 0, y: 0.2 }}
          start={{ x: 0, y: 0 }}
        >
          <Text style={styles.subtitle}>Welcome to ✋</Text>
          <Text style={styles.title}>Glizie</Text>
          <Text style={styles.subText}>
            The best beauty app youll ever need.{" "}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "white" },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomWrapper: {
    width: width,
    flex: 0.3,
    paddingLeft: 30,
    paddingTop: 70,
    paddingBottom: 30,
  },
  subtitle: {
    color: "white",
    fontFamily: "UrbanistBold",
    fontSize: 48,
  },
  title: {
    color: "#FB9400",
    fontFamily: "UrbanistBold",
    fontSize: 96,
  },
  subText: {
    color: "white",
    fontFamily: "UrbanistRegular",
    fontSize: 15,
  },
});

export default SplashScreen;
