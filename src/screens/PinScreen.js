import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Platform } from "react-native";
import TopBar from "../components/TopBar";

const PinScreen = ({ navigation }) => {
  const handleNavBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar handleNavBack={handleNavBack} topBarText="Verify" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default PinScreen;
