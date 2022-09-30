import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";

import IonIcon from "react-native-vector-icons/Ionicons";
export default function Search({ handlePress }) {
  const [loaded] = useFonts({
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistLight: require("../../assets/fonts/urbanist/Urbanist-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.searchContainer}>
      <View style={styles.iconContainer}>
        <IonIcon name="search" size={24} />
      </View>
      <Pressable style={styles.textInput} onPress={handlePress}>
        <Text style={styles.text}>Service, Stylist, or Product</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 24,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    backgroundColor: "#ededed",
    borderRadius: 12,
    flexDirection: "row",
    height: 54,
  },
  iconContainer: {
    flex: 0.2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: "UrbanistBold",
    fontSize: 18,
  },
  text: {
    fontFamily: "UrbanistRegular",
    fontSize: 16,
    color: "#adadad",
  },
});
