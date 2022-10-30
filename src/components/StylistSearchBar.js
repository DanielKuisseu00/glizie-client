import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFonts } from "expo-font";

const StylistSearchBar = ({ stylistName, handleNav }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
    UrbanistMedium: require("../../assets/fonts/urbanist/Urbanist-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Pressable
      style={styles.searchContainer}
      handlePress={() => {
        console.log("clicked");
      }}
    >
      <View style={styles.leftWrapper}>
        <Ionicons name="search" size={24} color={"#7d7d7d"} />
      </View>
      <View style={styles.rightWrapper}>
        <Text style={styles.searchBarText}>
          Search {stylistName}'s services
        </Text>
      </View>
    </Pressable>
  );
};

export default StylistSearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#e8e8e8",
    marginHorizontal: 24,
    padding: 10,
    borderRadius: 10,
    marginBottom: 24,
    flexDirection: "row",
    height: 50,
  },
  leftWrapper: {
    flex: 0.1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rightWrapper: { flex: 1, justifyContent: "center" },
  searchBarText: {
    fontFamily: "UrbanistRegular",
    fontSize: 15,
    color: "#7d7d7d",
  },
});
