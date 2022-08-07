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
import Icon from "react-native-vector-icons/Ionicons";

const TopBar = ({
  handleNavBack,
  topBarText,
  iconColor,
  backgroundColor,
  isAbsolute,
}) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.topBar,
        {
          backgroundColor: backgroundColor,
          position: isAbsolute ? "absolute" : "static",
        },
      ]}
    >
      <Pressable onPress={handleNavBack} style={styles.backIconWrapper}>
        <Icon name={"arrow-back"} size={30} color={iconColor} />
      </Pressable>
      <Text style={styles.topBarText}>{topBarText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    width: Dimensions.get("window").width,
    marginBottom: 0,
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
