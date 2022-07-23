import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";

const TopBar = ({ handleNavBack, topBarText }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.topBar}>
      <Pressable onPress={handleNavBack} style={styles.backIconWrapper}>
        <Image
          source={require("../../assets/images/arrow-left.png")}
          resizeMode="contain"
          style={{ height: "100%", width: "100%" }}
        />
      </Pressable>
      <Text style={styles.topBarText}>{topBarText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    width: Dimensions.get("window").width,
    marginBottom: 24,
    paddingHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  backIconWrapper: {
    width: 28,
    height: 28,
    marginRight: 24,
  },
  topBarText: {
    fontFamily: "UrbanistBold",
    fontSize: 24,
  },
});

export default TopBar;
