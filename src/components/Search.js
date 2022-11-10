import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";

export default function Search({ handlePress }) {
  const [loaded] = useFonts({
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistLight: require("../../assets/fonts/urbanist/Urbanist-Light.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={24} />
        </View>
        <Pressable style={styles.textInput} onPress={handlePress}>
          <Text style={styles.text}>Service, Stylist, or Product</Text>
        </Pressable>
      </View>
      <View style={styles.filterWrapper}>
        <Pressable style={[styles.btn, { marginRight: 10 }]}>
          <Ionicons name="md-map" size={20} />
          <Text style={styles.btnText}>Map</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Foundation name="filter" size={20} />
          <Text style={styles.btnText}>Sort</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
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
  filterWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 24,
  },
  btn: {
    backgroundColor: "#ededed",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 100,
    borderRadius: 7,
    flexDirection: "row",
  },
  btnText: {
    fontFamily: "UrbanistSemiBold",
    marginLeft: 7,
  },
});
