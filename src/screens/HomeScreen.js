import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import TopBar from "../components/TopBar";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default HomeScreen;
