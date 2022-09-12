import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
  Image,
  StatusBar,
  Pressable,
} from "react-native";
import TopBar from "../components/TopBar";
import { useFonts } from "expo-font";
import { COLORS } from "../data/colors";
import Banner from "../components/Banner";

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    UrbanistBold: require("../../assets/fonts/urbanist/Urbanist-Bold.ttf"),
    UrbanistSemiBold: require("../../assets/fonts/urbanist/Urbanist-SemiBold.ttf"),
    UrbanistRegular: require("../../assets/fonts/urbanist/Urbanist-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
      />
      <ScrollView showsVerticalScrollIndicator={false} />
      <Banner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default HomeScreen;
