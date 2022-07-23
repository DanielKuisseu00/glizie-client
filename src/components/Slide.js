import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  Platform,
} from "react-native";
import { useFonts } from "expo-font";

const Slide = ({ item }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    maxWidth: Dimensions.get("window").width,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Platform.OS === "android" ? "60%" : "70%",
  },
  title: {
    fontSize: 35,
    fontFamily: "UrbanistBold",
  },
  textContainer: {
    height: Platform.OS === "android" ? "40%" : "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});

export default Slide;
