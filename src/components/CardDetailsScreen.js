import { StyleSheet, Text, SafeAreaView, Platform } from "react-native";
import React from "react";

const CardDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CardDetailsScreen</Text>
    </SafeAreaView>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
