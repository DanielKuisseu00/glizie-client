import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useFonts } from "expo-font";
export default function Suggestion({ image, title }) {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistLight: require("../../assets/fonts/urbanist/Urbanist-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.suggestion}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://m.media-amazon.com/images/I/81-HDPQIgIL._SY355_.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Lacefronts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggestion: {
    width: "48%",
    backgroundColor: "#ECECEC",
    height: 120,
    marginBottom: 10,
    marginRight: "2%",
    borderRadius: 10,
    flexDirection: "column",
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    height: "100%",
    flex: 0.4,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontFamily: "UrbanistBold",
    fontSize: 18,
    paddingLeft: 15,
  },
});
